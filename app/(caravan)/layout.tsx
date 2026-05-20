import { NavbarDock } from "@/components/navbar-dock";

export default function CaravanLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      {children}
      <NavbarDock />
    </div>
  );
}
