import { useState, useEffect } from 'react';
import { Rocket, Menu, X } from 'lucide-react';

interface HeaderProps {
  onLoginClick: () => void;
}

export default function Header({ onLoginClick }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Возможности', href: '#features' },
    { label: 'О платформе', href: '#about' },
    { label: 'Контакты', href: '#footer' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md border-b border-slate-100 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-slate-900 no-underline">
          <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center shadow-md shadow-blue-200">
            <Rocket size={18} color="white" />
          </div>
          <span className="text-xl font-bold tracking-tight">SoftCost</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link text-slate-600 hover:text-blue-600">
              {item.label}
            </a>
          ))}
          <button className="btn-primary py-2.5 px-6" onClick={onLoginClick}>
            Войти
          </button>
        </nav>

        <button
          className="md:hidden text-slate-600"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-6 flex flex-col gap-4 shadow-xl">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link" onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <button className="btn-primary w-full justify-center" onClick={() => { onLoginClick(); setMenuOpen(false); }}>
            Войти
          </button>
        </div>
      )}
    </header>
  );
}
