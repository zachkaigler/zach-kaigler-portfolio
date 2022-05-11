import { useState, useEffect } from "react";

const useResponsiveLayout = () => {
  const [hidden, setHidden] = useState(true);
  const timers = [];

  const makeVisible = () => {
    timers.forEach((timer) => clearTimeout(timer));
    const timer = setTimeout(() => setHidden(false), 10);
    timers.push(timer);
  };

  useEffect(() => {
    makeVisible();
  }, [makeVisible]);
 
  return { hidden };
};

export default useResponsiveLayout;