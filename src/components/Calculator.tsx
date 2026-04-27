import React, { useState } from 'react';
import { Calculator as CalcIcon, RefreshCcw } from 'lucide-react';
import { calculateSoftwareCost, CalculationParams, CalculationResult } from '../lib/calculations';

interface CalculatorProps {
  onCalculate: (result: CalculationResult, params: CalculationParams) => void;
}

export default function Calculator({ onCalculate }: CalculatorProps) {
  const [params, setParams] = useState<CalculationParams>({
    projectName: '',
    laborHours: 300,
    hourlyRate: 600,
    materialCostCoef: 0.2,
    overheadCostCoef: 0.15,
  });

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const result = calculateSoftwareCost(params);
    onCalculate(result, params);
  };

  return (
    <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 w-full max-w-3xl mx-auto animate-in">
      <div className="flex items-center gap-4 mb-10">
        <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center">
          <CalcIcon size={24} />
        </div>
        <div>
          <h2 className="text-2xl font-black text-slate-900">Калькулятор расчета</h2>
          <p className="text-slate-500">Заполните данные для формирования отчета</p>
        </div>
      </div>

      <form onSubmit={handleCalculate} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="md:col-span-2">
          <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Название проекта</label>
          <input
            type="text"
            required
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 outline-none focus:border-blue-500 focus:bg-white transition-all text-slate-900"
            placeholder="Напр: Разработка веб-платформы"
            value={params.projectName}
            onChange={(e) => setParams({ ...params, projectName: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Трудозатраты (чел-час)</label>
          <input
            type="number"
            required
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 outline-none focus:border-blue-500 focus:bg-white transition-all text-slate-900"
            value={params.laborHours}
            onChange={(e) => setParams({ ...params, laborHours: Number(e.target.value) })}
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Ставка (сом/час)</label>
          <input
            type="number"
            required
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 outline-none focus:border-blue-500 focus:bg-white transition-all text-slate-900"
            value={params.hourlyRate}
            onChange={(e) => setParams({ ...params, hourlyRate: Number(e.target.value) })}
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Мат. затраты (коэф)</label>
          <input
            type="number"
            step="0.01"
            min="0.1"
            max="0.3"
            required
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 outline-none focus:border-blue-500 focus:bg-white transition-all text-slate-900"
            value={params.materialCostCoef}
            onChange={(e) => setParams({ ...params, materialCostCoef: Number(e.target.value) })}
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Накладные расходы (коэф)</label>
          <input
            type="number"
            step="0.01"
            min="0.1"
            max="0.25"
            required
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 outline-none focus:border-blue-500 focus:bg-white transition-all text-slate-900"
            value={params.overheadCostCoef}
            onChange={(e) => setParams({ ...params, overheadCostCoef: Number(e.target.value) })}
          />
        </div>

        <div className="md:col-span-2 mt-4">
          <button type="submit" className="btn-primary w-full py-5 text-lg shadow-lg shadow-blue-100 flex justify-center">
            <RefreshCcw size={20} />
            Выполнить расчет
          </button>
        </div>
      </form>
    </div>
  );
}
