'use client'

import React from 'react';
import { Button } from "@heroui/react";
import { PlayIcon } from '../icons'; // Importiere das PlayIcon aus deiner icons.tsx
import EmojiStegDemo from './EmojiStegDemo';

interface DemoButtonProps {
    className?: string;
}

const DemoButton: React.FC<DemoButtonProps> = ({ className = '' }) => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <Button
                color="primary"
                variant="flat"
                startContent={<PlayIcon size={16} />}
                size="sm"
                className={className}
                onPress={openModal}
            >
                Demo
            </Button>

            <EmojiStegDemo isOpen={isModalOpen} onClose={closeModal} />
        </>
    );
};

export default DemoButton;