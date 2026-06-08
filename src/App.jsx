import Nav from './components/Nav'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import WhyHireMe from './components/WhyHireMe'
import Achievements from './components/Achievements'
import Certifications from './components/Certifications'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Experience />
        <WhyHireMe />
        <Achievements />
        <Certifications />
        <Contact />
      </main>
      <footer style={{
        padding: '1.8rem 6%', textAlign: 'center',
        borderTop: '1px solid var(--border)',
        fontSize: '.72rem', color: 'var(--dim)',
      }}>
        © 2025 Sribremji Mathiyalagan · Puducherry, India · Building distributed systems at scale
      </footer>
    </>
  )
}
