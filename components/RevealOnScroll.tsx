"use client";

import { useEffect, useRef, ReactNode } from "react";

interface RevealOnScrollProps {
  children: ReactNode;
  delay?: number; // ms
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

/**
 * Wraps content and adds the `.is-visible` class (defined in globals.css)
 * once it scrolls into view, triggering a gentle rise+fade animation.
 * Falls back to always-visible if IntersectionObserver is unavailable.
 */
export default function RevealOnScroll({
  children,
  delay = 0,
  className = "",
  as = "div",
}: RevealOnScrollProps) {
  const ref = useRef<HTMLElement | null>(null);
  const Tag = as as any;

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.setTimeout(() => el.classList.add("is-visible"), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <Tag ref={ref} className={`reveal ${className}`}>
      {children}
    </Tag>
  );
}
