import { useEffect, useState, useRef } from 'react';

interface StatItem {
  label: string;
  target: number;
  suffix: string;
}

const stats: StatItem[] = [
  { label: 'Пользователей', target: 2500, suffix: '+' },
  { label: 'Проектов', target: 840, suffix: '+' },
  { label: 'Uptime', target: 99.9, suffix: '%' },
  { label: 'Отклик', target: 120, suffix: 'мс' },
];

function useCountUp(target: number, isVisible: boolean, duration = 2000) {
  const [value, setValue] = useState(0);
  const startTime = useRef<number | null>(null);

  useEffect(() => {
    if (!isVisible) return;
    const isFloat = target % 1 !== 0;
    function animate(timestamp: number) {
      if (!startTime.current) startTime.current = timestamp;
      const elapsed = timestamp - startTime.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;
      setValue(isFloat ? parseFloat(current.toFixed(1)) : Math.floor(current));
      if (progress < 1) requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
  }, [isVisible, target, duration]);

  return value;
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setVisible(true); }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => {
          const count = useCountUp(stat.target, visible);
          return (
            <div key={i} className="text-center p-8 rounded-2xl bg-white border border-slate-100 shadow-sm">
              <div className="text-4xl font-black text-slate-900 mb-2">
                {count}{stat.suffix}
              </div>
              <p className="text-slate-500 font-medium uppercase tracking-widest text-[10px]">
                {stat.label}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
