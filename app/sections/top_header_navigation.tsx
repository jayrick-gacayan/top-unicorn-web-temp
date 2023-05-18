import Link from "next/link";
import { NavigationLink } from "../components/navigation_link";

export function TopHeaderNavigation() : React.JSX.Element{
  return (<header className="overflow-hidden">
    <nav className="fixed top-0 left-0 z-[100] bg-white px-8 w-full">
      <div className="max-w-screen-xl m-auto block">
        <div className="flex lg:flex-row flex-col justify-between items-start lg:items-center">
          <div className="flex-1 w-auto py-2">
            <Link href="/" className="text-5xl lg:text-7xl cursor-pointer text-blue-950 py-4 font-bold">UNICORN</Link>
          </div>
          <div className="flex-none w-auto hidden lg:flex lg:flex-row flex-col gap-4 lg:gap-16 justify-center     items-center text-center">
            <NavigationLink link="/" text='HOME' />
            <NavigationLink link="/" text='MAGICAL DOPAMINE' />
            <NavigationLink link="/" text='CONTACT US' />
          </div>
        </div>
      </div>
    </nav>
  </header>)
}