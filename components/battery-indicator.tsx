"use client";

import { FloatingTooltipTrigger } from "@/src/components/unlumen-ui/floating-tooltip";
import { useBattery } from "@uidotdev/usehooks";
import {
  Battery,
  BatteryCharging,
  BatteryFull,
  BatteryLow,
  BatteryMedium,
  BatteryWarning,
} from "lucide-react";

export function BatteryIndicator() {
  const { loading, level, charging, chargingTime, dischargingTime } =
    useBattery();
  if (loading) {
    return <div>Loading...</div>;
  }

  const renderBatteryStatus = () => {
    if (level !== null) {
      if (level < 0.25) {
        return <BatteryWarning />;
      } else if (level < 0.5) {
        return <BatteryLow />;
      } else if (level < 0.75) {
        return <BatteryMedium />;
      } else if (level < 1) {
        return <BatteryFull />;
      } else {
        return <Battery />;
      }
    }
  };

  return (
    <div className="flex flex-row gap-1 items-center justify-center">
      <FloatingTooltipTrigger
        content={`Battery: ${Math.round((level || 0) * 100)}%`}
        description={charging ? "Charging" : "Not Charging"}
      >
        {charging ? <BatteryCharging /> : renderBatteryStatus()}
      </FloatingTooltipTrigger>
    </div>
  );
}
