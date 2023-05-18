import { NextFont } from "next/dist/compiled/@next/font";

export function QuestMessageInfo({ font }: { font: NextFont }): React.JSX.Element {
  return (<section className="bg-white text-center p-8 h-auto lg:h-[512px]">
    <div className="max-w-screen-xl m-auto">
      <h1 className={`text-6xl ${font && font.className} font-bold`}>
        <span className="block">
          <span>A Quest to </span>
          <span className="text-[#E74C3C]">End Period Poverty</span>
        </span>
      </h1>
      <p className="leading-normal text-[#E74C3C] mt-4">
        Imagine a realm where period products grace every stall, just like toilet paper, bestowing dignity upon all. UNICORN seeks to transform the way businesses perceive period products, inspiring them to embrace these essentials as a everyone to flourish. UNICORN champions this enchanting vision, partnering with visionary businesses to provide period products in every stall, creating a world that sparkles with confort and care. Let us confure a future filled with period enchantment, where all can thrive with dignity.
      </p>
    </div>
  </section>)
}