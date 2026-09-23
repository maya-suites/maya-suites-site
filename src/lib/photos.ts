import type { StaticImageData } from "next/image";

import p01 from "@/images/01_salon-boheme-arches.jpg";
import p02 from "@/images/02_salon-lumiere-doree-olivier.jpg";
import p03 from "@/images/03_salon-fresque-fauteuil-rouge.jpg";
import p04 from "@/images/04_salon-vert-sauge-design.jpg";
import p05 from "@/images/05_salon-ouvert-terrasse-verdoyante.jpg";
import p06 from "@/images/06_salon-beige-elegant-lumineux.jpg";
import p07 from "@/images/07_salon-terracotta-lumineux.jpg";
import p08 from "@/images/08_salon-cosy-jaune-palmier.jpg";
import p09 from "@/images/09_salon-design-colore-pop.jpg";
import p10 from "@/images/10_loft-double-hauteur-gauthier.jpg";
import p11 from "@/images/11_balcon-coucher-de-soleil.jpg";
import p12 from "@/images/12_terrasse-nuit-lumieres.jpg";
import p13 from "@/images/13_rooftop-parasol-tropical.jpg";
import p14 from "@/images/14_piscine-palmiers-contre-jour.jpg";
import p15 from "@/images/15_piscine-rooftop-parasols.jpg";

export type Photo = {
  src: StaticImageData;
  alt: string;
  name: string;
  category: "Salon" | "Terrasse" | "Piscine";
};

export const PHOTOS: Photo[] = [
  {
    src: p01,
    alt: "Salon bohème avec arche et lumière naturelle — appartement géré par Maya Suites à Casablanca",
    name: "Othman",
    category: "Salon",
  },
  {
    src: p02,
    alt: "Salon baigné de lumière dorée avec olivier — conciergerie Airbnb Casablanca",
    name: "Sofia",
    category: "Salon",
  },
  {
    src: p03,
    alt: "Salon avec fresque végétale et fauteuil rouge sculptural — Maya Suites Casablanca",
    name: "Mounia",
    category: "Salon",
  },
  {
    src: p04,
    alt: "Salon vert sauge au design soigné — appartement en gestion Airbnb à Casablanca",
    name: "Anissa",
    category: "Salon",
  },
  {
    src: p05,
    alt: "Salon ouvert sur une terrasse végétalisée — location courte durée Casablanca",
    name: "Hafida",
    category: "Salon",
  },
  {
    src: p06,
    alt: "Salon beige élégant avec grande baie vitrée — Maya Suites",
    name: "Abdelaziz",
    category: "Salon",
  },
  {
    src: p07,
    alt: "Salon terracotta lumineux avec plantes — appartement Airbnb Casablanca",
    name: "Yousra",
    category: "Salon",
  },
  {
    src: p08,
    alt: "Salon cosy jaune ouvert sur un palmier — Maya Suites Casablanca",
    name: "Maria",
    category: "Salon",
  },
  {
    src: p09,
    alt: "Salon design coloré avec pièces signature — conciergerie Casablanca",
    name: "Zineb",
    category: "Salon",
  },
  {
    src: p10,
    alt: "Loft double hauteur avec escalier dans le quartier Gauthier — Maya Suites",
    name: "Mohamed",
    category: "Salon",
  },
  {
    src: p11,
    alt: "Balcon au coucher du soleil à Casablanca — location saisonnière",
    name: "Ayda",
    category: "Terrasse",
  },
  {
    src: p12,
    alt: "Terrasse de nuit à l'ambiance bougie — appartement Maya Suites",
    name: "Ayda",
    category: "Terrasse",
  },
  {
    src: p13,
    alt: "Rooftop avec parasol et plantes tropicales — Casablanca",
    name: "527",
    category: "Terrasse",
  },
  {
    src: p14,
    alt: "Piscine et palmiers à contre-jour — appartement avec piscine Casablanca",
    name: "Inès",
    category: "Piscine",
  },
  {
    src: p15,
    alt: "Piscine sur le toit avec transats et parasols jaunes — Maya Suites",
    name: "Faiza",
    category: "Piscine",
  },
];

export const HERO_PHOTO = PHOTOS[0];
