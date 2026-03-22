"use client";

import { useEffect, useMemo, useState } from "react";

const HERO_ROUTE_THRESHOLDS: Array<{ match: RegExp; threshold: number }> = [
  { match: /^\/$/, threshold: 420 },
  { match: /^\/projects$/, threshold: 280 },
  { match: /^\/projects\/.+/, threshold: 320 },
  { match: /^\/blog$/, threshold: 220 },
];

function getHeaderThreshold(pathname: string) {
  const matched = HERO_ROUTE_THRESHOLDS.find((item) => item.match.test(pathname));
  return matched?.threshold ?? 0;
}

export function useHeaderState(pathname: string) {
  const threshold = useMemo(() => getHeaderThreshold(pathname), [pathname]);
  const [pastHero, setPastHero] = useState(threshold === 0);

  useEffect(() => {
    const update = () => {
      if (threshold === 0) {
        setPastHero(true);
        return;
      }

      setPastHero(window.scrollY > threshold);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [threshold]);

  return {
    isHeroState: threshold > 0 && !pastHero,
    isStickyState: threshold === 0 || pastHero,
  };
}
