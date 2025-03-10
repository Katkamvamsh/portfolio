import './Navbar.css'
import logo from '../../assets/logo.svg'
import { Link } from 'react-scroll';
import { useState } from 'react';

const Navbar = () => {
  const [activeTab,setActiveTb]=useState("profile")
  const onClickTab=(value)=>{
    setActiveTb(value)
  }
  const scrollToSection = () => {
    const section = document.getElementById("contact"); // Get Contact Section by id
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // Smooth Scroll
    }
  };
  const homeScrollToSection = () => {
    const section = document.getElementById("home"); // Get Contact Section by id
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // Smooth Scroll
    }
  };
  return (
    <div className='navbar-main-container'>
     <img  onClick={homeScrollToSection} src={logo} alt='logo'/>
  <ul className="nav-menu-container">
    <li> <Link onClick={() => onClickTab("profile")} className={activeTab ==="profile"?"active":"inactive"} to="home" smooth={true} duration={1000}> Profile</Link></li>
    <li><Link onClick={()=>onClickTab("about")} className={activeTab ==="about"?"active":"inactive"} to="about" smooth={true} duration={800}> About</Link></li>
    <li><Link onClick={()=>onClickTab("skills")} className={activeTab ==="skills"?"active":"inactive"}  to="skills" smooth={true} duration={800}> Skills </Link></li>
    <li><Link onClick={()=>onClickTab("projects")} className={activeTab ==="projects"?"active":"inactive"}  to="projects" smooth={true} duration={800}> Projects</Link></li>
    <li><Link onClick={()=>onClickTab("contact")} className={activeTab ==="contact"?"active":"inactive"}  to="contact" smooth={true} duration={800}> Contact</Link></li>
  </ul>
 
<div className='connect' onClick={scrollToSection} > Connect with me </div>
</div>
  )
}

export default Navbar
