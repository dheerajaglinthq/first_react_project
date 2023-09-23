import "./index.css";
import aboutimage from "../../image/aboutimage.png"

function AboutSection(){
    return(
        <div className="about-wrap">
           <div className="about-left">
              <div className="about-left-wrap">

                 <h1 className="about-hero"> How we became FinAspire</h1>
                 <p className="about-subtext"> FinAspire is being promoted by a team of finance 
                 professionals with an objective to provide value added advisory and consultancy 
                 services in the field of Accounting & Taxation, Start-up planning, Company Secretary, 
                 Legal & CFO services.
‍                 Customer centric approach of our dedicated professional team has helped carve a niche for 
                 itself in financial services arena and won confidence of its clients. Our clients are from 
                 a wide spectrum and comprise of Financial Services, Software and Information Technology, 
                 Education, Real-estate, Hospitality, e-Commerce, Engineering and Energy, Food and Beverages, 
                 Health Services etc.</p>
              </div>

           </div>
           <div className="about-right">
           <img src={aboutimage}alt=""/>
           </div>
        </div>
    )
}

export default AboutSection;