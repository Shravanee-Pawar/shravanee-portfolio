import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 p-3.5 rounded-2xl bg-indigo-600/90 hover:bg-indigo-500 text-white shadow-xl shadow-indigo-600/40 border border-indigo-400/40 backdrop-blur-md transition-all hover:scale-110 active:scale-95 group"
      aria-label="Back to top"
      title="Back to Top"
    >
      <ArrowUp className="w-5 h-5 text-cyan-300 group-hover:-translate-y-1 transition-transform" />
    </button>
  );
};
