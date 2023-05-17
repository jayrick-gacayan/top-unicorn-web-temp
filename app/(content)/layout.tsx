"use client";
import Link from "next/link";
import { Icon } from "@iconify/react";
import brandFacebook from "@iconify/icons-tabler/brand-facebook-filled";
import brandTwitter from "@iconify/icons-tabler/brand-twitter-filled";
import brandInstagram from "@iconify/icons-tabler/brand-instagram";
import brandYouTube from "@iconify/icons-tabler/brand-youtube";
import brandLinkedIn from "@iconify/icons-tabler/brand-linkedin";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <div className="bg-slate-950">
        <div className="max-w-screen-xl m-auto p-2">
          <div className="flex justify-between text-white items-center">
            <div className="font-bold text-5xl cursor-pointer">
              <Link href="/">UNICORN</Link>
            </div>
            <div>&#169; {new Date().getFullYear()} UNICORN, A TOP Product</div>
            <div className="flex gap-2 items-center">
              <div className="flex-none w-auto ">
                <Link
                  href="/"
                  className="block border border-white rounded-full p-1"
                >
                  <Icon icon={brandFacebook} className="w-6 h-6" />
                </Link>
              </div>
              <div className="flex-none w-auto">
                <Link
                  href="/"
                  className="block border border-white rounded-full p-1"
                >
                  <Icon icon={brandTwitter} className="w-6 h-6" />
                </Link>
              </div>
              <div className="flex-none w-auto">
                <Link
                  href="/"
                  className="block border border-white rounded-full p-1"
                >
                  <Icon icon={brandInstagram} className="w-6 h-6" />
                </Link>
              </div>
              <div className="flex-none w-auto">
                <Link
                  href="/"
                  className="block border border-white rounded-full p-1"
                >
                  <Icon icon={brandYouTube} className="w-6 h-6" />
                </Link>
              </div>
              <div className="flex-none w-auto ">
                <Link
                  href="/"
                  className="block border border-white rounded-full p-1"
                >
                  <Icon icon={brandLinkedIn} className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
