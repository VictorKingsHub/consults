import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
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
    <div className="scroll-to-top">
      {isVisible && (
        <button onClick={scrollToTop} aria-label="Scroll to top">
          <FaArrowUp />
        </button>
      )}
      <style jsx>{`
        .scroll-to-top {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 100;
        }

        button {
          background-color: #0070f3; /* Example color */
          color: white;
          border: none;
          border-radius: 5px;
          padding: 10px;
          cursor: pointer;
          font-size: 1.2rem;
          opacity: 0.8;
          transition: opacity 0.3s ease-in-out;
        }

        button:hover {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default ScrollToTop;