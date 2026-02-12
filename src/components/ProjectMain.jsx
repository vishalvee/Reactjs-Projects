import Silver from '../assets/Silver.png'
import iPhone from '../assets/iPhone.png'
import Sweatshirt from '../assets/Sweatshirt.png'
import moon from '../assets/moon.png'
import WhiteEarth from '../assets/WhiteEarth.png'
const ProjectMain=()=>{
    return(
<>
      <div className="Gridbox">
    <div id="card1" className="card" style={{grideArea: "box1"}}>
        <img src={Silver} alt="" srcset="" />
          <p>The future of Web3 on Bitcoin</p>
      
    </div>
    <div id="card2" className="card" style={{grideArea: "box2"}}>
        <img src={iPhone} alt="" srcset="" />
        <p>Not ordinary app for not ordinary photos</p>
    </div>
    <div id="card3" className="card" style={{grideArea: "box3"}}>
          <img src={Sweatshirt} alt="" srcset="" />
          <p>May the 4th be with you</p>
    </div>
    
    <div id="card4" className="card" style={{grideArea: "box4"}}>  
        <img src={moon} alt="" srcset="" />
        <img src={WhiteEarth} alt="" id='earth' />
        <p>Forgotten Wikipedia articles</p>
    </div>
    </div>
      
</>

    );
}
export default ProjectMain




