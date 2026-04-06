import React from "react";
import type {Metadata} from "next";
import {Card, Link, Separator} from "@heroui/react";
import Navigation from "@/app/navigation";
import AnimatedBackground from "@/app/components/AnimatedBackground";

export const metadata: Metadata = {
  title: "Privacy Policy - prompt-brain",
  description: "Privacy Policy for the prompt-brain Claude Code Plugin. No data collection, local processing only.",
  openGraph: {
    title: "Privacy Policy - prompt-brain",
    description: "Privacy Policy for the prompt-brain Claude Code Plugin.",
    url: "https://tarek.codes/prompt-brain/privacy-policy",
    images: [{url: "/avatar_v2.png", width: 460, height: 460, alt: "Tarek Steiß"}],
  },
  alternates: {
    canonical: "https://tarek.codes/prompt-brain/privacy-policy",
  },
};

export default function PrivacyPolicy() {
  return (
    <main>
      <Navigation />
      <AnimatedBackground />
      <div className="flex min-h-screen flex-col items-center justify-start pt-24 pb-16 px-4">
        <Card className="w-full max-w-3xl">
          <Card.Header className="flex flex-col items-start px-8 pt-8">
            <Link href="/" className="text-sm text-default-400 mb-4">
              &larr; Back to Home
            </Link>
            <h1 className="text-3xl font-bold">Privacy Policy</h1>
            <p className="text-default-500 mt-2">
              prompt-brain &mdash; Claude Code Plugin
            </p>
          </Card.Header>
          <Separator />
          <Card.Content className="px-8 py-6">
            <p className="text-default-500 text-sm mb-6">
              Last updated: April 6, 2026
            </p>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-3">No Data Collection</h2>
              <p className="text-default-500 leading-relaxed">
                prompt-brain does not collect, store, or transmit any personal data or usage information. The plugin operates entirely within Claude Code&apos;s inference engine and has no capability to gather user data of any kind.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-3">Local Processing</h2>
              <p className="text-default-500 leading-relaxed">
                All prompt analysis and optimization happens entirely within Claude Code&apos;s local inference engine. Your prompts are processed in-memory during the current session and are never written to disk, sent to external services, or stored in any persistent form. No data leaves your machine beyond the standard Claude Code environment.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-3">No Tracking or Analytics</h2>
              <p className="text-default-500 leading-relaxed">
                prompt-brain contains no analytics, telemetry, crash reporting, or any other form of tracking. There are no cookies, no fingerprinting, and no usage metrics of any kind.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-3">No Data Sharing or Selling</h2>
              <p className="text-default-500 leading-relaxed">
                We do not sell, share, distribute, or otherwise transfer any user data to third parties. Since we do not collect any data in the first place, there is nothing to share.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Contact</h2>
              <p className="text-default-500 leading-relaxed">
                If you have any questions about this Privacy Policy or the prompt-brain plugin, please open an issue on the{" "}
                <Link href="https://github.com/tarekst/prompt-brain" target="_blank" rel="noopener noreferrer">
                  GitHub repository
                  <Link.Icon />
                </Link>
                .
              </p>
            </section>
          </Card.Content>
        </Card>
      </div>
    </main>
  );
}
