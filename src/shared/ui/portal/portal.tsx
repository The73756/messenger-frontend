import React, { useEffect, useMemo } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: React.ReactNode;
}

export const Portal: React.FC<PortalProps> = ({ children }) => {
  const container = useMemo(() => {
    if (typeof window === "undefined" || !document) {
      return null;
    }
    return document.createElement("div")
  }, []);

  useEffect(() => {
    if (!container) return;
    document.body.appendChild(container);
    return () => {
      document.body.removeChild(container);
    };
  }, [container]);

  if (!container) return null;
  return createPortal(children, container);
};
