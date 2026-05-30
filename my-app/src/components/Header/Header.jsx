import { useState, useEffect } from 'react'
import './Header.css'

function Header() {

  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`main-header ${scrolled ? 'scrolled' : ''}`}>
      <nav>
        <img 
          src="https://cdn-icons-png.magnific.com/512/8160/8160600.png" 
          alt="Planet Explorer Logo" 
        />
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#planets" className="nav-link">Explore Data</a>
          <a href="#contact" className="nav-link">Contact Us</a>
        </div>
        <button 
          className="hamburger" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </nav>
    </header>
  )
}

export default Header