import { Container } from "./styles";
import githubIcon from "../../assets/github-icon.svg"
import externalLinkIcon from "../../assets/external-link-icon.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Portfolio(){
  return(
    <Container id="portfolio">
      <h2>My Projects</h2>

      <div className="projects">

      <ScrollAnimation animateIn="flipInX">
        <div className="project">
          <header>
          <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
          <div className="project-links">
            <a href="https://gdiac.cis.cornell.edu/showcase/gallery/somniphobia/" target="_blank" rel="noreferrer">
              <img src={externalLinkIcon} alt="Visitar site" />
            </a>
          </div>
          </header>
          <div className="body">
            <h3>Somniphobia</h3>
            <p>A platformer game that guides the player through the dream and nightmare realm. I developed this with a team as part of a game design course (CS 3152). 
            </p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>Java</li>
              <li>UI/UX</li>
              <li>Animation</li>
            </ul>
          </footer>
        </div>
      </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://vitainnovations.co/index.html#about" target="_blank" rel="noreferrer">
                <img src={externalLinkIcon} alt="Visitar site" />
              </a>
            </div>
            </header>
            <div className="body">
              <h3>VitalMask</h3>
              <p>Smart mask to read patient vitals. These are made for the ED waiting rooms of hospitals to detect issues before they become more severe. Part of a startup called Vita Innovations. 
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>C++</li>
                <li>Circuits</li>
                <li>Market Research</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://pages.github.coecis.cornell.edu/jw995/ece4760_final_project_website/introduction.html" target="_blank" rel="noreferrer">
                <img src={externalLinkIcon} alt="Visitar site" />
              </a>
            </div>
            </header>
            <div className="body">
              <h3>Mini Arcade</h3>
              <p>An etch-a-sketch interface to play classic games like pong, brick-breaker, and snake. Produced as part of ECE 4760. 
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Microcontrollers</li>
                <li>Embedded Design</li>
                <li>PID Control</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://cubmd.squarespace.com/projects" target="_blank" rel="noreferrer">
                <img src={externalLinkIcon} alt="Visitar site" />
              </a>
            </div>
            </header>
            <div className="body">
              <h3>BruxFree</h3>
              <p>Biofeedback over-the-ear monitoring device that helps reduce the severity of bruxism. Designed as part of a project team called Cornell Biomedical Device. 
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>CAD (Fusion360)</li>
                <li>Arduino</li>
                <li>EAGLE PCB</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://drive.google.com/drive/u/1/folders/1IAMtOw8TEvquCEs0r2ZbvQcV0RaJyoUf" target="_blank" rel="noreferrer">
                <img src={externalLinkIcon} alt="Visitar site" />
              </a>
            </div>
            </header>
            <div className="body">
              <h3>LoonMesh</h3>
              <p>A project to harvest water from clouds for drought-stricken areas of the world. Under the team name Helio2 as part of the Rev Ithaca Hardware Accelerator. 
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Market Research</li>
                <li>Pitching</li>
                <li>Design</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://github.com/JasonChen47/Genie" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="Visitar site" />
              </a>
            </div>
            </header>
            <div className="body">
              <h3>Genie</h3>
              <p>An app that connects innovators and market needs through a wishing interface. Still in the works ;)
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Swift</li>
                <li>Figma</li>
                <li>Backend</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>



      </div>
    </Container>
  );
}