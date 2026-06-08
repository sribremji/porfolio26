import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const STATS = [
  { to: 9,  sfx: '+',            label: 'Years of Experience' },
  { to: 10, sfx: 'M+ Events/Day', label: 'Daily Events Processed' },
  { to: 4,  sfx: ' Companies',    label: 'Enterprise Employers' },
  { to: 3,  sfx: ' AWS Certs',    label: 'AWS Certifications' },
  { to: 90, sfx: '%+ TDD',        label: 'Test Coverage Achieved' },
]

function Counter({ to, sfx }) {
  const [val, setVal] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  useEffect(() => {
    if (!inView) return
    const dur = 1600
    const start = performance.now()
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1)
      const ease = 1 - Math.pow(1 - p, 3)
      setVal(Math.round(ease * to))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, to])

  return (
    <span ref={ref} style={{
      fontSize: 'clamp(2.2rem,4.5vw,3.6rem)', fontWeight: 800, display: 'block',
      background: 'linear-gradient(135deg,#fff,#2997ff)',
      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
    }}>
      {val}{sfx}
    </span>
  )
}

export default function Stats() {
  return (
    <div style={{
      background: 'var(--surface)',
      borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)',
      padding: '3.5rem 6%', display: 'flex', justifyContent: 'center',
      gap: 'clamp(2rem,5vw,7rem)', flexWrap: 'wrap',
    }}>
      {STATS.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ delay: i * .08, duration: .6, ease: [.25,.1,.25,1] }}
          style={{ textAlign: 'center' }}
        >
          <Counter to={s.to} sfx={s.sfx} />
          <div style={{ fontSize: '.78rem', color: 'var(--muted)', marginTop: '.25rem', letterSpacing: '.02em' }}>
            {s.label}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
