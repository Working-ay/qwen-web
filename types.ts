import { LucideIcon } from "lucide-react";

export enum PlanType {
  MINECRAFT = 'MINECRAFT',
  DISCORD = 'DISCORD',
  VPS = 'VPS'
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  ram: string;
  cpu: string;
  storage: string;
  bandwidth?: string; // Optional because Discord plans might not emphasize it as much
  ddos?: string;
  slots: string; // Can be slots or database count for bots
  features: string[];
  type: PlanType;
  recommended?: boolean;
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TeamMember {
  name: string;
  role: string;
  avatar: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export interface ExtendedTeamMember extends TeamMember {
  bio?: string;
  website?: string;
}

export type BlogCategory = 'Announcement' | 'Update' | 'Report' | 'Blog' | 'General';

export interface BlogPost {
  id: number;
  title: string;
  content: string; // HTML string or plain text
  image: string;
  date: string;
  author: string;
  role: string;
  tag: BlogCategory;
}

export interface Location {
  city: string;
  country: string;
  code: string;
  flag: string;
  ping: string;
  hostname: string;
  coords: { top: string; left: string };
}
