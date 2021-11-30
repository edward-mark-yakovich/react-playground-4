import modalCSS from "./modalCSS";
import React, {useState, useEffect, useLayoutEffect, useRef} from 'react';
import ReactDOM, {createPortal} from 'react-dom';

import useLockedBody from "@hooks/useLockedBody";

type WithChildren<T = {}> = 
  T & { children?: React.ReactNode };

type ModalProps = WithChildren<{
  id: string;
  isModalShown: boolean;
  hideModal: () => void;
}>

const Modal = ({
  id,
  isModalShown,
  hideModal,
  children
}: ModalProps) => {
  const modalEl = useRef<HTMLDivElement>(null);
  const modalCloseBtnEl = useRef<HTMLButtonElement>(null);
  const [isOpen, setOpen] = useState<boolean>(isModalShown);
  const [prevFocusEl, setPrevFocusEl] = useState<HTMLElement>();
  const [isLocked, setLocked] = useLockedBody();

  useEffect(() => {
    const modelElCurrent = modalEl?.current;

    if (!isOpen) {
      setOpen(isModalShown);
    } else {
      if (modelElCurrent) modelElCurrent.addEventListener('animationend', () => {
        setOpen(isModalShown);

        if (prevFocusEl && (prevFocusEl instanceof HTMLElement)) prevFocusEl.focus();
      });
    }

    setLocked(isModalShown);
  }, [isModalShown]);

  useEffect(() => {
    if (isModalShown) {
      const modalCloseBtnElCurrent = modalCloseBtnEl?.current;
      const activeEl = document.activeElement;

      if (activeEl && (activeEl instanceof HTMLElement)) setPrevFocusEl(activeEl);
      
      if (modalCloseBtnElCurrent) modalCloseBtnElCurrent.focus();
    }
  }, [isOpen]);

  const modal = isOpen
    ? <div ref={modalEl} data-component="Modal" id={id} className={modalCSS.modal(isModalShown)}>

        <div className={modalCSS.modal_content(isModalShown)}>
          <button ref={modalCloseBtnEl} className={modalCSS.modal_btn_close} onClick={hideModal}>Close modal</button>
          <br />
          <br />
          {children}
        </div>

        <div className={modalCSS.modal_backdrop} onClick={hideModal} />
        
      </div>
    : null;

  return createPortal(modal, document.body);
};

export default Modal;
