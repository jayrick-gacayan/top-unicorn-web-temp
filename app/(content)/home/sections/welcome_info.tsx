import { FantasyHeader } from "@/app/components/fantasy_header";
import { NextFont } from "next/dist/compiled/@next/font";

export function WelcomeInfo({ font }: { font: NextFont }): React.JSX.Element {
  return (
    <section className="bg-violet-200 text-white text-center p-8">
      <div className="max-w-screen-xl m-auto">
        <FantasyHeader
          text="Welcome to Unicorn"
          font={font}
        />
        <p className="leading-normal text-[#E74C3C] mt-4">
          Whenever there&#39;s toilet paper, there will be period products.
        </p>
        <p className="leading-normal mt-4">
          Introducing UNICORN, the enchanting period product company
          revolutionizing the industry with our magical, innovative solutions.
          Our one-of-a-kind dispensers, designed for every stall in
          businesses, offer unparalleled dignity and convenience. Our sleek,
          easy-to-install acrylic dispensers showcase our delightful unicorn
          mascot cartridges, elevating the experience. Scan our captivating QR
          codes for spellbinding unicorn-themed entertainment, turning a
          routine moment into pure magic. Trusted by giants across the land,
          UNICORN is transforming the world of period products with whimsy and
          innovation, making magic a standard business amenity.
        </p>
        <p className="leading-normal mt-4 text-[#E74C3C]">
          And, by the way, we&#39;re organic!
        </p>
      </div>
    </section>
  );
}
