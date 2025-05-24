import { useEffect } from "react";

const useLoadingTimer = (setLoading, delay = 12000) => {
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), delay);
    return () => clearTimeout(timer);
  }, [setLoading, delay]);
};

export default useLoadingTimer;