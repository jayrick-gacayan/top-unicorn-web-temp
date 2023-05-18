import { Icon } from "@iconify/react";
import { IconifyIcon } from "@iconify/react";
import Link from "next/link";

export function SocialMediaLink({ icon, link }: { icon: IconifyIcon, link: string }) : React.JSX.Element{
  return (<div className="flex-none w-auto ">
    <Link
      href={link}
      className="block border border-white rounded-full lg:p-2 p-3"
    >
      <Icon icon={icon} className="lg:w-8 lg:h-8 w-12 h-12" />
    </Link>
  </div>)
}