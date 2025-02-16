'use client';

import { ChevronUp } from 'lucide-react';
import React, { useState, useEffect } from 'react';

export const TopScroll = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div>
      <div
        onClick={scrollToTop}
        className={`w-[60px] shadow-[0px_0px_15px_#0001] h-[60px] flex items-center justify-center fixed bottom-4 right-4 bg-white text-white rounded-full cursor-pointer transition-opacity duration-300 transform ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <ChevronUp stroke="#000" />
      </div>
    </div>
  );
};
