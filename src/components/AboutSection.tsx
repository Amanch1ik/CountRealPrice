import { Check } from 'lucide-react';

const benefits = [
  'Быстрый старт за 30 секунд',
  'Полная автоматизация расчетов',
  'Интеграция с корпоративными системами',
  'Бесплатный тариф для обучения',
  'Техническая поддержка 24/7',
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      <div>
        <h2 className="section-title text-left">
          Профессиональный <span className="text-blue-600">подход</span>
        </h2>
        <p className="text-slate-600 text-lg mb-10 leading-relaxed">
          Система разработана специально для автоматизации финансового анализа в IT-сфере, 
          позволяя снизить вероятность ошибок и ускорить процесс обработки данных в несколько раз.
        </p>

        <ul className="space-y-4">
          {benefits.map((b, i) => (
            <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
              <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                <Check size={14} strokeWidth={3} />
              </div>
              {b}
            </li>
          ))}
        </ul>
      </div>

      <div className="relative">
        <div className="absolute -inset-4 bg-blue-50 rounded-3xl -z-10 transform rotate-3" />
        <img 
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2340" 
          alt="Analytics" 
          className="rounded-3xl border border-slate-200 shadow-xl relative z-10"
        />
      </div>
    </section>
  );
}
