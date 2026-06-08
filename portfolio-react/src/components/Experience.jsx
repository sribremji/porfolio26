import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { EXPERIENCE } from '../data'

function FlowChain({ chain, color }) {
  return (
    <div className="flow-chain">
      {chain.map((node, i) => (
        <span key={i}>
          {i > 0 && <span className="flow-arrow"> › </span>}
          <span className="flow-node">{node}</span>
        </span>
      ))}
    </div>
  )
}

function TimelineItem({ exp, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -28 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * .05, duration: .65, ease: [.25,.1,.25,1] }}
      style={{ position: 'relative', paddingLeft: '2.5rem', paddingBottom: '4rem' }}
    >
      {/* Dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * .05 + .2, type: 'spring', stiffness: 200 }}
        style={{
          position: 'absolute', left: -5, top: '.6rem',
          width: 11, height: 11, borderRadius: '50%',
          background: exp.color, border: '2px solid var(--bg)',
          boxShadow: `0 0 12px ${exp.color}`,
        }}
      />

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '.4rem', marginBottom: '.6rem' }}>
        <div>
          <div style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '.35rem' }}>{exp.role}</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem', flexWrap: 'wrap' }}>
            <span style={{
              fontSize: '.78rem', fontWeight: 700, padding: '.2rem .65rem', borderRadius: 6,
              color: exp.color, border: `1px solid ${exp.color}44`, background: `${exp.color}12`,
            }}>
              {exp.company}
            </span>
            <span style={{ fontSize: '.72rem', color: 'var(--muted)' }}>{exp.domain}</span>
          </div>
        </div>
        <span style={{ fontSize: '.75rem', color: 'var(--muted)', paddingTop: '.1rem', whiteSpace: 'nowrap' }}>
          {exp.date}
        </span>
      </div>

      {/* Flow diagram */}
      <div className="flow-box">
        <div className="flow-title">{exp.flow.title}</div>
        <FlowChain chain={exp.flow.chain} color={exp.color} />
      </div>

      {/* Bullets */}
      <ul style={{ listStyle: 'none', marginTop: '.8rem' }}>
        {exp.bullets.map((b, i) => (
          <li key={i} style={{ fontSize: '.85rem', color: 'var(--muted)', lineHeight: 1.65, padding: '.28rem 0 .28rem 1.3rem', position: 'relative' }}>
            <span style={{ position: 'absolute', left: 0, color: exp.color, fontWeight: 700 }}>›</span>
            {b}
          </li>
        ))}
      </ul>

      {/* Chips */}
      <div style={{ display: 'flex', gap: '.4rem', flexWrap: 'wrap', marginTop: '.9rem' }}>
        {exp.chips.map(c => (
          <span key={c} className="chip" style={{ color: exp.color, background: `${exp.color}12`, borderColor: `${exp.color}44` }}>
            {c}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const lineRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: lineRef, offset: ['start 80%', 'end 20%'] })
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section id="experience">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: .7, ease: [.25,.1,.25,1] }}
      >
        <p className="s-label">Experience</p>
        <h2 className="s-title">Where I built things that matter.</h2>
      </motion.div>

      <div
        ref={lineRef}
        style={{ marginTop: '3.5rem', position: 'relative', paddingLeft: '1.5rem' }}
      >
        {/* Animated vertical line */}
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 1, background: 'var(--border)', overflow: 'hidden' }}>
          <motion.div
            style={{
              width: '100%', height: '100%', originY: 0, scaleY,
              background: 'linear-gradient(to bottom, var(--accent), var(--accent4), transparent)',
            }}
          />
        </div>

        {EXPERIENCE.map((exp, i) => (
          <TimelineItem key={exp.company} exp={exp} index={i} />
        ))}
      </div>
    </section>
  )
}
