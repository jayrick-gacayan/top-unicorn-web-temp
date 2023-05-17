import { Lobster } from "next/font/google";
import { ComponentProps } from "react";

const lobster = Lobster({
  weight: "400",
  display: "swap",
});

type HeaderProps = React.HTMLAttributes<HTMLHeadingElement> & {
  headingLevel: React.ElementType;
  text: string;
};

function FantasyHeaderFont(props: HeaderProps) {
  let { text, headingLevel: Heading, ...rest } = props;

  return <Heading {...rest}>{text}</Heading>;
}

export default function Home() {
  return (
    <>
      <div
        style={{
          backgroundImage:
            "url('https://w0.peakpx.com/wallpaper/612/189/HD-wallpaper-mountain-ridge-full-mountains-natural-nature.jpg')",
        }}
        className="w-full h-full bg-fixed bg-no-repeat bg-center bg-cover"
      />
      <div className="bg-violet-200 text-white text-center p-16">
        <div className="max-w-screen-xl m-auto">
          <FantasyHeaderFont
            text="Welcome to Unicorn"
            headingLevel={"h1"}
            className={`text-6xl ${lobster.className} font-bold`}
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
      </div>
      <div className="bg-amber-200 text-white text-center p-16">
        <div className="max-w-screen-xl m-auto">
          <FantasyHeaderFont
            text="Magical Offerings"
            headingLevel={"h1"}
            className={`text-6xl ${lobster.className} font-bold`}
          />
        </div>
      </div>
      <div
        style={{
          backgroundImage:
            "url('https://c4.wallpaperflare.com/wallpaper/107/257/76/reflection-4k-full-screen-for-desktop-wallpaper-preview.jpg')",
        }}
        className="w-full h-full bg-fixed bg-no-repeat bg-center bg-cover"
      ></div>
      <div className="bg-green-300 text-white text-center h-[384px] max-w-full">
        This is a parallax
      </div>
    </>
  );
}
