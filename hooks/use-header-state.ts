"use client";

import { useEffect, useState } from "react";

const HERO_EXIT_OFFSET = 104;

export function useHeaderState(pathname: string) {
  const [isHeroState, setIsHeroState] = useState(false);

  useEffect(() => {
    const hero = document.querySelector<HTMLElement>('[data-header-hero="true"]');
    let frame = 0;

    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const heroBottom = hero?.getBoundingClientRect().bottom ?? 0;
        setIsHeroState(heroBottom > HERO_EXIT_OFFSET);
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [pathname]);

  return {
    isHeroState,
    isStickyState: !isHeroState,
  };
}
