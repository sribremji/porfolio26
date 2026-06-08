import { motion } from 'framer-motion'

const LINKS = [
  { href: 'mailto:sribremji1994@gmail.com', label: 'sribremji1994@gmail.com' },
  { href: 'https://linkedin.com/in/sribremji', label: 'linkedin.com/in/sribremji', target: '_blank' },
  { href: 'tel:+919500456828', label: '+91-9500456828' },
]

export default function Contact() {
  return (
    <section id="contact" style={{ background: 'var(--surface)', textAlign: 'center' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: .7, ease: [.25,.1,.25,1] }}
      >
        <p className="s-label">Let's Connect</p>
        <h2 className="s-title">Open to Senior and Lead roles<br />across Europe.</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ delay: .1, duration: .7, ease: [.25,.1,.25,1] }}
        style={{
          maxWidth: 660, margin: '2.5rem auto 0',
          background: 'var(--card)', border: '1px solid var(--border)',
          borderRadius: 22, padding: '3rem 2.5rem',
        }}
      >
        <p style={{ color: 'var(--muted)', fontSize: '.9rem', lineHeight: 1.7 }}>
          Actively seeking{' '}
          <strong style={{ color: 'var(--text)' }}>Senior Software Engineer, Platform Engineer, or DevOps Engineer</strong>{' '}
          opportunities in Europe. Experienced in fintech, media, and telecom domains, ready to contribute from day one.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
          {LINKS.map(l => (
            <motion.a
              key={l.href}
              href={l.href}
              target={l.target}
              rel={l.target ? 'noreferrer' : undefined}
              whileHover={{ borderColor: 'var(--accent)', color: 'var(--accent)', scale: 1.03 }}
              style={{
                display: 'flex', alignItems: 'center', gap: '.45rem',
                fontSize: '.82rem', color: 'var(--muted)', textDecoration: 'none',
                padding: '.55rem 1.1rem', borderRadius: 980, border: '1px solid var(--border)',
                transition: 'color .2s, border-color .2s',
              }}
            >
              {l.label}
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .3, duration: .5 }}
          style={{
            display: 'inline-block', marginTop: '1.4rem',
            padding: '.35rem 1.1rem', borderRadius: 980,
            background: 'rgba(48,209,88,.1)', border: '1px solid rgba(48,209,88,.3)',
            fontSize: '.78rem', color: 'var(--accent2)',
          }}
        >
          Open to relocation across Europe
        </motion.div>
      </motion.div>
    </section>
  )
}
