import { ThemeSwitch } from "@/src/components/unlumen-ui/theme-switch";
import { BatteryIndicator } from "./battery-indicator";
import { FloatingTooltipTrigger } from "@/src/components/unlumen-ui/floating-tooltip";

export function Navbar() {
  return (
    <nav className="border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold">Wayrest</h1>
        </div>
        <div className="flex items-center gap-2">
          <FloatingTooltipTrigger content="Toggle Theme">
            <ThemeSwitch
              iconSize={18}
              className="bg-transparent border-0 "
            />
          </FloatingTooltipTrigger>
          <BatteryIndicator />
        </div>
      </div>
    </nav>
  );
}
