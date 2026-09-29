import type { IconName } from "@/components/Icon";

export const REGISTER_URL = "https://forms.cloud.microsoft/e/20XRHrbVef";

export const PRACTICAL_ITEMS: { icon: IconName; label: string; val: string; sub: string }[] = [
  { icon: "calendar", label: "When", val: "Mondays, 11:30–13:00", sub: "Weekly sessions starting in October." },
  { icon: "pin", label: "Where", val: "Location to be announced", sub: "Room assignment pending. Check back soon!" },
  { icon: "users", label: "Who", val: "KS3 to A Level", sub: "All experience levels. No selection process." },
  { icon: "laptop", label: "What to bring", val: "Nothing", sub: "School computers provided. Bring your own device if you prefer." },
];
