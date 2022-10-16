import React from 'react';

type ToastProps = {
  message: string;
  type: 'error' | 'warning' | 'info' | 'success';
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
};

const Toast: React.FC<ToastProps> = (props) => {
  return (
    <div className="notification toast">
      <button>X</button>
      <div className="notification-image">
        <img src="" alt="" />
      </div>
      <div>
        <p className="notification-title">Title</p>
        <p className="notification-message">Message</p>
      </div>
    </div>
  );
};

export default Toast;
