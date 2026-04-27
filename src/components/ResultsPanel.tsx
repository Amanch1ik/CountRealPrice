import React from 'react';
import { PieChart, Briefcase, Box, ArrowUpRight } from 'lucide-react';
import { CalculationResult } from '../lib/calculations';

interface ResultsPanelProps {
  result: CalculationResult;
  projectName: string;
}

export default function ResultsPanel({ result, projectName }: ResultsPanelProps) {
  const formatCurrency = (val: number) => 
    new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'KGS', maximumFractionDigits: 0 }).format(val);

  const stats = [
    { label: 'Фонд оплаты труда', value: result.laborCost, icon: Briefcase, color: 'bg-blue-500' },
    { label: 'Материальные затраты', value: result.materialCost, icon: Box, color: 'bg-slate-400' },
    { label: 'Накладные расходы', value: result.overheadCost, icon: ArrowUpRight, color: 'bg-slate-700' },
  ];

  return (
    <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 w-full max-w-3xl mx-auto animate-in animate-delay-1">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-10 border-b border-slate-100">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center">
            <PieChart size={24} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">Сформированный расчет</h2>
            <p className="text-slate-500 font-medium">{projectName || 'Безымянный проект'}</p>
          </div>
        </div>
        <div className="bg-slate-50 px-6 py-4 rounded-2xl border border-slate-100 text-right">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Итоговая себестоимость</p>
          <p className="text-3xl font-black text-blue-600">{formatCurrency(result.totalCost)}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 mb-10">
        {stats.map((stat, i) => (
          <div key={i} className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl border border-slate-100">
            <div className="flex items-center gap-4">
              <div className={`w-2 h-2 rounded-full ${stat.color}`} />
              <span className="text-slate-700 font-semibold">{stat.label}</span>
            </div>
            <span className="text-slate-900 font-bold text-lg">{formatCurrency(stat.value)}</span>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Визуальное распределение</p>
        <div className="h-6 w-full bg-slate-100 rounded-full overflow-hidden flex shadow-inner">
          <div 
            style={{ width: `${(result.laborCost / result.totalCost) * 100}%` }} 
            className="h-full bg-blue-500 transition-all duration-1000"
          />
          <div 
            style={{ width: `${(result.materialCost / result.totalCost) * 100}%` }} 
            className="h-full bg-slate-400 transition-all duration-1000"
          />
          <div 
            style={{ width: `${(result.overheadCost / result.totalCost) * 100}%` }} 
            className="h-full bg-slate-700 transition-all duration-1000"
          />
        </div>
        <div className="flex justify-between text-[10px] text-slate-400 font-bold uppercase tracking-tighter">
          <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-blue-500" /> Оплата труда</span>
          <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-slate-400" /> Материалы</span>
          <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-slate-700" /> Накладные</span>
        </div>
      </div>
    </div>
  );
}
