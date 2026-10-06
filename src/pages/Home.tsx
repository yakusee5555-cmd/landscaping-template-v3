import Hero from "../components/Hero";
import { Contact, Reviews } from "../components/Sections";
import { FullBleed, Pricing, Stacked, Work } from "../components/Showcase";
import { Marquee } from "../components/MotionBits";
import { RouteFX } from "../components/PageBits";

const MARQUEE_ITEMS = [
  "Lawn Mowing",
  "Edging",
  "Fertilization",
  "Aeration",
  "Yard Cleanup",
  "Mulch & Beds",
  "Austin",
  "Round Rock",
  "Pflugerville",
  "Georgetown",
  "Free Estimates",
];

export default function Home() {
  return (
    <>
      <RouteFX
        title="Greenline Landscaping | Lawn Mowing & Care in Austin, TX"
        description="Greenline Landscaping — mowing, edging, fertilization, and cleanups across Austin, TX. Free estimates."
      />
      <Hero />
      <Marquee items={MARQUEE_ITEMS} />
      <Stacked />
      <FullBleed />
      <Work />
      <Pricing />
      <Reviews />
      <Contact />
    </>
  );
}
