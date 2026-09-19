import { type IconSvgElement } from "@hugeicons/react";
import {
  Calendar01FreeIcons,
  Chart01FreeIcons,
  GiftFreeIcons,
  ListOrderedIcon,
  MessageCircleFreeIcons,
  MusicNote03FreeIcons,
} from "@hugeicons/core-free-icons";

export type CardDetails = {
  icon: IconSvgElement;
  title: string;
  description: string;
};

export const CardDetailsList: CardDetails[] = [
  {
    icon: ListOrderedIcon,
    title: "Order",
    description: "Keep people updated without the line.",
  },
  {
    icon: Chart01FreeIcons,
    title: "Poll",
    description: "Collect votes and see live results.",
  },
  {
    icon: GiftFreeIcons,
    title: "Raffle",
    description: "Let people enter and draw winners.",
  },
  {
    icon: MessageCircleFreeIcons,
    title: "Live Q&A",
    description: "Gather and organize audience questions.",
  },
  {
    icon: Calendar01FreeIcons,
    title: "Attendance",
    description: "Track check-ins for events, classes, and teams.",
  },
  {
    icon: MusicNote03FreeIcons,
    title: "Song Request",
    description: "Keep people updated without the line.",
  },
];
