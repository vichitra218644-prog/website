import type { Feature } from '@/lib/settings';
import {
  FileText,
  Languages,
  Download,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Globe,
  type LucideIcon,
} from 'lucide-react';

const FEATURE_ICON_MAP: Record<string, LucideIcon> = {
  FileText,
  Languages,
  Download,
};

export function getFeatureIcon(name: string): LucideIcon {
  return FEATURE_ICON_MAP[name] ?? FileText;
}

const SOCIAL_ICON_MAP: Record<string, LucideIcon> = {
  twitter: Twitter,
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin,
  youtube: Youtube,
};

export function getSocialIcon(label: string): LucideIcon {
  const key = label.toLowerCase();
  return SOCIAL_ICON_MAP[key] ?? Globe;
}

export type { Feature };
