import {Link} from "@heroui/react";

export default function NotFound() {
    return (
        <div style={{ padding: "2rem", textAlign: "center" }}>
            <h1>Seite nicht gefunden</h1>
            <p>Die angeforderte Seite existiert nicht.</p>
            <Link href="/">Zur Startseite</Link>
        </div>
    );
}