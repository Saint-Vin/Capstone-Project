import { useEffect, useRef } from 'react'
import HeroImage from '../../assets/Hero-image.png'
import './Hero.css'

function Hero() {

  // JS FEATURE 1 — Fade in when page loads
  const heroRef = useRef(null)

  useEffect(() => {
    const hero = heroRef.current
    hero.style.opacity = '0'
    hero.style.transform = 'translateY(30px)'

    setTimeout(() => {
      hero.style.transition = 'opacity 0.8s ease, transform 0.8s ease'
      hero.style.opacity = '1'
      hero.style.transform = 'translateY(0)'
    }, 100)
  }, [])

  // JS FEATURE 2 — Smooth scroll when button is clicked
  const handleExplore = () => {
    const section = document.getElementById('planets')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleContact = () => {
    const section = document.getElementById('contact')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero" ref={heroRef}>

      {/* LEFT SIDE — Text */}
      <div className="hero-text">
        <h1>Explore Our Solar System Through Data</h1>
        <p>
          Understand the planets not just by name, but by measurable facts. 
          From size and mass to gravity and density, this page breaks down 
          the solar system in a clear, data-driven way.
        </p>
        <div className="hero-buttons">
          <button className="btn-blue" onClick={handleExplore}>
            Explore the Data
          </button>
          <button className="btn-outline" onClick={handleContact}>
            Contact Us
          </button>
        </div>
      </div>

     {/* RIGHT SIDE — Hero Image */}
    <div className="hero-image">
      <img 
        src={HeroImage} 
        alt="Solar System Hero" 
        className="hero-image-img" 
      />
    </div>

    </section>
  )
}

export default Hero