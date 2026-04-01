import React from "react";
import {Card, Link, Separator} from "@heroui/react";
import Navigation from "@/app/navigation";
import AnimatedBackground from "@/app/components/AnimatedBackground";

export const metadata = {
  title: "Privacy Policy - jar-explorer",
  description: "Privacy Policy for the jar-explorer Claude Code Plugin",
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
              jar-explorer &mdash; Claude Code Plugin
            </p>
          </Card.Header>
          <Separator />
          <Card.Content className="px-8 py-6">
            <p className="text-default-500 text-sm mb-6">
              Last updated: April 1, 2026
            </p>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-3">No Data Collection</h2>
              <p className="text-default-500 leading-relaxed">
                jar-explorer does not collect, store, or transmit any personal data or usage information. The plugin operates entirely on your local machine and has no capability to gather user data of any kind.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-3">Local Processing</h2>
              <p className="text-default-500 leading-relaxed">
                All JAR file analysis, decompilation, and source code exploration happens exclusively on your local system. Your source code, dependencies, and project files never leave your machine. The plugin uses locally installed Java JDK tools (<code className="text-sm bg-default-100 px-1.5 py-0.5 rounded">javap</code>, <code className="text-sm bg-default-100 px-1.5 py-0.5 rounded">jar</code>) to process files directly on your filesystem.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-3">External Downloads</h2>
              <p className="text-default-500 leading-relaxed mb-3">
                On first use, the plugin downloads open-source Java decompilers from their official GitHub releases:
              </p>
              <ul className="list-disc list-inside text-default-500 space-y-2 ml-2">
                <li>
                  <strong>CFR</strong> (default) &mdash; from{" "}
                  <Link href="https://github.com/leibnitz27/cfr" target="_blank" rel="noopener noreferrer" className="text-sm">
                    github.com/leibnitz27/cfr
                    <Link.Icon />
                  </Link>
                </li>
                <li>
                  <strong>Vineflower</strong> (optional) &mdash; from{" "}
                  <Link href="https://github.com/Vineflower/vineflower" target="_blank" rel="noopener noreferrer" className="text-sm">
                    github.com/Vineflower/vineflower
                    <Link.Icon />
                  </Link>
                </li>
              </ul>
              <p className="text-default-500 leading-relaxed mt-3">
                These downloads occur over HTTPS and are stored locally in the plugin directory. No data is sent to these services &mdash; the plugin only downloads the decompiler binaries.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-3">No Tracking or Analytics</h2>
              <p className="text-default-500 leading-relaxed">
                jar-explorer contains no analytics, telemetry, crash reporting, or any other form of tracking. There are no cookies, no fingerprinting, and no usage metrics of any kind.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-3">No Data Sharing or Selling</h2>
              <p className="text-default-500 leading-relaxed">
                We do not sell, share, distribute, or otherwise transfer any user data to third parties. Since we do not collect any data in the first place, there is nothing to share.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-3">Local Caching</h2>
              <p className="text-default-500 leading-relaxed">
                Decompiled source code is cached locally in your system&apos;s temporary directory (<code className="text-sm bg-default-100 px-1.5 py-0.5 rounded">$TMPDIR/jar-explorer-cache/</code>) to improve performance on repeated lookups. This cache is indexed by JAR file hash and remains entirely on your machine. You can safely delete this cache at any time.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Contact</h2>
              <p className="text-default-500 leading-relaxed">
                If you have any questions about this Privacy Policy or the jar-explorer plugin, please open an issue on the{" "}
                <Link href="https://github.com/tarekst/jar-explorer" target="_blank" rel="noopener noreferrer">
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
