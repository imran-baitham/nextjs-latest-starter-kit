"use client";

import { ThemeProvider } from "next-themes";
import { ChildrenProps } from "@/types";

export default function MainProvider({ children }: ChildrenProps) {
  return (
    <ThemeProvider attribute="class" disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
}
