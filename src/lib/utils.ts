import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string) {
  const currentDate = new Date();
  const targetDate = new Date(date.includes("T") ? date : `${date}T00:00:00`);
  const timeDifference = Math.abs(currentDate.getTime() - targetDate.getTime());
  const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  const fullDate = targetDate.toLocaleString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  if (daysAgo < 1) return "Aujourd'hui";
  if (daysAgo < 7) return `${fullDate} (${daysAgo}j avant)`;
  if (daysAgo < 30) return `${fullDate} (${Math.floor(daysAgo / 7)}s avant)`;
  if (daysAgo < 365) return `${fullDate} (${Math.floor(daysAgo / 30)}mois avant)`;
  return `${fullDate} (${Math.floor(daysAgo / 365)}ans avant)`;
}

export const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

export const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str)
