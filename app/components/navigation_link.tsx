import Link from "next/link";

export function NavigationLink({ text, link }: { text: string, link: string }) : React.JSX.Element{
  return (<Link href={link} className="block p-2">{text}</Link>)
}