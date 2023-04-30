import React, { useCallback, useEffect } from 'react';
import css from '../styles.module.css'

export const Modal = ({ onModalClick, children }) =>  {
 
  const hideModalKeydown = useCallback
    (({ code, target, currentTarget }) => {
      if (code === 'Escape') {
        onModalClick(target, currentTarget)
      }
    }, [onModalClick] 
    )

  function hideModalClick(e) {
    if (e.target.dataset.action === 'overlay') {
      onModalClick();
    }
  }

  useEffect(()=> {
    window.addEventListener('keydown', hideModalKeydown);
    return () => {
      window.removeEventListener('keydown', hideModalKeydown);
    }
  }, [hideModalKeydown])


    return (
      <div className={css.Overlay} onClick={hideModalClick} data-action="overlay">
        <div className={css.Modal}>{children}</div>
      </div>
    );
  }
