import { FantasyHeader } from "@/app/components/fantasy_header";
import { NextFont } from "next/dist/compiled/@next/font";

export function MagicalDispenserInfo({ font }: { font: NextFont }):React.JSX.Element {
  return <section className="bg-gradient-to-r from-blue-200 to-violet-300 text-center p-8">
    <div className="max-w-screen-xl m-auto relative">
      <div className="bg-white/20 rounded w-full p-8 lg:p-20 flex lg:flex-row flex-col gap-8 justify-center items-stretch">
        <div className="flex-auto lg:flex-1 w-full lg:w-auto">
          <FantasyHeader
            color="#E74C3C"
            text="Magical Dispensers"
            font={font}
          />
          <p className="mt-4 leading-normal">
            Behold the enchanting UNICORN dispensers, where practically
            meets spellbinding beauty. Crafted with a sleek acrylic design,
            our dispensers effortlessly blend functionality and aesthetics.
            Marvel at the ease of installation, magically securing them
            inmere seconds. Adorned with our delightful unicorn mascot on
            elegant cartridges, these captivating dispensers transform
            ordinary facilities into a realm of confort and enchantment.
            UNICORN dispensers are the epitome of charm and efficiency,
            bringing a touch of magic to the world of period products.
          </p>
        </div>
        <div className="flex-auto lg:flex-none w-full lg:w-64 bg-white rounded h-56 lg:h-auto">
          Image holder
        </div>
      </div>
    </div>
  </section>
}