import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const toaster = {
  success: (message: string) => {
    toast.success(message, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  },
  error: (message: string) => {
    toast.error(message, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  },
};

export default toaster;
