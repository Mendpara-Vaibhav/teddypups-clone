import { HeroSection } from "@/components/HeroSection";
import { MeetThePupsBoardwalk } from "@/components/MeetThePupsBoardwalk";
import { TwoWaysSection } from "@/components/TwoWaysSection";
import { PuppyJourneySection } from "@/components/PuppyJourneySection";
import { PassportTrustSection } from "@/components/PassportTrustSection";
import { PolaroidWall } from "@/components/PolaroidWall";
import { FaqAccordion } from "@/components/FaqAccordion";
import { DoorwayCtaSection } from "@/components/DoorwayCtaSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MeetThePupsBoardwalk />
      <TwoWaysSection />
      <PuppyJourneySection />
      <PassportTrustSection />
      <PolaroidWall />
      <FaqAccordion mode="home" />
      <DoorwayCtaSection />
    </>
  );
}
