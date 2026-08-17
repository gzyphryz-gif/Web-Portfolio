import cv from "../assets/cv/Zyphryz-Gabriel-Resume.pdf"

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <p className="hero-greeting">Hello, I am</p>
        <h1 className="hero-name">Zyphryz <br></br>Gabriel</h1>
      </div>
      <div className="hero-desc">
        <button
          className="descbut1"
          onClick={() =>
            document.getElementById("projects")?.scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          View My Work
        </button>
        <a href={cv} download>
          <button className="descbut2">
            Download CV
          </button>
        </a>
      </div>
    </section>
  )
}

export default Hero;