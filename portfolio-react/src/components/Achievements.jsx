import { motion } from 'framer-motion'
import { ACHIEVEMENTS } from '../data'

export default function Achievements() {
  return (
    <section id="achievements" style={{ background: 'var(--surface)' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: .7, ease: [.25,.1,.25,1] }}
      >
        <p className="s-label">Impact</p>
        <h2 className="s-title">Numbers that speak.</h2>
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))',
        gap: '1.2rem',
        marginTop: '2.8rem',
      }}>
        {ACHIEVEMENTS.map((a, i) => (
          <motion.div
            key={a.label}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: i * .07, duration: .6, ease: [.25,.1,.25,1] }}
            whileHover={{ y: -4, boxShadow: '0 24px 60px rgba(0,0,0,.6)', borderColor: 'var(--accent)', transition: { duration: .25 } }}
            style={{
              background: 'var(--card)', border: '1px solid var(--border)',
              borderRadius: 18, padding: '1.8rem', cursor: 'default',
            }}
          >
            <div style={{
              fontSize: '2.4rem', fontWeight: 800,
              background: 'linear-gradient(135deg, var(--accent3), #ff6b35)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              marginBottom: '.3rem',
            }}>
              {a.num}
            </div>
            <div style={{ fontSize: '.95rem', fontWeight: 700, marginBottom: '.35rem' }}>{a.label}</div>
            <div style={{ fontSize: '.78rem', color: 'var(--muted)', lineHeight: 1.55 }}>{a.desc}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
