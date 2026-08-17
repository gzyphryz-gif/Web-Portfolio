function About() {
  
  return (
    <section id="about" className="section">
      <div>
        <h2 className="about-header">About Me</h2>
        <p className="about-intro">
          I am an aspiring tech professional based in Manila, deeply passionate about AI and 
          modern technology. As a fast learner who loves exploring new tools, I thrive on building 
          innovative solutions and tackling fresh challenges.
        </p>
      </div>

      <div className="abcontainer">
        {/* Left Column: Education + Core Subjects stacked */}
        <div className="abbox">
          <div>
            <h3 className="absubtitle">Education</h3>
            <p className="abinfo">
              <strong>Technological Institute of the Philippines (2022 - 2026)</strong><br />
              • Bachelor of Science in Computer Science <br />
              • GWA: 1.8
            </p>
          </div>

          <div>
            <h3 className="absubtitle">Relevant Course Work</h3>
            <p className="abinfo">
              • Software Engineering <br />
              • Intelligent Agents <br />
              • Machine Learning <br />
              • Big Data Analytics 
            </p>
          </div>
        </div>

        {/* Right Column: Skills */}
        <div className="abbox">
          <div>
            <h3 className="absubtitle">Skills</h3>
            <p className="abinfo">
              • Java & Python Programming <br />
              • Object Oriented Programming<br />
              • PowerAutomate <br />
              • React | CSS 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;