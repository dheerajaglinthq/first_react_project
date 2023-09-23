import "./index.css";
import whyimage from "../../image/whyimage.png";
function WhySection(){
    return (
    <div className ="Why"> 
      <div className="why-left">
        <img src={whyimage}alt=""/>
      </div>
      <div className="why-right">
        <div className= "why-right-block">
            <h1 className= "why-heading">Why FinAspire?</h1>
            <p className= "why-content"> FinAspire provides you with cost-effective solutions in
              Start-up formation, Fintech Consulting, Assurance, Taxation and related matters. We help 
              our clients capitalize on transformative opportunities. We help you with a customized 
              and flexible package for outsourced accounting and taxation, Company Secretarial, Virtual 
              CFO and Legal services. Since our services are customized according to the needs of the 
              customers, you can achieve your desired goals. Whether you’re an aspiring entrepreneur 
              looking to set up your entity or a business owner seeking out for some good Business Advice, 
              we’re your best choice.</p>
        </div> 
      </div>
    </div>  
)}

export default WhySection;
