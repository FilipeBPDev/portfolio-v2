import noise from "../assets/img/noise.webp";

export default function Background({ theme }) {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient base */}
      <div
        className={`absolute inset-0 transition-colors ${
          theme === "dark"
            ? "bg-gradient-to-br from-purple-950 via-black to-purple-900"
            : "bg-gradient-to-br from-violet-200 via-purple-100 to-rose-50"
        }`}
      />

      {/* Noise (funciona para ambos) */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `url(${noise})`,
          backgroundRepeat: "repeat",
        }}
      />
    </div>
  );
}
