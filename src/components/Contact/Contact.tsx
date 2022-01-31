import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Get in contact with me</h2>
        <p>If you want to work on something together or just talk, feel free to get in touch!</p>
      </header>
      <div className="contacts">
        <div>
          <img src={emailIcon} alt="Email" />
          <a href="mailto:chen.jason.w@gmail.com">chen.jason.w@gmail.com</a>
        </div>
        <div>
          <img src={phoneIcon} alt="Email" />
          <a href="tel:+19043158352">(904) 315-8352</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}