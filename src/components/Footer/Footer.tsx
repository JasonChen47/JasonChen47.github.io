import { Container } from './styles'

import reactIcon from '../../assets/react-icon.svg'
import linkedinIcon from '../../assets/linkedin.png'
import githubIcon from '../../assets/github.png'
import instagramIcon from '../../assets/instagram.png'
import discordIcon from '../../assets/discord.png'

export function Footer() {
  return (
    <Container className="footer">
      <a href="/" className="logo">
        <span>J</span>
        <span>Chen</span>
      </a>
      <div>
        <p>
          Made with <span>❤️</span> by Jason. Built from JTulio <img src={reactIcon} alt="React" />.
        </p>
      </div>

      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/jason-chen-hello/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="Linkedin" />
        </a>

        <a
          href="https://github.com/JasonChen47"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>

      </div>
    </Container>
  )
}
