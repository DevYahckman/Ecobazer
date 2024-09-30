"use client";
import { useEffect, useState } from "react";

const useCheckIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleWindowSizeChange = () => {
        setIsMobile(window.innerWidth <= 768);
      };

      handleWindowSizeChange();

      window.addEventListener("resize", handleWindowSizeChange);

      return () => {
        window.removeEventListener("resize", handleWindowSizeChange);
      };
    }
  }, []);

  return isMobile;
};

export default useCheckIsMobile;
