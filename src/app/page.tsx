import { HeroSection } from "@/components/home/HeroSection";
import { BlogGrid } from "@/components/home/BlogGrid";
import { Newsletter } from "@/components/home/Newsletter";
import { AboutPreview } from "@/components/home/AboutPreview";
import { AdBanner } from "@/components/ui/AdBanner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AdBanner slot="after-hero" />
      <BlogGrid />
      <Newsletter />
      <AboutPreview />
    </>
  );
}
