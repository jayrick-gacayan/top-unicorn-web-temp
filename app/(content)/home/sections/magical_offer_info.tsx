import { FantasyHeader } from "@/app/components/fantasy_header";
import { NextFont } from "next/dist/compiled/@next/font";
import { MagicalOfferItem } from "../components/magical_offer_item";

export function MagicalOfferInfo({ font }: { font: NextFont }): React.JSX.Element {
  return (<section className="bg-amber-200 text-white text-center p-8">
    <div className="max-w-screen-xl m-auto">
      <FantasyHeader
        text="Magical Offerings"
        font={font}
      />
      <div className="flex lg:flex-row flex-col gap-8 mt-8">
        <MagicalOfferItem />
        <MagicalOfferItem />
        <MagicalOfferItem />
        <MagicalOfferItem />
      </div>
    </div>
  </section>)
}