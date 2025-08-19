import { useState, useEffect, RefObject } from 'react';

export const useDetectOutsideClick = (el: RefObject<HTMLElement | null>, initialState: boolean) => {
  const [isActive, setIsActive] = useState(initialState);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      // If the active element exists and is clicked outside of
      if (el.current !== null && !el.current.contains(e.target as Node)) {
        setIsActive(false);
      }
    };

    // If the item is active (ie open) then listen for clicks
    if (isActive) {
      window.addEventListener('click', onClick);
    }

    return () => {
      window.removeEventListener('click', onClick);
    };
  }, [isActive, el]);

  return [isActive, setIsActive] as const;
};