import React, { useEffect, useRef } from 'react'
import { Spline } from '@splinetool/react-spline'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Menu, ArrowRight, Mail, Instagram, Linkedin, Phone, Palette, Star } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './index.css'

gsap.registerPlugin(ScrollTrigger)

const Section = ({ id, children, className = '' }) => {
  return (
    <section id={id} className={`min-h-screen w-full relative ${className}`}>
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_10%,rgba(99,102,241,0.15),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(56,189,248,0.12),transparent_35%),radial-gradient(circle_at_50%_90%,rgba(34,197,94,0.12),transparent_35%)]" />
      <div className="relative z-10">{children}</div>
    </section>
  )
}

function Nav() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50 bg-slate-900/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="text-white font-bold text-lg tracking-tight flex items-center gap-2">
          <Palette className="w-5 h-5 text-indigo-400" /> BrandCraft
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-200">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#gallery" className="hover:text-white transition-colors">Gallery</a>
          <a href="#cta" className="hover:text-white transition-colors">Services</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>
        <button className="md:hidden text-slate-200 hover:text-white"><Menu /></button>
      </div>
    </div>
  )
}

function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-heading',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.1, ease: 'power3.out', delay: 0.2 }
      )
      gsap.fromTo(
        '.hero-sub',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.1, ease: 'power3.out', delay: 0.35 }
      )
      gsap.fromTo(
        '.hero-cta',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.1, ease: 'power3.out', delay: 0.5 }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <Section id="hero" className="grid lg:grid-cols-2 gap-6 items-center">
      <div ref={containerRef} className="px-6 pt-28 pb-10 lg:pt-36">
        <p className="text-indigo-300/80 text-sm tracking-widest uppercase mb-4">Brand Designer • Visual Identity • Motion</p>
        <h1 className="hero-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
          Designing brands that move people
        </h1>
        <p className="hero-sub mt-6 text-lg text-slate-300 max-w-xl">
          I craft playful, modern identities and immersive visuals for tech-forward companies. Let’s make your brand unforgettable.
        </p>
        <div className="hero-cta mt-8 flex items-center gap-4">
          <a href="#gallery" className="inline-flex items-center gap-2 bg-white text-slate-900 font-semibold px-5 py-3 rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-all">
            See work <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 border border-white/20 text-white px-5 py-3 rounded-lg hover:bg-white/10 transition-all">
            Get in touch
          </a>
        </div>
      </div>
      <div className="h-[60vh] lg:h-[85vh] relative">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" className="absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />
      </div>
    </Section>
  )
}

function About() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: 'top 75%',
        end: 'bottom 60%',
        toggleActions: 'play none none reverse'
      }
    })
    tl.from(el.querySelectorAll('.fade-up'), { y: 40, opacity: 0, stagger: 0.15, duration: 0.8, ease: 'power3.out' })
    return () => tl.kill()
  }, [])

  return (
    <Section id="about" className="bg-slate-900/40">
      <div ref={ref} className="max-w-6xl mx-auto px-6 py-24 sm:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="fade-up text-3xl sm:text-4xl font-bold text-white">Playful strategy. Serious craft.</h2>
            <p className="fade-up mt-6 text-slate-300 leading-relaxed">
              I bring a motion-first mindset to brand systems—meaning every logo, color, and shape is designed to feel alive across screens, products, and experiences.
            </p>
            <ul className="fade-up mt-8 grid sm:grid-cols-2 gap-4 text-slate-200">
              <li className="bg-white/5 border border-white/10 rounded-xl p-4">Visual Identity</li>
              <li className="bg-white/5 border border-white/10 rounded-xl p-4">Art Direction</li>
              <li className="bg-white/5 border border-white/10 rounded-xl p-4">Motion & Interactions</li>
              <li className="bg-white/5 border border-white/10 rounded-xl p-4">Web & Social Design</li>
            </ul>
          </div>
          <div className="grid gap-4 md:gap-6">
            <div className="fade-up aspect-[16/10] rounded-2xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 border border-white/10" />
            <div className="fade-up aspect-[16/10] rounded-2xl bg-gradient-to-br from-emerald-400/20 to-indigo-500/20 border border-white/10" />
            <div className="fade-up aspect-[16/10] rounded-2xl bg-gradient-to-br from-pink-500/20 to-indigo-500/20 border border-white/10" />
          </div>
        </div>
      </div>
    </Section>
  )
}

function Gallery() {
  const gridRef = useRef(null)
  useEffect(() => {
    const mm = gsap.matchMedia()
    mm.add('(min-width: 768px)', () => {
      const cards = gridRef.current.querySelectorAll('.card')
      cards.forEach((card, i) => {
        gsap.fromTo(card, { y: 40, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', delay: i * 0.08,
          scrollTrigger: { trigger: card, start: 'top 85%' }
        })
      })
    })
    return () => mm.kill()
  }, [])

  const works = Array.from({ length: 8 }).map((_, i) => ({
    title: `Project ${i + 1}`,
    tag: i % 2 === 0 ? 'Identity' : 'Motion',
    color: i % 3 === 0 ? 'from-indigo-500/20 to-cyan-500/20' : i % 3 === 1 ? 'from-pink-500/20 to-violet-500/20' : 'from-emerald-400/20 to-teal-400/20'
  }))

  return (
    <Section id="gallery">
      <div className="max-w-7xl mx-auto px-6 py-24 sm:py-28">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Selected Work</h2>
          <p className="mt-3 text-slate-300">A mix of identity systems, motion studies, and playful brand worlds.</p>
        </div>
        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((w, idx) => (
            <div key={idx} className="card group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10">
              <div className={`aspect-[4/3] bg-gradient-to-br ${w.color}`} />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-black/20 transition-opacity" />
              <div className="p-4 flex items-center justify-between">
                <div>
                  <p className="text-white font-semibold">{w.title}</p>
                  <p className="text-xs text-slate-400">{w.tag}</p>
                </div>
                <Star className="w-4 h-4 text-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

function CTA() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    gsap.fromTo(el, { scale: 0.98, opacity: 0 }, {
      scale: 1, opacity: 1, duration: 0.9, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 80%' }
    })
  }, [])
  return (
    <Section id="cta" className="bg-gradient-to-br from-indigo-600/20 via-cyan-500/10 to-emerald-400/10">
      <div ref={ref} className="max-w-5xl mx-auto px-6 py-24 sm:py-28 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Let’s build a brand with real momentum</h2>
        <p className="mt-4 text-slate-300 max-w-2xl mx-auto">Strategy, identity, and motion design packaged for startups and creative teams.</p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="#contact" className="inline-flex items-center gap-2 bg-white text-slate-900 font-semibold px-6 py-3 rounded-lg shadow hover:-translate-y-0.5 transition-all">
            Book a call <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#gallery" className="inline-flex items-center gap-2 border border-white/20 text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-all">
            View work
          </a>
        </div>
      </div>
    </Section>
  )
}

function Contact() {
  const formRef = useRef(null)
  useEffect(() => {
    const el = formRef.current
    const inputs = el.querySelectorAll('input, textarea')
    gsap.fromTo(inputs, { y: 20, opacity: 0 }, {
      y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', stagger: 0.1,
      scrollTrigger: { trigger: el, start: 'top 85%' }
    })
  }, [])
  return (
    <Section id="contact" className="bg-slate-900/40">
      <div className="max-w-4xl mx-auto px-6 py-24 sm:py-28">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">Contact</h2>
        <p className="text-slate-300 mb-8">Tell me a little about your project and timeline.</p>
        <form ref={formRef} onSubmit={(e)=> e.preventDefault()} className="grid gap-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input placeholder="Your name" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/50" />
            <input placeholder="Email" type="email" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/50" />
          </div>
          <input placeholder="Company / Brand" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/50" />
          <textarea placeholder="Project details" rows={5} className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/50" />
          <button className="mt-2 inline-flex items-center gap-2 bg-white text-slate-900 font-semibold px-6 py-3 rounded-lg shadow hover:-translate-y-0.5 transition-all w-max">
            Send inquiry <Mail className="w-4 h-4" />
          </button>
        </form>

        <div className="mt-10 flex items-center gap-6 text-slate-300">
          <a href="mailto:hello@brandcraft.studio" className="inline-flex items-center gap-2 hover:text-white"><Mail className="w-4 h-4"/> hello@brandcraft.studio</a>
          <a href="#" className="inline-flex items-center gap-2 hover:text-white"><Instagram className="w-4 h-4"/> Instagram</a>
          <a href="#" className="inline-flex items-center gap-2 hover:text-white"><Linkedin className="w-4 h-4"/> LinkedIn</a>
          <span className="inline-flex items-center gap-2"><Phone className="w-4 h-4"/> +1 (555) 123‑4567</span>
        </div>
      </div>
    </Section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-400 text-sm">© {new Date().getFullYear()} BrandCraft Studio. All rights reserved.</p>
        <div className="flex items-center gap-4 text-slate-300 text-sm">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#gallery" className="hover:text-white">Work</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  // subtle scroll progress bar
  const { scrollYProgress } = useScroll()
  const width = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative">
      <motion.div style={{ width }} className="fixed top-0 left-0 h-1 bg-gradient-to-r from-indigo-400 via-cyan-300 to-emerald-300 z-50" />
      <Nav />
      <Hero />
      <About />
      <Gallery />
      <CTA />
      <Contact />
      <Footer />
    </div>
  )
}
