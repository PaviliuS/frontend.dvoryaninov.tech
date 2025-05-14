"use client";

import { useEffect, useState } from "react";

export function useHasHistory() {
  const [isHasHistory, setIsHasHistory] = useState(false);

  useEffect(() => {
    if (window !== undefined) {
      setIsHasHistory(Boolean(window.history.length > 1));
    }
  }, []);

  return isHasHistory;
}
