import fs from "node:fs";
import path from "node:path";

const REVIEWS_DIR = path.join(process.cwd(), "public", "avis-airbnb");
const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp"]);

/**
 * Récupère les captures d'écran d'avis voyageurs Airbnb déposées dans
 * public/avis-airbnb/. Tant que le dossier est vide, la section ne s'affiche
 * pas — il suffit d'y glisser des images (format 360x520, voir README du
 * dossier) pour qu'elle apparaisse.
 */
export function getGuestReviewImages(): string[] {
  if (!fs.existsSync(REVIEWS_DIR)) return [];
  return fs
    .readdirSync(REVIEWS_DIR)
    .filter((f) => IMAGE_EXTENSIONS.has(path.extname(f).toLowerCase()))
    .sort()
    .map((f) => `/avis-airbnb/${f}`);
}
