import classNames from 'classnames';
import React from 'react';
import { ModalProps } from 'types/frontend';

const Modal: React.FC<ModalProps> = ({ children, visible, close }) => {
  const modalClassNames = classNames('modal', visible ? 'modal-active' : '');

  return (
    <div className={modalClassNames} onClick={() => close()}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
