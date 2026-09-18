import { useEffect, useRef, useState } from "react";

export default function CursorGlow() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      setVisible(true);
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + "px";
        dotRef.current.style.top = e.clientY + "px";
      }
      if (glowRef.current) {
        glowRef.current.style.left = e.clientX + "px";
        glowRef.current.style.top = e.clientY + "px";
      }
    };

    const handleLeave = () => setVisible(false);

    const animateRing = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.12;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + "px";
        ringRef.current.style.top = ring.current.y + "px";
      }
      requestAnimationFrame(animateRing);
    };

    const handleInteractable = () => {
      document.querySelectorAll("a, button, [data-cursor]").forEach((el) => {
        el.addEventListener("mouseenter", () => {
          if (dotRef.current) {
            dotRef.current.style.width = "14px";
            dotRef.current.style.height = "14px";
            dotRef.current.style.background = "#A78BFA";
          }
          if (ringRef.current) {
            ringRef.current.style.width = "50px";
            ringRef.current.style.height = "50px";
            ringRef.current.style.borderColor = "rgba(167,139,250,0.6)";
          }
        });
        el.addEventListener("mouseleave", () => {
          if (dotRef.current) {
            dotRef.current.style.width = "8px";
            dotRef.current.style.height = "8px";
            dotRef.current.style.background = "#60A5FA";
          }
          if (ringRef.current) {
            ringRef.current.style.width = "32px";
            ringRef.current.style.height = "32px";
            ringRef.current.style.borderColor = "rgba(96,165,250,0.5)";
          }
        });
      });
    };

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeave);
    const rafId = requestAnimationFrame(animateRing);
    const observer = new MutationObserver(handleInteractable);
    observer.observe(document.body, { childList: true, subtree: true });
    handleInteractable();

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div
        id="cursor-glow"
        ref={glowRef}
        style={{ opacity: visible ? 1 : 0 }}
      />
      <div
        id="cursor-dot"
        ref={dotRef}
        style={{ opacity: visible ? 1 : 0 }}
      />
      <div
        id="cursor-ring"
        ref={ringRef}
        style={{ opacity: visible ? 1 : 0 }}
      />
    </>
  );
}
