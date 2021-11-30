import { useState } from 'react';

export const useModal = () => {
  const [isModalShown, setModalShown] = useState<boolean>(false);
  const toggleModal = () => setModalShown(!isModalShown);
  
  return {
    isModalShown,
    toggleModal,
  };
};