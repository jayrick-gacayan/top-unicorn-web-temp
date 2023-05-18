"use client"
import brandFacebook from "@iconify/icons-tabler/brand-facebook-filled";
import brandTwitter from "@iconify/icons-tabler/brand-twitter-filled";
import brandInstagram from "@iconify/icons-tabler/brand-instagram";
import brandYouTube from "@iconify/icons-tabler/brand-youtube";
import brandLinkedIn from "@iconify/icons-tabler/brand-linkedin";
import Link from "next/link";
import { SocialMediaLink } from "@/app/components/social_media_link";

export function FooterNavigation() : React.JSX.Element{
  return <footer className="bg-slate-950">
    <div className="max-w-screen-xl m-auto p-4">
      <div className="flex lg:flex-row flex-col justify-between text-white items-center gap-4">
        <div className="font-bold text-5xl cursor-pointer">
          <Link href="/">UNICORN</Link>
        </div>
        <div>&#169; {new Date().getFullYear()} UNICORN, A TOP Product</div>
        <div className="flex flex-wrap gap-4 justify-center items-center">
          <SocialMediaLink icon={brandFacebook} link="/" />
          <SocialMediaLink icon={brandTwitter} link="/" />
          <SocialMediaLink icon={brandInstagram} link="/" />
          <SocialMediaLink icon={brandYouTube} link="/" />
          <SocialMediaLink icon={brandLinkedIn} link="/" />
        </div>
      </div>
    </div>
  </footer>
}