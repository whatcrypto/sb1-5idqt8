import React from 'react';
import { AlertCircle, CheckCircle2, XCircle } from 'lucide-react';

type NotificationType = 'success' | 'error' | 'info';

interface NotificationToastProps {
  type: NotificationType;
  message: string;
  onClose: () => void;
}

const icons = {
  success: <CheckCircle2 className="w-5 h-5 text-green-500" />,
  error: <XCircle className="w-5 h-5 text-red-500" />,
  info: <AlertCircle className="w-5 h-5 text-blue-500" />
};

const backgrounds = {
  success: 'bg-green-100',
  error: 'bg-red-100',
  info: 'bg-blue-100'
};

export function NotificationToast({ type, message, onClose }: NotificationToastProps) {
  React.useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`fixed top-4 right-4 ${backgrounds[type]} p-4 rounded-lg shadow-lg flex items-center gap-3 max-w-sm animate-slide-in`}>
      {icons[type]}
      <p className="text-gray-900 font-medium">{message}</p>
    </div>
  );
}