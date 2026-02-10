import { InstagramIcon, TwitterIcon, YouTubeIcon, TikTokIcon } from "../components/icons";

export interface SocialLink {
  id: string;
  url: string;
  label: string;
  icon: React.ComponentType;
}

export const socials: SocialLink[] = [
  {
    id: "instagram",
    url: "https://instagram.com/theconsuls",
    label: "Instagram",
    icon: InstagramIcon,
  },
  {
    id: "twitter",
    url: "https://twitter.com/theconsuls",
    label: "X",
    icon: TwitterIcon,
  },
  {
    id: "youtube",
    url: "https://youtube.com/theconsuls",
    label: "YouTube",
    icon: YouTubeIcon,
  },
  {
    id: "tiktok",
    url: "https://tiktok.com/@theconsuls",
    label: "TikTok",
    icon: TikTokIcon,
  },
];
