import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GrainOverlay } from "@/components/GrainOverlay";
import { Contact } from "@/components/Contact";

import { InnerPageHero } from "@/components/about/InnerPageHero";
import { TwoColumnSection } from "@/components/about/TwoColumnSection";
import { WhyRivulet } from "@/components/about/WhyRivulet";
import { CoreValues } from "@/components/about/CoreValues";
import { ProcessSteps } from "@/components/about/ProcessSteps";
import { FeatureList } from "@/components/about/FeatureList";
import { CenteredContent } from "@/components/about/CenteredContent";
import { Checklist } from "@/components/about/Checklist";

export const metadata: Metadata = {
  title: "About Rivulet | Scalable Web Development Solutions",
  description: "Learn about Rivulet's approach to building scalable, high-performance websites using modern frontend technologies and structured development practices.",
  openGraph: {
    title: "About Rivulet | Scalable Web Development Solutions",
    description: "Learn about Rivulet's approach to building scalable, high-performance websites using modern frontend technologies and structured development practices.",
    url: "https://rivulet.com/about", // Replace with valid domain
    siteName: "Rivulet",
    images: [
      {
        url: "/og-image.jpg", // Replace with valid OG image
        width: 1200,
        height: 630,
        alt: "About Rivulet",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-background">
      <GrainOverlay />
      <Navbar />
      
      <div className="pt-8"> {/* Spacer for fixed Navbar if necessary, handled in Hero often */}
        <InnerPageHero />
      </div>

      <TwoColumnSection />
      <WhyRivulet />
      <CoreValues />
      <ProcessSteps />
      <FeatureList />
      <CenteredContent />
      <Checklist />
      
      {/* Reused CTA Section */}
      <Contact />
      
      <Footer />
    </main>
  );
}
