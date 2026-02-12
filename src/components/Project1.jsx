
import Footer from "./Footer"
import ProjectHero from "./ProjectHero"
import ProjectMain from "./ProjectMain"
import Promotion from "./Promotion"

const Project=()=>{
    return(
      <>
      <nav>
                <ul>
                    <li><a href="#">Work</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul> 
      </nav>
      <ProjectHero/>
      <ProjectMain/>

      <Promotion/>

      <Footer/>
      </>
    )
}
export default Project