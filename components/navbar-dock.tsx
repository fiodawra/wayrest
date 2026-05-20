import { Dock } from "@/src/components/unlumen-ui/dock";
import { FlameKindling, ScrollText, ToolCase } from "lucide-react";

const items = [
  { icon: <ToolCase />, label: "Cargo (Canvas)", href: "/cargo" },
  { icon: <ScrollText />, label: "Logbook (Itinerary)", href: "/logbook" },
  { icon: <FlameKindling />, label: "Campfire (Chat)", href: "/campfire" },
];

export function NavbarDock() {
  return (
    <Dock
      className="fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-4"
      items={items}
    />
  );
}
