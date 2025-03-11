import './Footer.css'
import whatsapp from '../../assets/whatsapp.svg' 
import instagram from '../../assets/instagram.svg' 
import twitter from '../../assets/twitter.svg' 
import discord from '../../assets/discord.svg' 
import telegram from '../../assets/telegram.svg' 
import gmail from '../../assets/gmail.svg' 
import github from '../../assets/github.svg' 

const Footer = () => {
  return ( <div id='contactsocialmedia'>
    <div className="footer-main-container">
      <h1>Let`s connect </h1>
      <p className='footer-para'>I am  <span className='span'> Katkam Vamshi krishna</span>  a Mern Stack Web Developer you  can contact for make a Website for your business expands, that can make your clients easy access & they will know about your services and offers  </p>
      </div>
     <div className='connect-container'>
     <h1 className='footer-heading'>Stay connect with me</h1>
      <div className='all-icons-container'>
      <div className="each-icon-container">
  <a href="https://wa.me/918886669589" target="_blank" rel="noopener noreferrer">
    <img src={whatsapp} alt="WhatsApp" />
  </a> 
  <p>Whatsapp</p>
</div>

<div className="each-icon-container">
  <a href="https://www.instagram.com/katkam_vamshi_krishna/" target="_blank" rel="noopener noreferrer">
    <img src={instagram} alt="Instagram" />
  </a>
  <p>Instagram</p>
</div>

  <div className='each-icon-container'>
<img src={twitter} alt="" />
<p>Twitter</p>
  </div>
  <div className="each-icon-container">
  <a href="https://discord.gg/https://discord.gg/dKv7ps5J" target="_blank" rel="noopener noreferrer">
    <img src={discord} alt="Discord" />
  </a>
  <p>Discord</p>
</div>

  <div className="each-icon-container">
  <a href="mailto:katkamvamshisde@gmail.com">
    <img src={gmail} alt="Gmail" />
  </a>
  <p>Gmail</p>
</div>
 <div className="each-icon-container">
  <a href="https://t.me/Katkamvamshikrishna" target="_blank" rel="noopener noreferrer">
    <img src={telegram} alt="Telegram" />
  </a>
  <p>Telegram</p>
</div>
<div className="each-icon-container">
  <a href="https://t.me/Katkamvamshikrishna" target="_blank" rel="noopener noreferrer">
    <img src={github} alt="Telegram" />
  </a>
  <p>GitHub</p>
</div>

  
      </div>
     </div>
    <div className="footer">
      &copy; 2025 All rights reserved by Katkam Vamshi krishna 
    </div>
    </div>
  )
}

export default Footer
