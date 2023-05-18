import { FooterNavigation } from "./sections/footer_navigation";

export default function Layout({ children }: { children: React.ReactNode }) : React.JSX.Element{
  return (
    <>
      {children}
      <FooterNavigation />
    </>
  );
}
