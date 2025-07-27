import React, { useState } from 'react';
import { encryptInEmoji, decryptFromEmoji } from 'emoji-steg';
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Input,
    Textarea,
    Snippet,
    Tooltip,

} from "@heroui/react";

interface EmojiStegDemoProps {
    isOpen: boolean;
    onClose: () => void;
}

const EmojiStegDemo: React.FC<EmojiStegDemoProps> = ({ isOpen, onClose }) => {
    // State für den Verschlüsselungsbereich
    const [message, setMessage] = useState('');
    const [password, setPassword] = useState('');
    const [emoji, setEmoji] = useState('🔒');
    const [encodedMessage, setEncodedMessage] = useState('');

    // State für den Entschlüsselungsbereich
    const [decodeInput, setDecodeInput] = useState('');
    const [decodePassword, setDecodePassword] = useState('');
    const [decodedMessage, setDecodedMessage] = useState('');

    // State für Fehler und Erfolg
    const [encodeError, setEncodeError] = useState('');
    const [decodeError, setDecodeError] = useState('');

    // State für Kopieren-Feedback
    const [copyFeedback, setCopyFeedback] = useState('');

    // Verschlüsselungsfunktion
    const handleEncode = () => {
        // Fehler zurücksetzen
        setEncodeError('');

        // Validierungen
        if (!message) {
            setEncodeError('Bitte gib eine Nachricht ein');
            return;
        }

        if (!password) {
            setEncodeError('Bitte gib ein Passwort ein');
            return;
        }

        try {
            // Emoji auf Standardwert setzen, falls leer
            const selectedEmoji = emoji || '🔒';
            const result = encryptInEmoji(message, password, selectedEmoji);
            setEncodedMessage(result);
        } catch (error) {
            console.error(error);
            setEncodeError('Fehler bei der Verschlüsselung');
        }
    };

    // Entschlüsselungsfunktion
    const handleDecode = () => {
        // Fehler zurücksetzen
        setDecodeError('');

        // Validierungen
        if (!decodeInput) {
            setDecodeError('Bitte füge das verschlüsselte Emoji ein');
            return;
        }

        if (!decodePassword) {
            setDecodeError('Bitte gib das Passwort ein');
            return;
        }

        try {
            const result = decryptFromEmoji(decodeInput, decodePassword);

            // Überprüfe, ob das Ergebnis Sinn ergibt (z.B. ist es Text und nicht zufällige Zeichen)
            if (result && /^[\x20-\x7E]+$/.test(result)) {
                setDecodedMessage(result);
            } else {
                setDecodeError('Entschlüsselung fehlgeschlagen. Falsches Passwort?');
            }
        } catch (error) {
            console.error(error);
            setDecodeError('Fehler bei der Entschlüsselung. Überprüfe das Passwort und den verschlüsselten Text.');
        }

        try {
            const result = decryptFromEmoji(decodeInput, decodePassword);
            setDecodedMessage(result);
        } catch (error) {
            console.error(error);
            setDecodeError('Fehler bei der Entschlüsselung. Überprüfe das Passwort und den verschlüsselten Text.');
        }
    };

    // Kopieren mit Toast-Benachrichtigung
    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                setCopyFeedback('In die Zwischenablage kopiert!');
                setTimeout(() => {
                    setCopyFeedback('');
                }, 2000);
            })
            .catch(err => {
                console.error('Fehler beim Kopieren:', err);
            });
    };

    return (
        <>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                size="3xl"
                isDismissable={true}
                scrollBehavior="inside"
                backdrop="blur"
                placement="center"
                classNames={{
                    base: "z-[9999]",
                    backdrop: "z-[9990]",
                    wrapper: "z-[9999]",
                }}
            >
                <ModalContent>
                    <ModalHeader className="flex flex-col gap-1">
                        Emoji-Steg Demo
                    </ModalHeader>
                    <ModalBody>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Verschlüsselungsbereich */}
                            <div className="flex flex-col gap-4 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                                <h3 className="text-lg font-medium">Nachricht verstecken</h3>

                                <Textarea
                                    label="Nachricht"
                                    placeholder="Deine geheime Nachricht..."
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    variant="bordered"
                                    fullWidth
                                />

                                <Input
                                    type="password"
                                    label="Passwort"
                                    placeholder="Passwort für Verschlüsselung"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    variant="bordered"
                                />

                                <Input
                                    label="Emoji"
                                    placeholder="🔒"
                                    value={emoji}
                                    onChange={(e) => setEmoji(e.target.value)}
                                    variant="bordered"
                                />

                                {encodeError && (
                                    <div className="text-danger text-sm">{encodeError}</div>
                                )}

                                <Button
                                    color="primary"
                                    onPress={handleEncode}
                                >
                                    Verstecken
                                </Button>

                                {encodedMessage && (
                                    <div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-gray-500 dark:text-gray-400">Ergebnis</span>
                                            <Tooltip content="In Zwischenablage kopieren">
                                                <Button
                                                    size="sm"
                                                    variant="light"
                                                    onPress={() => handleCopy(encodedMessage)}
                                                >
                                                    Kopieren
                                                </Button>
                                            </Tooltip>
                                        </div>
                                        <Snippet
                                            hideSymbol
                                            classNames={{
                                                base: "w-full",
                                                pre: "break-all"
                                            }}
                                        >
                                            {encodedMessage}
                                        </Snippet>
                                    </div>
                                )}
                            </div>

                            {/* Entschlüsselungsbereich */}
                            <div className="flex flex-col gap-4 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                                <h3 className="text-lg font-medium">Nachricht entschlüsseln</h3>

                                <Textarea
                                    label="Emoji mit versteckter Nachricht"
                                    placeholder="Füge das Emoji mit der versteckten Nachricht ein..."
                                    value={decodeInput}
                                    onChange={(e) => setDecodeInput(e.target.value)}
                                    variant="bordered"
                                    fullWidth
                                />

                                <Input
                                    type="password"
                                    label="Passwort"
                                    placeholder="Passwort für Entschlüsselung"
                                    value={decodePassword}
                                    onChange={(e) => setDecodePassword(e.target.value)}
                                    variant="bordered"
                                />

                                {decodeError && (
                                    <div className="text-danger text-sm">{decodeError}</div>
                                )}

                                <Button
                                    color="success"
                                    onPress={handleDecode}
                                >
                                    Entschlüsseln
                                </Button>

                                {decodedMessage && (
                                    <div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-gray-500 dark:text-gray-400">Entschlüsselte Nachricht</span>
                                            <Tooltip content="In Zwischenablage kopieren">
                                                <Button
                                                    size="sm"
                                                    variant="light"
                                                    onPress={() => handleCopy(decodedMessage)}
                                                >
                                                    Kopieren
                                                </Button>
                                            </Tooltip>
                                        </div>
                                        <Snippet
                                            hideSymbol
                                            classNames={{
                                                base: "w-full",
                                                pre: "break-all"
                                            }}
                                        >
                                            {decodedMessage}
                                        </Snippet>
                                    </div>
                                )}
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" variant="light" onPress={onClose}>
                            Schließen
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            {/* Toast-Meldung für Kopieren-Feedback */}
            {copyFeedback && (
                <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg z-[9999]">
                    {copyFeedback}
                </div>
            )}
        </>
    );
};

export default EmojiStegDemo;