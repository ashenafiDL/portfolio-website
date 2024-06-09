"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import MoonIcon from "./icons/MoonIcon";
import SunIcon from "./icons/SunIcon";

export default function ThemeSwitcher() {
  const { setTheme, theme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    setTheme(isChecked ? "light" : "dark");
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    setIsChecked(theme === "dark");
  }, [theme]);

  if (!isMounted) {
    return null;
  }

  return (
    <label className="relative inline-flex cursor-pointer select-none items-center">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="sr-only"
      />
      <div className="flex items-center gap-2 rounded-full bg-background-200">
        <span
          className={`flex h-6 w-6 items-center justify-center rounded-full ${
            !isChecked && "bg-accent-100"
          }`}
        >
          <SunIcon props={{ className: "h-[16px] w-[16px]" }} />
        </span>

        <span
          className={`flex h-6 w-6 items-center justify-center rounded-full ${
            isChecked && "bg-accent-100"
          }`}
        >
          <MoonIcon props={{ className: "h-[16px] w-[16px]" }} />
        </span>
      </div>
    </label>
  );
}
