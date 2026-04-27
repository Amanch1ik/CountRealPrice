import { LayoutDashboard, BarChart3, Users, Shield, Zap, Globe } from 'lucide-react';

const features = [
  {
    icon: LayoutDashboard,
    title: 'Панель управления',
    desc: 'Интуитивный дашборд с полной картиной по всем проектам и задачам в реальном времени.',
  },
  {
    icon: BarChart3,
    title: 'Аналитика',
    desc: 'Детальные отчёты и графики для отслеживания прогресса команды и выявления узких мест.',
  },
  {
    icon: Users,
    title: 'Работа в команде',
    desc: 'Совместная работа над задачами, комментарии, уведомления и распределение ролей.',
  },
  {
    icon: Shield,
    title: 'Безопасность',
    desc: 'Шифрование данных, двухфакторная аутентификация и гибкое управление доступом.',
  },
  {
    icon: Zap,
    title: 'Автоматизация',
    desc: 'Автоматические триггеры, напоминания и интеграция с популярными сервисами.',
  },
  {
    icon: Globe,
    title: 'Доступ отовсюду',
    desc: 'Адаптивный интерфейс работает на любых устройствах — от телефона до десктопа.',
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="section-title">
          Эффективные <span className="text-blue-600">инструменты</span>
        </h2>
        <p className="section-subtitle">
          Комплексное решение для автоматизации финансового анализа в разработке ПО
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {features.map((f, i) => {
          const Icon = f.icon;
          return (
            <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                <Icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{f.title}</h3>
              <p className="text-slate-600 leading-relaxed">{f.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
