import { useState, useEffect } from "react";

export const useResponsiveLayout = (
  breakpoint
) => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth));
    return () => window.removeEventListener('resize', () => setWindowWidth(window.innerWidth));
  }, []);

  const isDesktop = windowWidth > breakpoint;
 
  return { isDesktop, windowWidth };
};

export default useResponsiveLayout;