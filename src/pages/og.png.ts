import type { APIRoute } from "astro";
import { generateOgImageForSite } from "@/utils/generateOgImages";

export const GET: APIRoute = async () => {
  const buffer = await generateOgImageForSite();
  // Convert Node.js Buffer to Uint8Array for the Response constructor
  const uint8Array = new Uint8Array(buffer);
  return new Response(uint8Array, {
    headers: { "Content-Type": "image/png" },
  });
};
