import { motion } from 'framer-motion'
import { SKILLS } from '../data'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: .05 } },
}

const cardVariant = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: .55, ease: [.25,.1,.25,1] } },
}

export default function Skills() {
  return (
    <section id="skills" style={{ background: 'var(--surface)' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: .7, ease: [.25,.1,.25,1] }}
      >
        <p className="s-label">Tech Stack</p>
        <h2 className="s-title">Every layer of the stack.</h2>
        <p className="s-sub">
          From JVM internals to Kubernetes operators, Terraform modules to Kafka consumers, all built for production.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))',
          gap: 1,
          marginTop: '3rem',
          border: '1px solid var(--border)',
          borderRadius: 20,
          overflow: 'hidden',
        }}
      >
        {SKILLS.map(cat => (
          <motion.div
            key={cat.name}
            variants={cardVariant}
            whileHover={{ backgroundColor: 'var(--card2)' }}
            style={{ background: 'var(--card)', padding: '1.6rem 1.8rem', cursor: 'default' }}
          >
            <div style={{ fontSize: '.7rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '.7rem' }}>
              {cat.name}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.32rem' }}>
              {cat.tags.map(t => (
                <span key={t} className={`tag${cat.hot.includes(t) ? ' hot' : ''}`}>{t}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
