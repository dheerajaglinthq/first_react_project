import "./index.css";
import heroImage from "../../image/hero-image.png"
function HeroSection(){
    return (
    <div className ="hero"> 
        <div className="hero-left">
          <div className= "hero-left-block">
            <h1 className= "hero-heading"> A Professional Consultant you 
            can count on! </h1>
             <p className= "hero-content"> Enjoy the freedom of doing business!</p>
          </div> 
        </div>

        <div className="hero-right">
          <img src={
            heroImage
          } alt="" />

        
        </div>
    </div>
   )
  }
  export default HeroSection;