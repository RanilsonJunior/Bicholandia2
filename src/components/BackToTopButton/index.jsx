import React from 'react';
import { useEffect, useState } from 'react';

export const BackToTopButton = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div onClick={scrollUp}>
      {backToTopButton && (
        <i
          style={{
            background: '#00a3b4',
            position: 'fixed',
            bottom: '6px',
            right: '12px',
            width: '40px',
            height: '40px',
            borderRadius: '10%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '30px',
            color: '#fff',
            textDecoration: 'none',
            zIndex: '500',
            cursor: 'pointer',
          }}
          className="fa-solid fa-angle-up"
        ></i>
      )}
    </div>
  );
};
