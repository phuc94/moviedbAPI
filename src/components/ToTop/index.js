import { useEffect, useState } from 'react';
import './toTop.css';

const ToTop = () => {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    document.addEventListener('scroll', () => {
      if (!isShow && window.scrollY >= 1300) {
        setIsShow(true);
      } else {
        setIsShow(false);
      }
    });
  }, []);

  return (
    <>
      {isShow && (
        <span
          onClick={(_) =>
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }
          id='to-top'
        ></span>
      )}
    </>
  );
};
export default ToTop;
