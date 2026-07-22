export default function Banner() {
  const ticks = [
    { left: 11.5, opacity: 0.65 },
    { left: 21.8, opacity: 0.55 },
    { left: 28.3, opacity: 0.45 },
    { left: 36.8, opacity: 0.5 },
    { left: 38.1, opacity: 0.75 },
    { left: 39.4, opacity: 0.55 },
    { left: 55.1, opacity: 0.6 },
    { left: 56.4, opacity: 0.75 },
    { left: 57.7, opacity: 0.55 },
    { left: 66.3, opacity: 0.6 },
    { left: 72.8, opacity: 0.55 },
    { left: 83.1, opacity: 0.55 },
  ];

  return (
    <div className="w-full">
      <div className="overflow-hidden">
        <div className="relative h-6 bg-[#281d1a]">
          {ticks.map((tick) => (
            <span
              key={tick.left}
              className="absolute inset-y-0 w-[3px] bg-[#6a493f] shadow-[0_0_4px_rgba(151,99,82,0.3)]"
              style={{ left: `${tick.left}%`, opacity: tick.opacity }}
            />
          ))}
        </div>
        <div className="h-7 border-t-2 border-[#68483e] bg-[#4a322b]" />
      </div>
    </div>
  );
}
