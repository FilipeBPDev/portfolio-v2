export default function Background({ theme }) {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient base */}
      <div
        className={`absolute inset-0 transition-colors ${
          theme === "dark"
            ? "bg-gradient-to-br from-purple-950 via-black to-purple-900"
            : //"bg-gradient-to-br from-purple-950 via-black to-purple-900"
              "bg-gradient-to-br from-gray-100 via-white to-gray-200"
        }`}
      />

      {/* Noise (funciona para ambos) */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "url('/noise.png')",
          backgroundRepeat: "repeat",
        }}
      />
    </div>
  );
}
