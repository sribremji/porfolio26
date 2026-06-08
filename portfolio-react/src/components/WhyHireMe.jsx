import { motion } from 'framer-motion'
import { WHYHIRE } from '../data'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: .07 } },
}

const card = {
  hidden: { opacity: 0, y: 32, scale: .97 },
  show:   { opacity: 1, y: 0, scale: 1, transition: { duration: .6, ease: [.25,.1,.25,1] } },
}

export default function WhyHireMe() {
  return (
    <section id="whyhire">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: .7, ease: [.25,.1,.25,1] }}
      >
        <p className="s-label">Why Hire Me</p>
        <h2 className="s-title">What sets me apart.</h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ delay: .1, duration: .6, ease: [.25,.1,.25,1] }}
        style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.75, maxWidth: 700, marginTop: '.4rem', marginBottom: '3rem' }}
      >
        Nine years of shipping{' '}
        <strong style={{ color: 'var(--text)' }}>Java microservices to production at enterprise scale</strong>,
        owning systems end-to-end: architecture, infrastructure, CI/CD, observability, and security.
        Here is why that matters for your team.
      </motion.p>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 1,
          border: '1px solid var(--border)',
          borderRadius: 22,
          overflow: 'hidden',
          marginBottom: '3rem',
        }}
      >
        {WHYHIRE.map(w => (
          <motion.div
            key={w.num}
            variants={card}
            whileHover={{ backgroundColor: '#161616', transition: { duration: .2 } }}
            style={{
              background: 'var(--card)',
              padding: '2rem 2.2rem',
              cursor: 'default',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Top colour accent bar */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: .3, duration: .6, ease: [.25,.1,.25,1] }}
              style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 2,
                background: w.color, transformOrigin: 'left',
              }}
            />

            <div style={{ fontSize: '.65rem', fontWeight: 800, letterSpacing: '.14em', textTransform: 'uppercase', color: w.color, marginBottom: '.9rem' }}>
              {w.num}
            </div>
            <div style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '.6rem', lineHeight: 1.3 }}>
              {w.title}
            </div>
            <div style={{ fontSize: '.82rem', color: 'var(--muted)', lineHeight: 1.7 }}>
              {w.body}
            </div>
            <div style={{
              display: 'inline-block', marginTop: '.9rem',
              fontSize: '.7rem', fontWeight: 700, letterSpacing: '.06em',
              padding: '.22rem .7rem', borderRadius: 6,
              background: 'rgba(255,255,255,.04)', border: '1px solid var(--border2)',
              color: 'var(--muted)',
            }}>
              {w.proof}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Strip */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ delay: .1, duration: .7, ease: [.25,.1,.25,1] }}
        style={{
          background: 'linear-gradient(135deg, rgba(10,132,255,.1), rgba(48,209,88,.07))',
          border: '1px solid rgba(10,132,255,.22)',
          borderRadius: 18, padding: '2.4rem 2.8rem',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem',
        }}
      >
        <div>
          <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '.4rem' }}>Ready to contribute from day one.</h3>
          <p style={{ fontSize: '.85rem', color: 'var(--muted)', maxWidth: 480, lineHeight: 1.6 }}>
            Senior Software Engineer · Platform Engineer · DevOps Engineer across fintech, media, and telecom. Available for roles across Europe.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '.8rem', flexWrap: 'wrap' }}>
          <a href="mailto:sribremji1994@gmail.com" className="btn btn-primary">Email Me</a>
          <a href="https://linkedin.com/in/sribremji" target="_blank" rel="noreferrer" className="btn btn-ghost">LinkedIn</a>
        </div>
      </motion.div>
    </section>
  )
}
