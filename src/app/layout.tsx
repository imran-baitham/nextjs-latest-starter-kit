import type { Metadata } from "next";
import dynamic from "next/dynamic";
import "../styles/globals.css";
import { poppin } from "@/fonts";
import { ChildrenProps } from "@/types";

const MainProvider = dynamic(() => import("../config/MainProvider"));
const ErrorBoundary = dynamic(
  () => import("../components/ErrorBoundary/ErrorBoundary")
);

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
  title: "NextJs @latest Starter Kit",
  description: "Next Js @latest Starter Kit for Beginners",
  keywords: ["nextjs-kit", "nextjs", "tailwindcss", "starter-kit"],
  openGraph: {
    images: "/og-image.png", // replace your og image
  },
};

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html
      lang="en"
      className={"scroll-smooth antialiased"}
      suppressHydrationWarning
    >
      <body className={poppin.className}>
        <ErrorBoundary fallback={"Some things went Wrong"}>
          <MainProvider>{children}</MainProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
