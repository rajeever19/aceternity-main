"use client";
import React from "react";
import { Button } from "../ui/moving-border";

export function MovingBorderDemo() {
  return (
    <div>
      <Button
        borderRadius="1.75rem"
        size="meddium"
        className="[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] dark:bg-slate-900 text-white dark:text-white border-neutral-200 dark:border-slate-800 "
      >
        Borders are cool
      </Button>
    </div>
  );
}
