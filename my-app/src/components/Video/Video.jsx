import { useState, useRef } from 'react'
import SolarVideo from '../../assets/solar-video.mp4'
import './Video.css'

function Video() {

  // JS FEATURE 1 — Track if video is playing or paused
  const [isPlaying, setIsPlaying] = useState(false)

  // JS FEATURE 2 — useRef points directly at the video element
  const videoRef = useRef(null)

  // JS FEATURE 3 — Play or pause when button is clicked
  const handlePlayPause = () => {
    const video = videoRef.current

    if (isPlaying) {
      video.pause()
      setIsPlaying(false)
    } else {
      video.play()
      setIsPlaying(true)
    }
  }

  return (
    <section className="video-section">

      {/* LEFT SIDE — Video Box */}
      <div className="video-box">
        <video
          ref={videoRef}
          className="video-player"

          loop
          playsInline
        >
          <source src={SolarVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Play/Pause Button Overlay */}
        <button
          className={`play-btn ${isPlaying ? 'playing' : ''}`}
          onClick={handlePlayPause}
        >
          {isPlaying ? '⏸' : '▶'}
        </button>

        {/* Volume Slider */}
        <input
          className="volume-slider"
          type="range"
          min="0"
          max="1"
          step="0.1"
          defaultValue="1"
          onChange={(e) => {
            videoRef.current.volume = e.target.value
          }}
        />

      </div>

      {/* RIGHT SIDE — Text */}
      <div className="video-text">
        <h2>How Planetary Data Helps Us Understand Space</h2>
        <p>
          Planetary science goes beyond images. Comparing{' '}
          <strong>mass, diameter, gravity,</strong> and{' '}
          <strong>density</strong>, we gain insight into how planets form,
          behave, and interact within the solar system.
        </p>
      </div>

    </section>
  )
}

export default Video