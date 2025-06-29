import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Ryan Bakker | Developer",
  description:
    "Web Developer and Tech Enthusiast based in Auckland, New Zealand. Get in touch today!",
  keywords: [
    "next.js",
    "ryan",
    "bakker",
    "web",
    "developer",
    "auckland",
    "nz",
    "modern",
    "seo",
    "designer",
    "student",
  ],
  openGraph: {
    title: "Ryan Bakker | Web Developer",
    description:
      "Web Developer and Tech Enthusiast based in Auckland, New Zealand. Get in touch today!",
    url: "https://ryanbakker.site",
    siteName: "Ryan Bakker",
    type: "website",
  },
  verification: {
    google: "6XILS3vV2EXQFS7C_aQYhvOcxiQofdEjYQ1SmgFcx5A",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          suppressHydrationWarning
          className="min-h-screen flex bg-gray-100 dark:bg-gray-950"
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Analytics />
            <SpeedInsights />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
