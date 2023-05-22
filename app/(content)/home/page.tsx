import { Lobster } from "next/font/google";
import { WelcomeInfo } from "./sections/welcome_info";
import { MagicalOfferInfo } from "./sections/magical_offer_info";
import { VideoHomeMedia } from "./sections/video_home_media";
import { MagicalDispenserInfo } from "./sections/magical_dispenser_info";

import UnicornImageOne from "../../../public/images/unicorn/image_one.png"
import { QuestMessageInfo } from "./sections/quest_message_info";
import { useInView } from "framer-motion";
const lobster = Lobster({
  weight: "400",
  display: "swap",
});

export default function Home(): React.JSX.Element {
  
  return (
    <>
      <div
        style={{
          backgroundImage:
            "url('https://w0.peakpx.com/wallpaper/612/189/HD-wallpaper-mountain-ridge-full-mountains-natural-nature.jpg')",
        }}
        className="w-full h-full bg-fixed bg-no-repeat bg-center bg-cover"
      />
      <WelcomeInfo font={lobster} />
      <MagicalOfferInfo font={lobster} />
      <VideoHomeMedia />
      <MagicalDispenserInfo font={lobster} />

      <div
        style={{
          backgroundImage:
           `url('./images/unicorn/image_one.png')`,
        }}
        className="w-full h-full bg-fixed bg-no-repeat bg-center bg-cover"
      />
      <QuestMessageInfo font={lobster} />
    </>
  );
}
