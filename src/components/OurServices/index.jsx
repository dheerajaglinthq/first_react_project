import "./index.css";
import Accounting from "../../image/Service-images/Accounting.svg"

function OurServices() {
    return (
      <div className="ourservices-main-wrap">
        <div className="ourservices-top">
        <p className= "sub-title"> Our Services </p> 
        <div className="spacer-24px"></div>  
        <h1 className= "services-heading"> What we can do for you </h1>
        <div className="Spacer-16px"></div>
        <p className= "services-content"> We provide our customers with services that can make them 
        concertrate on their business and let their</p>
        </div>
        <div className="ourservices-grid">
            <div className="ourservices-item-block">
              <img src={ Accounting } alt="" />
              
              <h6 className="ourservices-block-title">Accounting</h6>
        
              <p className="ourservices-block-text">Our accounting and bookkeeping 
              services are designed to help Startups and SMEs do what's important to 
              them - focus on their business.</p>
            </div>
            <div className="ourservices-item-block">
              <img src={ Accounting } alt="" />
              
              <h6 className="ourservices-block-title">Accounting</h6>
          
              <p className="ourservices-block-text">Our accounting and bookkeeping 
              services are designed to help Startups and SMEs do what's important to 
              them - focus on their business.</p>
            </div> <div className="ourservices-item-block">
              <img src={ Accounting } alt="" />
            
              <h6 className="ourservices-block-title">Accounting</h6>
              
              <p className="ourservices-block-text">Our accounting and bookkeeping 
              services are designed to help Startups and SMEs do what's important to 
              them - focus on their business.</p>
            </div> <div className="ourservices-item-block">
              <img src={ Accounting } alt="" />
              
              <h6 className="ourservices-block-title">Accounting</h6>
             
              <p className="ourservices-block-text">Our accounting and bookkeeping 
              services are designed to help Startups and SMEs do what's important to 
              them - focus on their business.</p>
            </div> <div className="ourservices-item-block">
              <img src={ Accounting } alt="" />
              
              <h6 className="ourservices-block-title">Accounting</h6>
              
              <p className="ourservices-block-text">Our accounting and bookkeeping 
              services are designed to help Startups and SMEs do what's important to 
              them - focus on their business.</p>
            </div> <div className="ourservices-item-block">
              <img src={ Accounting } alt="" />
              
              <h6 className="ourservices-block-title">Accounting</h6>
              
              <p className="ourservices-block-text">Our accounting and bookkeeping 
              services are designed to help Startups and SMEs do what's important to 
              them - focus on their business.</p>
            </div>
        </div>
      </div>
)
}
export default OurServices;
