import { AnnouncementBar } from "../components/sections/AnnouncementBar";
import { SiteHeader } from "../components/sections/SiteHeader";
import { Hero } from "../components/sections/Hero";
import { SipSection } from "../components/sections/SipSection";
import { VendorIntro } from "../components/sections/VendorIntro";
import { EatSection } from "../components/sections/EatSection";
import { VendorGrid } from "../components/sections/VendorGrid";
import { LocationSection } from "../components/sections/LocationSection";
import { SponsorCta } from "../components/sections/SponsorCta";
import { MomentsStrip } from "../components/sections/MomentsStrip";
import { PetFriendly } from "../components/sections/PetFriendly";
import { AboutSection } from "../components/sections/AboutSection";
import { Tickets } from "../components/sections/Tickets";
import { EmailSignup } from "../components/sections/EmailSignup";
import { SiteFooter } from "../components/sections/SiteFooter";

export default function HomePage() {
  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
      <main>
        <Hero />
        <SipSection />
        <VendorIntro />
        <EatSection />
        <VendorGrid />
        <LocationSection />
        <SponsorCta />
        <MomentsStrip />
        <PetFriendly />
        <AboutSection />
        <Tickets />
        <EmailSignup />
      </main>
      <SiteFooter />
    </>
  );
}
