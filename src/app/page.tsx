import type { Metadata } from "next";
import { HomeHero } from "@/components/home/HomeHero";
import { KarimCase } from "@/components/home/KarimCase";
import { NoMoreTasks } from "@/components/home/NoMoreTasks";
import { OwnerSpace } from "@/components/home/OwnerSpace";
import { SimulatorSection } from "@/components/home/SimulatorSection";
import { PriceBand } from "@/components/home/PriceBand";
import { Neighborhoods } from "@/components/home/Neighborhoods";
import { Apartments } from "@/components/home/Apartments";
import { Founder } from "@/components/home/Founder";
import { OwnerReviews } from "@/components/home/OwnerReviews";
import { HomeFaq } from "@/components/home/HomeFaq";
import { ContactBand } from "@/components/home/ContactBand";

export const metadata: Metadata = {
  title: "Maya Suites : Conciergerie Airbnb à Casablanca",
  description:
    "Conciergerie Airbnb à Casablanca : on gère votre location de A à Z, vous suivez tout en ligne. 4,83★ sur 1 758 commentaires, sans engagement.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <KarimCase />
      <NoMoreTasks />
      <OwnerSpace />
      <SimulatorSection />
      <PriceBand />
      <Neighborhoods />
      <Apartments />
      <Founder />
      <OwnerReviews />
      <HomeFaq />
      <ContactBand />
    </>
  );
}
