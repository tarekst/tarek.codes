import {Link} from "@heroui/react";
import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: {index: false, follow: false},
};

export default function NotFound() {
    return (
        <div style={{ padding: "2rem", textAlign: "center" }}>
            <h1>Seite nicht gefunden</h1>
            <p>Die angeforderte Seite existiert nicht.</p>
            <Link href="/">Zur Startseite</Link>
        </div>
    );
}