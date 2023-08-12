import APISection from "@/components/api";
import FallingIcons from "@/components/falling-icons";
import Hero from "@/components/hero";
import Javascript from "@/components/javascript";
import Markup from "@/components/markup";
import Scores from "@/components/scores";
import Image from "next/image";

import bottomDarkSection from "../public/bottom-dark-section.webp";
import midDarkSection from "../public/mid-dark-section.webp";
import orangeSquare from "../public/orange-square.webp";
import squigglyDark from "../public/squiggly-dark.webp";
import Sphere from "@/components/sphere/sphere";

export default function Home() {

  return (
    <main className="relative">
      <Hero />
      {/* Javascript Section */}
      <div className="mt-10 relative z-10 flex">
        <Image src={orangeSquare} alt="Orange Square background" className="mx-auto lg:px-5" />
        <div className="absolute w-full flex lg:top-10">
          <Javascript />
        </div>
      </div>
      {/* Javascript Section */}

      <div className="relative w-full -translate-y-12">
        {/* Falling Icons and API Section */}
        <div className="absolute top-0 w-full h-full">
          <FallingIcons />
          <APISection />
          <Sphere />
        </div>
        {/* Falling Icons and API Section */}

        {/* Markup and Scores Section */}
        <div className="absolute top-0 w-full h-full -z-10">
          <Image src={midDarkSection} alt="Mid Dark Section" className="w-full" />
          <Image src={squigglyDark} alt="Squiggly Dark" className="w-full" />
          <Markup />
          <div className="relative flex w-full justify-center">
            <Image src={bottomDarkSection} alt="Bottom dark section" className="w-full" />
            <Scores />
            
            {/* Footer message */}
            <div className="absolute bottom-5 lg:bottom-32">
              <p className="text-white text-[2.5vw] mb-3 md:text-base lg:text-lg lg:mb-8">This is a design test by Bruno Curi for Monogram.</p>
              <img src="/heart.webp" alt="Heart icon" className="w-5 mx-auto md:w-10 lg:w-12" fetchPriority="low" loading="lazy" decoding="async" />
            </div>
            {/* Footer message */}
          </div>
        </div>
        {/* Markup and Scores Section */}
      </div>
    </main>
  )
}