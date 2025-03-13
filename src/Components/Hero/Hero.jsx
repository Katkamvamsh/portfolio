import './Hero.css'
import profile_img from '../../assets/vamshi.png'
const Hero = () => {
  const scrollToSection = () => {
    const section = document.getElementById("contact"); // Get Contact Section by id
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // Smooth Scroll
    }
  };
  return (
    <div id='home' className='hero-main-container'>
    <h1 id='heading-profile'>Profile</h1>
    <img src={profile_img} alt='vamshi' />
      <h1> <span className='name'>I`m VAMSHI KRISHNA , </span> Mern Stack Developer . </h1>
      <p>I am an Mern Stack developer actively looking for Mern Stack developer job .</p>
     <div className='btn-container'>
          <div onClick={scrollToSection} className='connect-button'>Connect with me</div>
          <a
  href="https://drive.google.com/uc?export=download&id=1cmkkdEebBRb79Y1J2Q1KrR0Da-u99YGO"
  className="resume-button"
  download="Vamshi_Krishna_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  My Resume Download
</a>
  </div>
    </div>
  )
}

export default Hero
