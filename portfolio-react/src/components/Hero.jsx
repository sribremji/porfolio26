import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const PILLS = [
  { label: 'Java 8 / 11 / 17', style: { borderColor: 'rgba(255,159,10,.4)', color: 'var(--accent3)', background: 'rgba(255,159,10,.07)' } },
  { label: 'AWS Certified ×3', style: { borderColor: 'rgba(10,132,255,.4)', color: 'var(--accent)', background: 'rgba(10,132,255,.07)' } },
  { label: 'DevOps · GitOps · IaC', style: { borderColor: 'rgba(48,209,88,.4)', color: 'var(--accent2)', background: 'rgba(48,209,88,.07)' } },
  { label: 'Puducherry → Europe', style: { borderColor: 'rgba(191,90,242,.4)', color: '#bf5af2', background: 'rgba(191,90,242,.07)' } },
]

const spring = { type: 'spring', stiffness: 60, damping: 18 }

export default function Hero() {
  const canvasRef = useRef(null)
  const heroRef = useRef(null)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, -120])
  const opacity = useTransform(scrollY, [0, 400], [1, 0])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let W, H, pts = [], raf

    const resize = () => {
      W = canvas.width = canvas.offsetWidth
      H = canvas.height = canvas.offsetHeight
    }
    window.addEventListener('resize', resize)
    resize()

    class P {
      reset() {
        this.x = Math.random() * W
        this.y = Math.random() * H
        this.vx = (Math.random() - .5) * .35
        this.vy = (Math.random() - .5) * .35
        this.r = Math.random() * 1.4 + .5
        this.a = Math.random() * .35 + .08
      }
      constructor() { this.reset() }
      update() {
        this.x += this.vx; this.y += this.vy
        if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset()
      }
      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(10,132,255,${this.a})`
        ctx.fill()
      }
    }

    for (let i = 0; i < 90; i++) pts.push(new P())

    const frame = () => {
      ctx.clearRect(0, 0, W, H)
      for (let i = 0; i < pts.length; i++) {
        pts[i].update(); pts[i].draw()
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < 130) {
            ctx.beginPath()
            ctx.moveTo(pts[i].x, pts[i].y)
            ctx.lineTo(pts[j].x, pts[j].y)
            ctx.strokeStyle = `rgba(10,132,255,${.07 * (1 - d / 130)})`
            ctx.lineWidth = .5
            ctx.stroke()
          }
        }
      }
      raf = requestAnimationFrame(frame)
    }
    frame()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section
      ref={heroRef}
      id="hero"
      style={{
        minHeight: '100vh', display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', textAlign: 'center',
        position: 'relative', overflow: 'hidden', padding: '5rem 6% 4rem',
      }}
    >
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }} />

      {/* Glow orbs */}
      <div style={{ position: 'absolute', width: 700, height: 700, borderRadius: '50%', background: '#0a84ff', filter: 'blur(140px)', opacity: .1, top: -280, left: -180, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', background: '#30d158', filter: 'blur(130px)', opacity: .08, bottom: -150, right: -80, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', width: 400, height: 400, borderRadius: '50%', background: '#bf5af2', filter: 'blur(130px)', opacity: .06, top: '40%', left: '60%', pointerEvents: 'none' }} />

      <motion.div style={{ y, opacity, position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .3, duration: .55, ease: 'easeOut' }}
          style={{
            fontSize: '.75rem', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase',
            color: 'var(--accent)', border: '1px solid rgba(10,132,255,.3)',
            padding: '.35rem 1rem', borderRadius: 980, background: 'rgba(10,132,255,.08)',
            display: 'inline-flex', marginBottom: '1.2rem',
          }}
        >
          Senior Software Engineer · 9+ Years
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .5, ...spring }}
          style={{
            fontSize: 'clamp(3rem,9vw,7.5rem)', fontWeight: 800, letterSpacing: '-.03em', lineHeight: 1.02,
            background: 'linear-gradient(140deg, #fff 40%, #2997ff 75%, #30d158 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            marginBottom: '.3em',
          }}
        >
          Sribremji<br />Mathiyalagan
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .75, duration: .65, ease: 'easeOut' }}
          style={{ fontSize: 'clamp(1rem,2.4vw,1.4rem)', color: 'var(--muted)', lineHeight: 1.5, maxWidth: 640 }}
        >
          <strong style={{ color: 'var(--text)' }}>Java · Spring Boot · Microservices</strong>
          {' '}|{' '}
          AWS Cloud-Native · Kubernetes · DevOps
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .95, duration: .5 }}
          style={{ display: 'flex', gap: '.6rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '1.4rem' }}
        >
          {PILLS.map(p => (
            <span key={p.label} style={{
              fontSize: '.72rem', fontWeight: 600, padding: '.3rem .9rem',
              borderRadius: 980, border: '1px solid', ...p.style,
            }}>
              {p.label}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: .6, ease: 'easeOut' }}
          style={{ display: 'flex', gap: '.8rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '2rem' }}
        >
          <a href="#contact" className="btn btn-primary">Get in Touch</a>
          <a href="#experience" className="btn btn-ghost">View Work</a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: .5 }}
        style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.4rem' }}
      >
        <motion.div
          animate={{ scaleY: [1, .6, 1], opacity: [.3, 1, .3] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ width: 1, height: 44, background: 'linear-gradient(to bottom, var(--muted), transparent)' }}
        />
        <span style={{ fontSize: '.65rem', color: 'var(--dim)', letterSpacing: '.1em', textTransform: 'uppercase' }}>Scroll</span>
      </motion.div>
    </section>
  )
}
