import { FantasyHeader } from "@/app/components/fantasy_header";
import { NextFont } from "next/dist/compiled/@next/font";
import Image from "next/image";
import QRCodeDopamine from "../../../../public/images/unicorn/qr_code_dopamine.png";

export function QRCodeInstructionInfo({ font }: { font: NextFont }): React.JSX.Element {
  return (<section className="bg-white text-center p-8">
    <div className="max-w-screen-xl m-auto">
      <div className="flex lg:flex-row flex-col gap-16 items-stretch">
        <div className="flex-none h-56 lg:h-auto w-full lg:w-56">
          <Image alt="magical-dopamine-qr-code" 
            src={QRCodeDopamine} 
            className="object-fill w-full h-auto animate-bounce"/>
        </div>
        <div className="flex-1 w-auto">
          <FantasyHeader
            text="Whimsical QR Codes"
            font={font}
          />
          <p className="mt-4 text-[#E74C3C]">
            Discover a World of Unicorn Magic
          </p>
          <p className="mt-4">
            Discover the allure of UNICORN&#39;s enchanting QR codes,
            unlocking a treasure trove of curated unicorn-themed content.
            With every scan, embark on a magical journey filled with
            mesmerizing music videos, fascinating factsm whimsical riddles,
            captivating haikus, and more! We&#39;ve harnessed the power of
            QR codes to transform challenging moments into extraordinary
            experiences, offering a delightful excape during a typically
            difficult time. UNICORN&#39;s QR codes are the gateway to a
            world of wonder, infusing the period product landscape with
            enchantment and joy.
          </p>
        </div>
      </div>
    </div>
  </section>)
}