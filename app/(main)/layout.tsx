import type { Metadata } from "next";
import Navbar from "./navbar";

export const metadata: Metadata = {
  title: {
    template: "%s | AI Resume Builder",
    absolute: "AI Resume Builder",
  },
  description:
    "Build a professional resume that will help you land your dream job.",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      {children}
    </div>
  );
}
