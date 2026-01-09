import { useEffect, useRef } from "react";

export default function Background() {
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;
    if (window.innerWidth < 768) return;

    const handleMouseMove = (e) => {
      glow.style.background = `
        radial-gradient(
          700px at ${e.clientX}px ${e.clientY}px,
          rgba(168, 85, 247, 0.14),
          transparent 70%
        )
      `;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-black to-purple-900" />

      {/* Glow */}
      <div
        ref={glowRef}
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
      />

      {/* Noise */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: "url('/noise.png')",
          backgroundRepeat: "repeat",
        }}
      />
    </div>
  );
}
