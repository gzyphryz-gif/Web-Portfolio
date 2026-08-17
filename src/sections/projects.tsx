import thesisImage from "../assets/images/Thesis.jpg";
import nrossImage from "../assets/images/nross.jpg";
import zarecipeImage from "../assets/images/zarecipe.jpg";

function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="proj-main-heading">Projects</h2>

      <div className="proj-container">
        
        {/* Project 1 */}
        <div className="project-item">
          <div className="project-text-side">
            <h3>Thesis (2025-2026)</h3>
            <p className="proj-info">
              We trained and curated a YOLOv8 model using a dataset we gathered to correctly identify and classify Filipino multi-dishes 
              where multiple dishes are inside one plate. We annotated the images so that the model can easily process them when 
              fed into training, which serves as a guide for accurate prediction and classification on new images.
            </p>
          </div>
          {/* Add your project screenshot path inside src */}
          <img src={thesisImage} className="proj-img" alt="Thesis Project Preview" />
        </div>

        {/* Project 2 */}
        <div className="project-item">
          <div className="project-text-side">
            <h3>NRoSS Token Tracking System (2026)</h3>
            <p className="proj-info">
              During my Internship at Bureau of the Treasury me and my colleague were assigned to make a tracking system
              for the National Registry Of Scripless Securities (NRoSS) ussing SharePoint and PowerAutomate, my colleague and I created a SharePoint portal that 
              allows certain people to create tickets so that our division can process and resolve the problem regarding the tokens bank companies use.
            </p>
          </div>
          {/* Add your project screenshot path inside src */}
          <img src={nrossImage} className="proj-img" alt="Token Tracking System Preview" />
        </div>

        {/* Project 3 */}
        <div className="project-item">
          <div className="project-text-side">
            <h3>Zarecipe (2025)</h3>
            <p className="proj-info">
              Zarecipe is a mobile application project for our course Software Engineering as well as Technopreneurship, It is basically a recipe
              browser app that is made specifically for Filipinos. It provides a lots of features such as text-to-speech and speech-to-text 
              to provide multimodal accessibility and foster inclusivity.
            </p>
          </div>
          {/* Add your project screenshot path inside src */}
          <img src={zarecipeImage} id="zarecipe" className="proj-img" alt="Zarecipe Mobile Application" />
        </div>
      </div>
    </section>
  );
}

export default Projects;