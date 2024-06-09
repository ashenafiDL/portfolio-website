"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

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
            !isChecked ? "bg-accent-100" : "invert"
          }`}
        >
          <Image src="/icons/sun.svg" alt="Sun icon" width={16} height={16} />
        </span>

        <span
          className={`flex h-6 w-6 items-center justify-center rounded-full ${
            isChecked && "bg-accent-100"
          }`}
        >
          <Image src="/icons/moon.svg" alt="Moon icon" width={16} height={16} />
        </span>
      </div>
    </label>
  );
}
