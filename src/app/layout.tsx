import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/app/providers";

const inter = Inter({ subsets: ["latin"] });

const SITE_URL = "https://tarek.codes";
const SITE_DESCRIPTION =
  "Tarek Steiß — developer building AI-powered tools, security software, and open source libraries.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Tarek Steiß",
    template: "%s | Tarek Steiß",
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Tarek Steiß",
    title: "Tarek Steiß",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/avatar_v2.png",
        width: 460,
        height: 460,
        alt: "Tarek Steiß",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Tarek Steiß",
    description: SITE_DESCRIPTION,
    images: ["/avatar_v2.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    google: "s3LkThof69Cl42DpJ7IsPjU1lbPD4zAyOTR32-FBRBg",
  },
  other: {
    referrer: "strict-origin-when-cross-origin",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
          <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@graph": [
                  {
                    "@type": "Person",
                    "@id": `${SITE_URL}/#person`,
                    name: "Tarek Steiß",
                    url: SITE_URL,
                    jobTitle: "Software Engineer",
                    sameAs: ["https://github.com/tarekst"],
                  },
                  {
                    "@type": "WebSite",
                    "@id": `${SITE_URL}/#website`,
                    url: SITE_URL,
                    name: "Tarek Steiß",
                    author: { "@id": `${SITE_URL}/#person` },
                  },
                  {
                    "@type": "SoftwareApplication",
                    name: "jar-explorer",
                    description:
                      "Claude Code Plugin to decompile and explore Java JAR files.",
                    url: "https://github.com/tarekst/jar-explorer",
                    applicationCategory: "DeveloperApplication",
                    operatingSystem: "Cross-platform",
                    author: { "@id": `${SITE_URL}/#person` },
                    isAccessibleForFree: true,
                  },
                  {
                    "@type": "SoftwareApplication",
                    name: "prompt-brain",
                    description:
                      "Claude Code Plugin to analyze and optimize prompts through automated weakness detection, best-practice matching, and intelligent reconstruction.",
                    url: "https://github.com/tarekst/prompt-brain",
                    applicationCategory: "DeveloperApplication",
                    operatingSystem: "Cross-platform",
                    author: { "@id": `${SITE_URL}/#person` },
                    isAccessibleForFree: true,
                  },
                  {
                    "@type": "Organization",
                    name: "WhiteBreach Security",
                    url: "https://github.com/WhiteBreachSecurity",
                    description:
                      "Developing hard- and software tools for the protection of IT-Systems and legal penetration testing.",
                    founder: { "@id": `${SITE_URL}/#person` },
                  },
                  {
                    "@type": "SoftwareSourceCode",
                    name: "emoji-steg",
                    description:
                      "A lightweight TypeScript library for Unicode steganography in emojis.",
                    url: "https://github.com/tarekst/emoji-steg",
                    programmingLanguage: "TypeScript",
                    author: { "@id": `${SITE_URL}/#person` },
                    isAccessibleForFree: true,
                  },
                  {
                    "@type": "SoftwareApplication",
                    name: "web-browsing-mcp-server",
                    description: "MCP server for web browsing capabilities.",
                    applicationCategory: "DeveloperApplication",
                    author: { "@id": `${SITE_URL}/#person` },
                    isAccessibleForFree: false,
                  },
                ],
              }),
            }}
          />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-PMS9M2KM83" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-PMS9M2KM83');
              `,
            }}
          />
        </head>
        <body className={inter.className}>
          <Providers>
            {children}
          </Providers>
        </body>
    </html>
  );
}
