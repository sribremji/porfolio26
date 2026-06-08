import { motion } from 'framer-motion'
import { CERTS } from '../data'

export default function Certifications() {
  return (
    <section id="certifications">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: .7, ease: [.25,.1,.25,1] }}
      >
        <p className="s-label">Certifications</p>
        <h2 className="s-title">AWS Certified. Three times over.</h2>
      </motion.div>

      <div style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap', marginTop: '2.5rem' }}>
        {CERTS.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, scale: .9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: i * .1, duration: .55, ease: [.34,1.56,.64,1] }}
            whileHover={{ borderColor: 'var(--accent3)', boxShadow: '0 0 32px rgba(255,159,10,.15)', transition: { duration: .25 } }}
            style={{
              background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 14,
              padding: '1.4rem 1.6rem', flex: 1, minWidth: 230,
              display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'default',
            }}
          >
            <div style={{
              fontSize: '.7rem', fontWeight: 800, letterSpacing: '.04em',
              width: 36, height: 36, borderRadius: 10, flexShrink: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: 'rgba(255,159,10,.12)', border: '1px solid rgba(255,159,10,.3)',
              color: 'var(--accent3)',
            }}>
              {c.num}
            </div>
            <div>
              <div style={{ fontSize: '.88rem', fontWeight: 700, marginBottom: '.2rem' }}>{c.title}</div>
              <div style={{ fontSize: '.72rem', color: 'var(--muted)' }}>{c.sub}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
