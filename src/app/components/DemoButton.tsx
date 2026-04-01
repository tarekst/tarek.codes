'use client'

import React from 'react';
import { Button } from "@heroui/react";
import { PlayIcon } from '../icons';
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
        variant="primary"
        size="sm"
        className={className}
        onPress={openModal}
      >
        <PlayIcon size={16} />
        Demo
      </Button>

      <EmojiStegDemo isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default DemoButton;
