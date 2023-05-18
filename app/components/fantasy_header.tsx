import { NextFont } from "next/dist/compiled/@next/font"

export function FantasyHeader({
  text,
  color,
  font,
}: {
  text: string,
  font?: NextFont
  color?: string,
}): React.JSX.Element {
  return (<h1 className={`text-6xl ${font && font.className} font-bold ${color && `text-[${color}]`}`}>{text} </h1>)
}
