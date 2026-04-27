import { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import StatsSection from './components/StatsSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import Calculator from './components/Calculator';
import ResultsPanel from './components/ResultsPanel';
import { CalculationResult, CalculationParams } from './lib/calculations';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [view, setView] = useState<'landing' | 'app'>('landing');
  const [calcResult, setCalcResult] = useState<{ result: CalculationResult; params: CalculationParams } | null>(null);

  const handleCalculate = (result: CalculationResult, params: CalculationParams) => {
    setCalcResult({ result, params });
  };

  if (view === 'app') {
    return (
      <div className="min-h-screen">
        <Header onLoginClick={() => setView('landing')} />
        <main className="pt-24 pb-12 px-4 space-y-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-black mb-4">Автоматизированный расчет</h1>
            <p className="text-gray-400">Система автоматического формирования себестоимости программного обеспечения</p>
          </div>
          
          <Calculator onCalculate={handleCalculate} />
          
          {calcResult && (
            <ResultsPanel 
              result={calcResult.result} 
              projectName={calcResult.params.projectName} 
            />
          )}
          
          <div className="flex justify-center mt-8">
            <button 
              onClick={() => setView('landing')}
              className="text-slate-400 hover:text-blue-600 transition-colors flex items-center gap-2 font-medium"
            >
              ← Вернуться на главную
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header onLoginClick={() => setShowLogin(true)} />
      <main>
        <HeroSection onGetStarted={() => setView('app')} />
        <FeaturesSection />
        <StatsSection />
        <AboutSection />
      </main>
      <Footer />
      {showLogin && (
        <LoginModal 
          onClose={() => setShowLogin(false)} 
          onSuccess={() => {
            setShowLogin(false);
            setView('app');
          }}
        />
      )}
    </div>
  );
}

export default App;
