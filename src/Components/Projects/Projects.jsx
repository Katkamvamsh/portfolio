import { useContext } from 'react'
import projects_data from '../../assets/myProjects_data'
import './Projects.css'
import {Context} from '../../Context/Context'
const Projects = () => {
  const contextValue = useContext(Context);
  const {isMoreActive,onClickReadMore}=contextValue

  return (
    <div className="a" id='projects'>
    <h1 className='heading'>Projects</h1>
      <div className="main-container">
       {  projects_data.map((project,index)=>{
        const Active = isMoreActive[project.p_no] || false;
        const splice=project.p_description.slice(0,102)
    return <div className='projects-main-container' key={index}>
         <div className='each'>  
         <a href={project.p_link} target="_blank" rel="noopener noreferrer">
           <img className="image" src={project.p_img} alt={project.p_name} />
           </a>
            <p className='p_name'>{project.p_name} </p>
             <p className='p_description'>{Active?project.p_description:splice+" . . ."} </p>
             <button onClick={()=>onClickReadMore(project.p_no)} className='button'>{Active?"Read Less":"Read more" }</button></div>
            
         </div>

  })
}
      </div>
    </div>
  )
}

export default Projects
