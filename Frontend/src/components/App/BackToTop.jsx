import { useState, useEffect } from 'react';
import { FaArrowAltCircleUp } from 'react-icons/fa';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
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

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className='fixed bottom-6 right-6 z-100 flex flex-col justify-center items-center px-5 py-3 gap-1 rounded-lg text-sm bg-[var(--back-to-top-bg)] hover:bg-[var(--back-to-top-hover-bg)] border-none'
        aria-label='Back to top'
      >
        <FaArrowAltCircleUp className='text-2xl' />
        <span className='text-xs'>Back to Top</span>
      </button>
    )
  );
};

export default BackToTop;
