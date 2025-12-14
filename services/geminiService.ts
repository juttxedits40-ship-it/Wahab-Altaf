import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Helper to get AI instance. Note: we create a new instance per call to ensure latest API key is used
// especially important for Veo if the user switches keys.
const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateMarketingCopy = async (topic: string, tone: string, type: string): Promise<string> => {
  try {
    const ai = getAI();
    const prompt = `Act as a professional digital marketer. Write a ${type} about "${topic}". The tone should be ${tone}. Keep it engaging, concise, and optimized for conversion.`;
    
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "No content generated.";
  } catch (error) {
    console.error("Error generating text:", error);
    throw new Error("Failed to generate marketing copy.");
  }
};

export const generateAIImage = async (prompt: string): Promise<string> => {
  try {
    const ai = getAI();
    // Using gemini-2.5-flash-image for standard generation
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [{ text: prompt }]
      },
      config: {
        imageConfig: {
            aspectRatio: "1:1"
        }
      }
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    throw new Error("No image data found in response");
  } catch (error) {
    console.error("Error generating image:", error);
    throw new Error("Failed to generate image.");
  }
};

export const generateAIVideo = async (prompt: string): Promise<string> => {
  try {
    // Check for Paid Key Selection for Veo
    // Cast to any to access aistudio to avoid type conflict with existing AIStudio definition
    const aistudio = (window as any).aistudio;
    if (!aistudio?.hasSelectedApiKey()) {
        throw new Error("API_KEY_REQUIRED");
    }

    const ai = getAI();
    let operation = await ai.models.generateVideos({
      model: 'veo-3.1-fast-generate-preview',
      prompt: prompt,
      config: {
        numberOfVideos: 1,
        resolution: '720p', // 720p is standard for fast preview
        aspectRatio: '16:9'
      }
    });

    // Poll for completion
    while (!operation.done) {
      await new Promise(resolve => setTimeout(resolve, 5000)); // Poll every 5s
      operation = await ai.operations.getVideosOperation({operation: operation});
    }

    const videoUri = operation.response?.generatedVideos?.[0]?.video?.uri;
    if (!videoUri) {
      throw new Error("No video URI returned.");
    }

    // Append key for download/playback
    // We can return the direct fetch URL, but for <video src="..."> we need the key attached
    return `${videoUri}&key=${process.env.API_KEY}`;

  } catch (error: any) {
    console.error("Error generating video:", error);
    if (error.message === "API_KEY_REQUIRED") {
        throw error;
    }
    throw new Error("Failed to generate video.");
  }
};

export const chatWithAssistant = async (history: {role: string, parts: {text: string}[]}[], message: string): Promise<string> => {
  try {
    const ai = getAI();
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      history: history,
      config: {
        systemInstruction: "You are CleverCore, a helpful AI assistant for a Digital Marketing Agency. You help users understand services like SEO, Social Media, and AI solutions. You are professional, concise, and friendly."
      }
    });

    const result = await chat.sendMessage({ message });
    return result.text || "I'm having trouble understanding that.";
  } catch (error) {
    console.error("Chat error:", error);
    return "Sorry, I am currently offline. Please try again later.";
  }
};