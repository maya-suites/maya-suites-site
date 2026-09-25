import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { StatsBar } from "@/components/home/StatsBar";
import { Team } from "@/components/home/Team";
import { Testimonials } from "@/components/home/Testimonials";
import { GuestReviews } from "@/components/home/GuestReviews";
import { PainSolution } from "@/components/home/PainSolution";
import { ServicesSection } from "@/components/home/ServicesSection";
import { OwnerPortal } from "@/components/home/OwnerPortal";
import { SimulatorSection } from "@/components/home/SimulatorSection";
import { Gallery } from "@/components/home/Gallery";
import { Process } from "@/components/home/Process";
import { PricingTeaser } from "@/components/home/PricingTeaser";
import { Neighborhoods } from "@/components/home/Neighborhoods";
import { HomeFaq } from "@/components/home/HomeFaq";
import { FinalCta } from "@/components/home/FinalCta";

export const metadata: Metadata = {
  title: "Maya Suites - Votre conciergerie Airbnb de confiance à Casablanca",
  description:
    "Conciergerie Airbnb de confiance à Casablanca : 4,83★, 40+ biens gérés, 0 frais si vous ne gagnez pas. Estimez vos revenus gratuitement.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <Team />
      <Testimonials />
      <GuestReviews />
      <PainSolution />
      <ServicesSection />
      <OwnerPortal />
      <SimulatorSection />
      <Gallery />
      <Process />
      <PricingTeaser />
      <Neighborhoods />
      <HomeFaq />
      <FinalCta />
    </>
  );
}
