import Link from "next/link";
import { Container } from "@/components";
import { Lime_light } from "@/fonts";

export default function NotFound() {
  return (
    <Container className="w-full h-screen flex items-center justify-center">
      <div>
        <p className={`font-extrabold text-4xl ${Lime_light.className}`}>404</p>
        <h1 className="mt-3 text-lg font-semibold">Page not found</h1>
        <p className="mb-3 mt-2 text-sm">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <Link href="/">Go back home</Link>
      </div>
    </Container>
  );
}
