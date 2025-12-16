import { useEffect, useState } from "react";

const useMobile = (breakpoint = 768) => {
  const isClient = typeof window !== "undefined";
  const [isMobile, setIsMobile] = useState(
    isClient ? window.innerWidth <= breakpoint : false
  );

  useEffect(() => {
    if (!isClient) return;

    const handleResize = () => {
      setIsMobile(window.innerWidth <= breakpoint);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint, isClient]);

  return isMobile;
};

export default useMobile;