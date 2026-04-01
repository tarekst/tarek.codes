'use client'

import React, { useState } from 'react';
import { encryptInEmoji, decryptFromEmoji } from 'emoji-steg';
import {
  Modal,
  Button,
  TextField,
  Label,
  Input,
  TextArea,
  Tooltip,
  useOverlayState,
} from "@heroui/react";

interface EmojiStegDemoProps {
  isOpen: boolean;
  onClose: () => void;
}

const EmojiStegDemo: React.FC<EmojiStegDemoProps> = ({ isOpen, onClose }) => {
  const [message, setMessage] = useState('');
  const [password, setPassword] = useState('');
  const [emoji, setEmoji] = useState('🔒');
  const [encodedMessage, setEncodedMessage] = useState('');

  const [decodeInput, setDecodeInput] = useState('');
  const [decodePassword, setDecodePassword] = useState('');
  const [decodedMessage, setDecodedMessage] = useState('');

  const [encodeError, setEncodeError] = useState('');
  const [decodeError, setDecodeError] = useState('');
  const [copyFeedback, setCopyFeedback] = useState('');

  const state = useOverlayState({ isOpen, onOpenChange: (open) => { if (!open) onClose(); } });

  const handleEncode = () => {
    setEncodeError('');
    if (!message) { setEncodeError('Please enter a message'); return; }
    if (!password) { setEncodeError('Please enter a password'); return; }
    try {
      const result = encryptInEmoji(message, password, emoji || '🔒');
      setEncodedMessage(result);
    } catch (error) {
      console.error(error);
      setEncodeError('Encryption failed');
    }
  };

  const handleDecode = () => {
    setDecodeError('');
    if (!decodeInput) { setDecodeError('Please paste the encrypted emoji'); return; }
    if (!decodePassword) { setDecodeError('Please enter the password'); return; }
    try {
      const result = decryptFromEmoji(decodeInput, decodePassword);
      if (result && /^[\x20-\x7E]+$/.test(result)) {
        setDecodedMessage(result);
      } else {
        setDecodeError('Decryption failed. Wrong password?');
      }
    } catch (error) {
      console.error(error);
      setDecodeError('Decryption failed. Please check the password and encrypted text.');
    }
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setCopyFeedback('Copied!');
        setTimeout(() => setCopyFeedback(''), 2000);
      })
      .catch(err => console.error('Copy failed:', err));
  };

  return (
    <>
      <Modal state={state}>
        <Modal.Backdrop className="z-[9990]">
          <Modal.Container className="z-[9999] max-w-4xl w-full mx-4 overflow-hidden">
            <Modal.Dialog className="max-w-4xl w-full">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Heading>
                  <span className="flex items-center gap-2">
                    <span className="text-xl">🔐</span>
                    Emoji-Steg Demo
                  </span>
                </Modal.Heading>
              </Modal.Header>
              <Modal.Body>
                <p className="text-sm text-default-500 mb-4">
                  Hide secret messages inside emojis. The encrypted message is invisible and can only be decrypted with the correct password.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                  {/* Encrypt section */}
                  <div className="flex flex-col gap-4 bg-surface-secondary rounded-xl p-5 overflow-hidden">
                    <h3 className="text-base font-semibold flex items-center gap-2">
                      <span>🔒</span> Hide Message
                    </h3>

                    <TextField name="message">
                      <Label>Message</Label>
                      <TextArea
                        placeholder="Your secret message..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </TextField>

                    <div className="grid grid-cols-3 gap-3">
                      <div className="col-span-2">
                        <TextField name="password">
                          <Label>Password</Label>
                          <Input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </TextField>
                      </div>
                      <TextField name="emoji">
                        <Label>Emoji</Label>
                        <Input
                          placeholder="🔒"
                          value={emoji}
                          onChange={(e) => setEmoji(e.target.value)}
                          className="text-center text-lg"
                        />
                      </TextField>
                    </div>

                    {encodeError && (
                      <p className="text-danger text-sm">{encodeError}</p>
                    )}

                    <Button variant="primary" onPress={handleEncode} className="w-full">
                      Hide
                    </Button>

                    {encodedMessage && (
                      <div className="bg-default-100 rounded-lg p-3">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-medium text-default-500 uppercase tracking-wider">Result</span>
                          <Button
                            size="sm"
                            variant="ghost"
                            onPress={() => handleCopy(encodedMessage)}
                          >
                            {copyFeedback || 'Copy'}
                          </Button>
                        </div>
                        <div className="text-2xl select-all cursor-pointer text-center py-2">
                          {encodedMessage}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Decrypt section */}
                  <div className="flex flex-col gap-4 bg-surface-secondary rounded-xl p-5 overflow-hidden">
                    <h3 className="text-base font-semibold flex items-center gap-2">
                      <span>🔓</span> Decrypt Message
                    </h3>

                    <TextField name="decodeInput">
                      <Label>Encrypted Emoji</Label>
                      <TextArea
                        placeholder="Paste emoji here..."
                        value={decodeInput}
                        onChange={(e) => setDecodeInput(e.target.value)}
                      />
                    </TextField>

                    <TextField name="decodePassword">
                      <Label>Password</Label>
                      <Input
                        type="password"
                        placeholder="Password"
                        value={decodePassword}
                        onChange={(e) => setDecodePassword(e.target.value)}
                      />
                    </TextField>

                    {decodeError && (
                      <p className="text-danger text-sm">{decodeError}</p>
                    )}

                    <Button variant="primary" onPress={handleDecode} className="w-full">
                      Decrypt
                    </Button>

                    {decodedMessage && (
                      <div className="bg-default-100 rounded-lg p-3">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-medium text-default-500 uppercase tracking-wider">Decrypted</span>
                          <Button
                            size="sm"
                            variant="ghost"
                            onPress={() => handleCopy(decodedMessage)}
                          >
                            Copy
                          </Button>
                        </div>
                        <p className="text-sm font-mono break-all whitespace-pre-wrap py-1">
                          {decodedMessage}
                        </p>
                      </div>
                    )}
                  </div>

                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="ghost" onPress={onClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </>
  );
};

export default EmojiStegDemo;
