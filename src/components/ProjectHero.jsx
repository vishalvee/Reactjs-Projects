import img from '../assets/img.png'
const ProjectHero = () => {
  return (
    <>
      <main>
        <div className="topheading">
            <h1 id="the">the</h1>
            <h1 id="title">INSTRUMENT</h1>
        </div>
        <div className="topheading">
          <h1 id="title">DESIGN</h1>
          <h1 id="the">studio</h1>
        </div>
        <div id="bottom">
          <div className='op'>
            <img src={img} alt="" />
            <div className='pera'>
            <p>
            The Instrument's a fresh design studio vibing out of London. We'll
            hook you up with killer branding, turn your design dreams into
            reality, and build a dope websites.
          </p>
           <button className="bt">Work With Us
            </button>
            </div>
            
          </div>
          
          <div>
         
        </div>
        </div>
        
      </main>
    </>
  );
};
export default ProjectHero;
