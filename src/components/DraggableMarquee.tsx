"use client";

import { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  /** Vitesse du défilement automatique, en pixels/seconde. */
  speed?: number;
};

/**
 * Ligne de contenu qui défile automatiquement (effet marquee) et peut aussi
 * être balayée / glissée à la souris ou au doigt pour naviguer manuellement.
 * Le contenu doit être fourni en double (deux fois la même liste) par
 * l'appelant pour permettre une boucle infinie fluide.
 */
export function DraggableMarquee({ children, speed = 45 }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ down: false, startX: 0, startScroll: 0 });
  const paused = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.scrollLeft = el.scrollWidth / 4;

    let raf: number;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = now - last;
      last = now;
      const half = el.scrollWidth / 2;
      if (!paused.current && !drag.current.down && half > 0) {
        let next = el.scrollLeft + (speed * dt) / 1000;
        if (next >= half) next -= half;
        el.scrollLeft = next;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [speed]);

  const wrap = (next: number) => {
    const el = containerRef.current!;
    const half = el.scrollWidth / 2;
    if (half <= 0) return next;
    while (next < 0) {
      next += half;
      drag.current.startScroll += half;
    }
    while (next >= half) {
      next -= half;
      drag.current.startScroll -= half;
    }
    return next;
  };

  const onPointerDown = (e: React.PointerEvent) => {
    const el = containerRef.current;
    if (!el) return;
    drag.current = { down: true, startX: e.clientX, startScroll: el.scrollLeft };
    el.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const el = containerRef.current;
    if (!el || !drag.current.down) return;
    const dx = e.clientX - drag.current.startX;
    el.scrollLeft = wrap(drag.current.startScroll - dx);
  };

  const endDrag = () => {
    drag.current.down = false;
  };

  return (
    <div
      ref={containerRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerLeave={endDrag}
      onPointerCancel={endDrag}
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
      className="cursor-grab touch-pan-y overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] active:cursor-grabbing [&::-webkit-scrollbar]:hidden"
    >
      <div className="flex w-max gap-5 select-none">{children}</div>
    </div>
  );
}
