import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KEITH | Frontend Developer",
  description: "KEITH’s frontend development portfolio — selected projects, skills, and ways to get in touch.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
