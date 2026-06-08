import { motion } from 'framer-motion'
import { MQ_ITEMS } from '../data'

const doubled = [...MQ_ITEMS, ...MQ_ITEMS]

export default function About() {
  return (
    <section id="about">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: .7, ease: [.25,.1,.25,1] }}
      >
        <p className="s-label">About</p>
        <h2 className="s-title">Engineering at scale.<br />Java at the core, Cloud everywhere.</h2>
      </motion.div>

      <motion.p
        className="s-sub"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ delay: .1, duration: .7, ease: [.25,.1,.25,1] }}
        style={{ marginTop: '.4rem' }}
      >
        Senior Software Engineer with 9+ years delivering{' '}
        <strong style={{ color: 'var(--text)' }}>production-grade Java microservices</strong> on AWS,
        building event-driven platforms, fintech card systems, streaming pipelines, and multi-cloud DevOps automation.
        From writing clean Spring Boot code to wiring Terraform modules and Kubernetes clusters — I own the full delivery lifecycle.
      </motion.p>

      <motion.div
        className="marquee-outer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: .2, duration: .6 }}
      >
        <div className="marquee-track">
          {doubled.map((item, i) => (
            <span key={i} className="mq-pill">{item}</span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
