import { Search, Megaphone, PenTool, Image as ImageIcon, MessageSquare, Cpu } from 'lucide-react';
import { Service, ServiceCategory } from '../types';

export const servicesList: Service[] = [
  {
    id: 'seo',
    title: 'SEO Optimization',
    description: 'Boost your rankings with data-driven keywords, technical audits, and backlink strategies.',
    longDescription: 'Search Engine Optimization is the backbone of digital visibility. Our comprehensive SEO services go beyond basic keyword stuffing. We perform deep technical audits, optimize your site structure, and create content strategies that align with user intent. Whether you are a local business or a global enterprise, we help you climb the rankings and stay there.',
    category: ServiceCategory.MARKETING,
    icon: Search,
    features: ['Keyword Research', 'On-Page Optimization', 'Technical SEO', 'Link Building'],
    benefits: ['Increased Organic Traffic', 'Higher Brand Credibility', 'Better User Experience', 'Long-term ROI']
  },
  {
    id: 'social',
    title: 'Social Media Marketing',
    description: 'Engage your audience across Instagram, LinkedIn, and Twitter with tailored content strategies.',
    longDescription: 'Social media is where your customers live. We help you build a vibrant community around your brand. From crafting thumb-stopping visuals to managing day-to-day interactions, our team ensures your brand voice is consistent and engaging across all platforms including Instagram, LinkedIn, X (Twitter), and TikTok.',
    category: ServiceCategory.MARKETING,
    icon: Megaphone,
    features: ['Content Calendar', 'Community Management', 'Influencer Outreach', 'Analytics Reports'],
    benefits: ['Direct Customer Engagement', 'Brand Loyalty', 'Viral Potential', 'Targeted Audience Reach']
  },
  {
    id: 'content',
    title: 'Content Creation',
    description: 'High-quality blog posts, articles, and whitepapers written by experts and refined by AI.',
    longDescription: 'Content is king, but context is queen. We produce high-quality, relevant content that resonates with your audience. Leveraging a mix of human creativity and AI efficiency, we deliver blog posts, whitepapers, newsletters, and scripts that drive action and establish thought leadership.',
    category: ServiceCategory.MARKETING,
    icon: PenTool,
    features: ['Blog Writing', 'Copywriting', 'E-books', 'Newsletters'],
    benefits: ['Authority Building', 'Lead Nurturing', 'SEO Support', 'Multi-channel Utility']
  },
  {
    id: 'ai-gen',
    title: 'AI Image & Video',
    description: 'Generate stunning visuals and marketing videos instantly using Gemini and Veo models.',
    longDescription: 'Break through the noise with stunning visuals generated at the speed of light. Utilizing cutting-edge models like Gemini 2.5 and Veo, we create bespoke imagery and video content for your campaigns. Say goodbye to generic stock photos and hello to on-brand, imaginative visuals.',
    category: ServiceCategory.AI,
    icon: ImageIcon,
    features: ['Custom Illustrations', 'Product Mockups', 'Explainer Videos', 'Social Media Reels'],
    benefits: ['Rapid Production', 'Cost Effective', 'Unlimited Creativity', 'Consistent Style']
  },
  {
    id: 'chatbot',
    title: 'AI Chatbots',
    description: '24/7 customer support automation using advanced LLMs to handle queries and bookings.',
    longDescription: 'Transform your customer support with intelligent AI chatbots. Our solutions run 24/7, handling complex queries, booking appointments, and qualifying leads before they even reach your sales team. We customize the knowledge base to ensure accurate, on-brand responses every time.',
    category: ServiceCategory.AI,
    icon: MessageSquare,
    features: ['Custom Knowledge Base', 'Multi-platform Integration', 'Lead Qualification', 'Sentiment Analysis'],
    benefits: ['24/7 Availability', 'Instant Response Time', 'Reduced Support Costs', 'Scalable Operations']
  },
  {
    id: 'automation',
    title: 'Workflow Automation',
    description: 'Streamline your business processes with smart integrations and automated triggers.',
    longDescription: 'Stop wasting time on repetitive tasks. We build custom automation workflows that connect your favorite apps—CRM, Email, Project Management, and more. From automated reporting to lead routing, we streamline your operations so you can focus on strategy and growth.',
    category: ServiceCategory.DEVELOPMENT,
    icon: Cpu,
    features: ['Email Automation', 'CRM Integration', 'Report Generation', 'Task Management'],
    benefits: ['Error Reduction', 'Time Savings', 'Process Consistency', 'Scalability']
  }
];
