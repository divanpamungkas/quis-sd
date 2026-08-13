import React from 'react';
import { useApp } from '../../context/AppContext';
import { CheckCircle, Sparkles } from 'lucide-react';

export const ToastNotification: React.FC = () => {
  const { toastMessage } = useApp();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-in fade-in slide-in-from-bottom-5 duration-300">
      <div className="flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-slate-900 text-white text-xs font-semibold shadow-2xl border border-slate-800">
        <Sparkles className="w-4 h-4 text-amber-400" />
        <span>{toastMessage}</span>
      </div>
    </div>
  );
};
