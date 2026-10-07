export const INSTAGRAM_DM = "https://ig.me/m/littlebitesgta";
export const INSTAGRAM_PROFILE = "https://www.instagram.com/littlebitesgta/";
export const TIKTOK = "https://www.tiktok.com/@littlebitesgta";
export const FACEBOOK = "https://www.facebook.com/61572230903534/";
export const THREADS = "https://www.threads.com/@littlebitesgta";
export const DAILY_BITE = "https://www.instagram.com/thedailybite.mj/";
export const EMAIL = "littlebitesgta@gmail.com";
export const PHONE_DISPLAY = "647-532-6653";
export const PHONE_TEL = "+16475326653";

export function getSiteUrl() {
  const production = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (production) return `https://${production}`;
  const preview = process.env.VERCEL_URL;
  if (preview) return `https://${preview}`;
  return "http://localhost:3000";
}

export const occasions = [
  "Birthday",
  "Shower",
  "Wedding",
  "Corporate event",
  "Office lunch",
  "Intimate celebration",
  "Something else",
] as const;

export const orderItems = [
  "Sandwich and wrap platters",
  "Slider trays",
  "Grazing table",
  "Kids munch cups",
  "Skewers",
  "Sweet treats and tea bites",
  "White glove setup and styling",
] as const;

export function buildOrderMessage(input: {
  name: string;
  occasion: string;
  date: string;
  guests: string;
  items: string[];
  note: string;
}) {
  const when = new Date(`${input.date}T12:00:00`);
  const prettyDate = Number.isNaN(when.getTime())
    ? input.date
    : when.toLocaleDateString("en-CA", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });

  const lines = [
    input.name.trim()
      ? `Hi Little Bites, this is ${input.name.trim()}.`
      : "Hi Little Bites,",
    "",
    "I would love to plan a party with you.",
    "",
    `Occasion: ${input.occasion}`,
    `Date: ${prettyDate}`,
    `Guests: ${input.guests}`,
    `Hoping for: ${input.items.join(", ")}`,
  ];

  if (input.note.trim()) {
    lines.push("", input.note.trim());
  }

  lines.push("", "Thank you!");
  return lines.join("\n");
}
