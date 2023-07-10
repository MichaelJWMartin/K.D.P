import React, { useState } from 'react';
import styled from 'styled-components';

export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  function openModal(content) {
    setModalContent(content);
    setIsModalOpen(true);
  }

  function closeModal() {
    setModalContent(null);
    setIsModalOpen(false);
  }

  return {
    isModalOpen,
    openModal,
    closeModal,
    modalContent,
  };
}