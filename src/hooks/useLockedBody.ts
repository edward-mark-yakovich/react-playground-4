import { useEffect, useLayoutEffect, useState } from 'react';

type ReturnType = [boolean, (isLocked: boolean) => void];

function useLockedBody(initialLocked = false): ReturnType {
  const [isLocked, setLocked] = useState(initialLocked);

  // Update state if initialValue changes
  useEffect(() => {
    if (isLocked !== initialLocked) {
      setLocked(initialLocked);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialLocked]);

  // Do the side effect before render
  useLayoutEffect(() => {
    if (!isLocked) return;

    // Save initial body style
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    // Lock body scroll
    document.body.style.overflow = 'hidden';

    // Get the scrollBar width
    const root = document.getElementById('___gatsby'); // or root
    const scrollBarWidth = root ? root.offsetWidth - root.scrollWidth : 0;

    // Avoid width reflow
    if (scrollBarWidth) {
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    }

    return () => {
      document.body.style.overflow = originalOverflow;

      if (scrollBarWidth) {
        document.body.style.paddingRight = originalPaddingRight;
      }
    }
  }, [isLocked]);

  return [isLocked, setLocked];
}

export default useLockedBody;