import { useState } from 'react';

const useModal = (): [visible: boolean, open: () => void, close: () => void] => {
  const [visible, setVisible] = useState<boolean>(false);
  const open = () => setVisible(true);
  const close = () => setVisible(false);

  return [visible, open, close];
};

export default useModal;
