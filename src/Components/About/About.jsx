import './About.css'
import about_profile from '../../assets/vamshi.png'
const About = () => {
  return (
    <section id='about'>

  <div className='a'>
  <h1 className='about'>About me</h1>
  <div className='aboutMe-main-container'>
  <img className='profile_image' src={about_profile} alt='profile'/>
  <div className='about-content-main-container'>
<p className='para'>Hi, I`m Katkam Vamshi krishna, a passionate MERN Stack Developer eager to build dynamic and responsive
web applications. With a strong foundation in MongoDB, Express.js, React.js, and Node.js,
I enjoy solving problems and creating seamless user experiences.
I have hands-on experience in developing full-stack web applications,
 integrating RESTful APIs, and working with databases to manage data efficiently. 
 I`m continuously learning and keeping up with the latest web technologies to enhance my skills.
  </p>
<div className="skills-main-container">
<div className='side-by-side'><p>HTML & CSS</p> <hr className='horizontal-line' style={{width: "90%"}}/></div>
<div className='side-by-side'><p>Javascript</p> <hr className='horizontal-line' style={{width: "80vw"}}/></div>
<div className='side-by-side'><p>React.js</p> <hr className='horizontal-line' style={{width: "80%"}}/></div>
<div className='side-by-side'><p>Node.js</p> <hr className='horizontal-line' style={{width: "50vw"}}/></div>
<div className='side-by-side'><p>MongoDb</p> <hr className='horizontal-line' style={{width: "70vw"}}/></div>
<div className='side-by-side'><p>My Sql</p> <hr className='horizontal-line' style={{width: "80%"}}/></div>

</div>

  </div>
  </div>
  </div>

    </section>
  )
}

export default About
