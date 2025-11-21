
import { Shield, Zap, Clock, Server, Headset, Lock, LucideIcon, Star } from "lucide-react";
import { Feature, PlanType, PricingPlan, ExtendedTeamMember, Location } from "./types";

export const APP_NAME = "KSCloud Hosting";
export const LOGO_URL = "https://i.postimg.cc/9FVg7PNM/ksclou.webp";
export const FOUNDED_DATE = "2024";

export const SYSTEM_INSTRUCTION = `You are KS-AI, the intelligent support assistant for KSCloud Hosting. 
Your goal is to assist users with information about our hosting services, including Minecraft servers, Discord bots, and upcoming VPS solutions.
Always be polite, professional, and enthusiastic about gaming.
Use the context provided to answer questions about pricing, plans, specs (RAM, CPU), and features.
If you don't know the answer, guide the user to our Discord or Billing support.
Key selling points to mention when relevant: AMD EPYC 9354P processors, NVMe SSDs, DDoS protection, and instant setup.
Founders: Frontman and AyrixMC.`;

export const LINKS = {
  panel: "https://console.kscloudhost.net",
  billing: "https://billing.kscloudhost.net",
  discord: "https://discord.gg/bvkrSeQ3Hc", 
  youtube: "https://www.youtube.com/@kscloudofficial",
  instagram: "https://www.instagram.com/kscloudofficial/?igsh=MWR0OHFpbm02Y2lvOQ%3D%3D#",
  docs: "/#/documentation", // Internal link
  status: "#",
  email: "support@kscloud.net"
};

export const TEAM: ExtendedTeamMember[] = [
  {
    name: "Frontman",
    role: "Founder",
    avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=Frontman&backgroundColor=000000&eyes=variant04&brows=variant02", // Sleek B&W style
    bio: "The visionary behind KSCloud. Passionate about hardware architecture and democratizing high-performance server hosting for communities worldwide."
    // No website for Frontman
  },
  {
    name: "AyrixMC",
    role: "Director / COO",
    avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=AyrixMC&backgroundColor=0a0a0a&glasses=variant03", // Professional style
    bio: "Director of Operations. Orchestrating the global infrastructure and ensuring 24/7 stability. Dedicated to delivering the ultimate seamless experience for our clients.",
    website: "https://ayrixmc.fun"
  }
];

export const TECH_STACK = [
  "AMD EPYC 9354P", "NVMe SSD", "DDR5 RAM", "Path.net", "Pterodactyl", "Docker", "KVM", "Cloudflare", "Ubuntu"
];

// Using simpleicons.org for reliable SVGs that work well in monochrome
export const TECH_LOGOS = [
  { name: "AMD", url: "https://cdn.simpleicons.org/amd/white" },
  { name: "Cloudflare", url: "https://cdn.simpleicons.org/cloudflare/white" },
  { name: "Docker", url: "https://cdn.simpleicons.org/docker/white" },
  { name: "Ubuntu", url: "https://cdn.simpleicons.org/ubuntu/white" },
  { name: "Java", url: "https://cdn.simpleicons.org/openjdk/white" },
  { name: "Python", url: "https://cdn.simpleicons.org/python/white" },
  { name: "Linux", url: "https://cdn.simpleicons.org/linux/white" },
  { name: "Discord", url: "https://cdn.simpleicons.org/discord/white" }
];

export const PANEL_IMAGES = [
  { 
    title: "Plugin Installer", 
    src: "https://i.postimg.cc/xd8gynmR/Screenshot-2025-11-20-192237.png",
    alt: "Easy Plugin Installer Panel"
  },
  {
    title: "Main Console",
    src: "https://i.postimg.cc/mcGF0YgN/Screenshot-2025-10-26-034540.png", 
    alt: "Server Console Control"
  }
];

export const LOCATIONS: Location[] = [
  {
    city: "Boston",
    country: "United States",
    code: "US",
    flag: "🇺🇸",
    ping: "15ms",
    hostname: "usabos1.kscloudhost.net",
    coords: { top: '32%', left: '25%' }
  },
  {
    city: "Frankfurt",
    country: "Germany",
    code: "DE",
    flag: "🇩🇪",
    ping: "20ms",
    hostname: "gerfkt1.kscloudhost.net",
    coords: { top: '25%', left: '50%' }
  }
];

export const FEATURES: Feature[] = [
  {
    title: "Blazing-Fast Servers",
    description: "Powered by high-performance hardware including NVMe SSDs and AMD EPYC CPUs for lag-free gameplay.",
    icon: Zap
  },
  {
    title: "DDoS Protection",
    description: "Advanced mitigation strategies keep your server online even during heavy attacks.",
    icon: Shield
  },
  {
    title: "Instant Setup",
    description: "Our automated systems deploy your service within seconds of payment confirmation.",
    icon: Clock
  },
  {
    title: "24/7 Support",
    description: "Expert team always available via Discord and Ticket system to assist you.",
    icon: Headset
  },
  {
    title: "Easy Control Panel",
    description: "Manage files, consoles, and plugins with our intuitive Pterodactyl-based panel.",
    icon: Server
  },
  {
    title: "Affordable Plans",
    description: "Premium hosting experience without the premium price tag.",
    icon: Lock
  }
];

export const PLANS: PricingPlan[] = [
  // Minecraft Plans
  {
    id: "mc-micro",
    name: "Micro Plan",
    price: "$1.99/mo",
    ram: "2 GB",
    cpu: "50% Shared vCPU",
    storage: "25 GB NVMe SSD",
    bandwidth: "250 GB",
    ddos: "Basic",
    slots: "Unlimited",
    features: ["1 Port", "1 Backup Slot", "Basic Support"],
    type: PlanType.MINECRAFT
  },
  {
    id: "mc-starter",
    name: "Starter Plan",
    price: "$3.59/mo",
    ram: "4 GB",
    cpu: "100% Shared vCPU",
    storage: "50 GB NVMe SSD",
    bandwidth: "500 GB",
    ddos: "Basic",
    slots: "Unlimited",
    features: ["1 Port", "2 Backup Slots", "Standard Support"],
    type: PlanType.MINECRAFT
  },
  {
    id: "mc-growth",
    name: "Growth Plan",
    price: "$5.29/mo",
    ram: "6 GB",
    cpu: "150% Shared vCPU",
    storage: "75 GB NVMe SSD",
    bandwidth: "750 GB",
    ddos: "Standard",
    slots: "Unlimited",
    features: ["2 Ports", "3 Backup Slots", "Standard Support"],
    type: PlanType.MINECRAFT
  },
  {
    id: "mc-standard",
    name: "Standard Plan",
    price: "$6.85/mo",
    ram: "8 GB",
    cpu: "200% Shared vCPU",
    storage: "100 GB NVMe SSD",
    bandwidth: "1 TB",
    ddos: "Standard",
    slots: "Unlimited",
    features: ["3 Ports", "4 Backup Slots", "Priority Support"],
    type: PlanType.MINECRAFT,
    recommended: true
  },
  {
    id: "mc-advanced",
    name: "Advanced Plan",
    price: "$9.57/mo",
    ram: "12 GB",
    cpu: "300% Shared vCPU",
    storage: "150 GB NVMe SSD",
    bandwidth: "2 TB",
    ddos: "Advanced",
    slots: "Unlimited",
    features: ["4 Ports", "5 Backup Slots", "Priority Support"],
    type: PlanType.MINECRAFT
  },
  {
    id: "mc-premium",
    name: "Premium Plan",
    price: "$12.99/mo",
    ram: "16 GB",
    cpu: "400% Shared vCPU",
    storage: "200 GB NVMe SSD",
    bandwidth: "3 TB",
    ddos: "Advanced",
    slots: "Unlimited",
    features: ["5 Ports", "Daily Backups", "VIP Support"],
    type: PlanType.MINECRAFT
  },
  
  // Discord Bot Plans
  {
    id: "bot-starter",
    name: "Starter Bot",
    price: "$2.95/mo",
    ram: "1 GB",
    cpu: "1 vCPU Core",
    storage: "5 GB SSD",
    slots: "1 Database",
    features: ["24/7 Uptime", "DDoS Protection", "Instant Setup"],
    type: PlanType.DISCORD
  },
  {
    id: "bot-pro",
    name: "Pro Bot",
    price: "$4.10/mo",
    ram: "2 GB",
    cpu: "2 vCPU Cores",
    storage: "10 GB SSD",
    slots: "2 Databases",
    features: ["24/7 Uptime", "Full Panel Access", "Free Migration"],
    type: PlanType.DISCORD
  },
  {
    id: "bot-premium",
    name: "Premium Bot",
    price: "$6.10/mo",
    ram: "4 GB",
    cpu: "3 vCPU Cores",
    storage: "20 GB SSD",
    slots: "4 Databases",
    features: ["High Activity Support", "Priority Support", "Free Migration"],
    type: PlanType.DISCORD,
    recommended: true
  },
  {
    id: "bot-ultimate",
    name: "Ultimate Bot",
    price: "$11.10/mo",
    ram: "8 GB",
    cpu: "4 vCPU Cores",
    storage: "50 GB SSD",
    slots: "8 Databases",
    features: ["Enterprise Ready", "Multi-bot Support", "VIP Support"],
    type: PlanType.DISCORD
  }
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_DATA: Record<string, FAQItem[]> = {
  minecraft: [
    {
      question: "How long does it take to set up my server?",
      answer: "Setup is instant! Once your payment is confirmed, our automated system deploys your server within 60 seconds."
    },
    {
      question: "Can I upgrade my plan later?",
      answer: "Yes, you can upgrade or downgrade your plan at any time through our billing panel. Your data will be preserved."
    },
    {
      question: "What versions of Minecraft do you support?",
      answer: "We support all versions, including Java Edition, Bedrock, Spigot, Paper, Fabric, Forge, and more. You can switch versions easily in the panel."
    },
    {
      question: "Is DDoS protection included?",
      answer: "Absolutely. All plans come with always-on DDoS protection to keep your server safe from attacks."
    }
  ],
  discord: [
    {
      question: "What languages do you support?",
      answer: "We support Node.js, Python, Java, and more. If it runs on Linux, it likely runs on our bot hosting."
    },
    {
      question: "How do I upload my bot files?",
      answer: "You can use SFTP (FileZilla, WinSCP) or the web-based File Manager in our control panel to upload your files."
    },
    {
      question: "Can I host multiple bots on one plan?",
      answer: "Technically yes, as long as you stay within your resource limits (RAM/CPU). However, we recommend one bot per service for stability."
    }
  ],
  support: [
    {
      question: "What are your support hours?",
      answer: "Our support team is available from 10:00 AM to 10:00 PM (European Time & Indian Time). Critical infrastructure is monitored 24/7."
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 24-hour money-back guarantee for technical issues that our team cannot resolve."
    },
    {
      question: "Do you offer free migrations?",
      answer: "Yes! Open a ticket after purchasing, and our team will help you move your files from your old host to KSCloud."
    }
  ]
};

export const TESTIMONIALS = [
  {
    name: "Venace",
    role: "Bot Developer",
    content: "Honestly the best bot hosting I've used. The panel is responsive, 24/7 uptime is real, and the pricing is unbeatable for the specs you get.",
    rating: 5
  },
  {
    name: "Prestontop1",
    role: "Minecraft Server Owner",
    content: "Switched from a bigger host and the difference is night and day. Zero lag on my SMP, chunks load instantly, and the support team is legendary.",
    rating: 5
  }
];
