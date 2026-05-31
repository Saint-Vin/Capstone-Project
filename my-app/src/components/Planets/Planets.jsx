import './Planets.css'

// ── PLANET DATA ──
// Same data from your JS file, now living inside React
const planetData = [
  { planet: "Mercury", distanceFromSun: 57.9,   image: "https://anurella.github.io/images/planets/mercury.webp" },
  { planet: "Venus",   distanceFromSun: 108.2,  image: "https://anurella.github.io/images/planets/venus.webp"   },
  { planet: "Earth",   distanceFromSun: 149.6,  image: "https://anurella.github.io/images/planets/earth.jpg"    },
  { planet: "Mars",    distanceFromSun: 227.9,  image: "https://anurella.github.io/images/planets/mars.webp"    },
  { planet: "Jupiter", distanceFromSun: 778.6,  image: "https://anurella.github.io/images/planets/jupiter.webp" },
  { planet: "Saturn",  distanceFromSun: 1433.5, image: "https://anurella.github.io/images/planets/saturn.webp"  },
  { planet: "Uranus",  distanceFromSun: 2872.5, image: "https://anurella.github.io/images/planets/uranus.webp"  },
  { planet: "Neptune", distanceFromSun: 4495.1, image: "https://anurella.github.io/images/planets/neptune.webp" },
  { planet: "Pluto",   distanceFromSun: 5906.4, image: "https://anurella.github.io/images/planets/pluto.webp"   }
]

// ── FORMAT DISTANCE ──
// Same function from your JS file, now a React helper function
function formatDistance(km) {
  if (km >= 1000) {
    return (km / 1000).toFixed(2) + " billion km"
  }
  return km.toFixed(1) + " million km"
}

function Planets() {
  return (
    <section className="gallery-section" id="planets">

      {/* Section Title */}
      <div className="section-title">
        <h2>Visualizing the Differences Between Planets</h2>
        <p>
          Each planet in our solar system has unique physical characteristics. 
          Visual comparisons help highlight how vastly different terrestrial 
          planets are from gas giants and ice giants.
        </p>
      </div>

      {/* Planet Grid */}
      {/* In React we use .map() instead of forEach() to loop */}
      {/* .map() goes through every planet and returns a card for each one */}
      <div className="planet-grid">
        {planetData.map((p) => (
          <div className="planet-card" key={p.planet}>
            <div
              className="planet-img"
              style={{ backgroundImage: `url('${p.image}')` }}
            ></div>
            <div className="planet-info">
              <p className="planet-name">{p.planet}</p>
              <p className="planet-distance">{formatDistance(p.distanceFromSun)}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Planets