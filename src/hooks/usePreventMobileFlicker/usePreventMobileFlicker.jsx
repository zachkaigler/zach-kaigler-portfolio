import { useState, useEffect, useCallback, useMemo } from "react";

const useResponsiveLayout = () => {
  const [hidden, setHidden] = useState(true);
  const timers = useMemo(() => [], []);

  const makeVisible = useCallback(() => {
    timers.forEach((timer) => clearTimeout(timer));
    const timer = setTimeout(() => setHidden(false), 10);
    timers.push(timer);
  }, [timers]);

  useEffect(() => {
    makeVisible();
  }, [makeVisible]);
 
  return { hidden };
};

export default useResponsiveLayout;