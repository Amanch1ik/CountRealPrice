import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
}

export default function HeroSection({ onGetStarted }: HeroProps) {
  return (
    <section className="pt-32 pb-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <div className="animate-in mb-6">
          <span className="px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold border border-blue-100">
            Платформа для профессионалов
          </span>
        </div>

        <h1 className="animate-in animate-delay-1 text-5xl md:text-6xl font-black text-slate-900 leading-tight mb-6">
          Автоматизируйте расчет
          <br />
          <span className="text-blue-600">себестоимости ПО</span>
        </h1>

        <p className="animate-in animate-delay-2 text-xl text-slate-600 max-w-2xl mx-auto mb-10">
          Профессиональный инструмент для быстрого и точного формирования 
          финансовых отчетов по разработке программных продуктов.
        </p>

        <div className="animate-in animate-delay-3 flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button className="btn-primary px-8 py-4 text-lg shadow-lg shadow-blue-200" onClick={onGetStarted}>
            Начать работу
            <ArrowRight size={20} />
          </button>
          <a href="#features" className="btn-secondary px-8 py-4 text-lg">
            Узнать больше
          </a>
        </div>

        <div className="animate-in animate-delay-4 relative max-w-5xl mx-auto">
          <div className="absolute -inset-4 bg-slate-100 rounded-[2.5rem] -z-10 blur-sm" />
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426" 
            alt="Dashboard" 
            className="rounded-3xl border border-slate-200 shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
