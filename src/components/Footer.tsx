import { Rocket } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="footer" style={{
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '48px 24px 32px',
      maxWidth: 1200,
      margin: '0 auto',
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: 40, marginBottom: 40,
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
            <div style={{
              width: 32, height: 32, borderRadius: 8,
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              <Rocket size={16} color="white" />
            </div>
            <span style={{ fontWeight: 700 }}>SoftCost</span>
          </div>
          <p style={{ color: '#64748b', fontSize: '0.85rem', lineHeight: 1.6 }}>
            Платформа для автоматизированного расчета себестоимости ПО.
          </p>
        </div>
        <div>
          <h4 style={{ fontWeight: 600, marginBottom: 14, fontSize: '0.9rem' }}>Платформа</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <a href="#features" className="nav-link">Возможности</a>
            <a href="#about" className="nav-link">О платформе</a>
          </div>
        </div>
        <div>
          <h4 style={{ fontWeight: 600, marginBottom: 14, fontSize: '0.9rem' }}>Контакты</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <span className="nav-link">support@softcost.kz</span>
            <span className="nav-link">Бишкек, Кыргызстан</span>
          </div>
        </div>
      </div>
      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        paddingTop: 24, textAlign: 'center',
      }}>
        <p style={{ color: '#475569', fontSize: '0.8rem' }}>
          &copy; 2026 SoftCost. Все права защищены.
        </p>
      </div>
    </footer>
  );
}
