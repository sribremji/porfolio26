import { useEffect, useState } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#achievements', label: 'Impact' },
  { href: '#whyhire', label: 'Why Me' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [hidden, setHidden] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const prev = scrollY.getPrevious() ?? 0
    setHidden(latest > prev && latest > 80)
  })

  return (
    <motion.nav
      animate={{ y: hidden ? -60 : 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
        height: 48, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 6%',
        background: 'rgba(0,0,0,0.75)',
        backdropFilter: 'saturate(180%) blur(24px)',
        WebkitBackdropFilter: 'saturate(180%) blur(24px)',
        borderBottom: '1px solid #1c1c1e',
      }}
    >
      <span style={{ fontSize: '.88rem', fontWeight: 700, letterSpacing: '.06em' }}>
        Sribremji M.
      </span>

      <ul style={{ display: 'flex', gap: '1.8rem', listStyle: 'none' }}>
        {links.map(l => (
          <li key={l.href} style={{ display: 'flex' }}>
            <a
              href={l.href}
              style={{
                fontSize: '.8rem', color: 'var(--muted)', textDecoration: 'none',
                transition: 'color .2s',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--text)'}
              onMouseLeave={e => e.target.style.color = 'var(--muted)'}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <span style={{
        fontSize: '.7rem', fontWeight: 600, padding: '.2rem .7rem', borderRadius: 980,
        background: 'rgba(48,209,88,.12)', border: '1px solid rgba(48,209,88,.3)',
        color: 'var(--accent2)',
      }}>
        Open to Europe
      </span>
    </motion.nav>
  )
}
