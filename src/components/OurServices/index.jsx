import "./index.css";
import ServiceCard from "../ServicesCard";
import Accounting from "../../image/Service-images/Accounting.svg";
import Advisory from "../../image/Service-images/Advisory.svg";
import Company from "../../image/Service-images/Company.svg";
import Frame from "../../image/Service-images/Frame.svg";
import tax from "../../image/Service-images/tax.svg";
import Legal from "../../image/Service-images/Legal.svg";



function OurServices() {
  return (
    <div className="ourservices-main-wrap">
      <ServiceHeader />
      <div className="ourservices-grid">
        {allServices.map((item, index) => {
          return (
            <ServiceCard
              key={index}
              heading={item.heading}
              subheading={item.subheading}
              Image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
}
export default OurServices;

function ServiceHeader() {
  return (
    <div className="ourservices-top">
      <p className="sub-title"> Our Services </p>
      <div className="spacer-24px"></div>
      <h1 className="services-heading"> What we can do for you </h1>
      <div className="Spacer-16px"></div>
      <p className="services-content">
        {" "}
        We provide our customers with services that can make them concertrate on
        their business and let their
      </p>
    </div>
  );
}




const allServices = [
  {
    heading: "Accounting",
    subheading:
      "Our accounting and bookkeeping services are designed to help Startups  and SMEs do what's important to them - focus on their business.",
    image: Accounting,
  },
  {
    heading: "Taxation Service",
    subheading:
      "We offer a wide variety of tax services ranging from tax return preparation to complex tax planning strategies.",
    image: tax,
  },
  {
    heading: "advisory Service",
    subheading:
      "We offer you the most reliable and tailor-made legal and compliance solutions.",
    image: Advisory,
  },
  {
    heading: "company secretarial Service",
    subheading:
      "Starting a brand-new company from the ground up isn't an easy task. We offer you an effortless start and assist where necessary.",
    image: Company,
  },

  {
    heading: "virtual cfo Service",
    subheading:
      "Our CFO services will help you navigate accounting complexities with ease, freeing up time to focus on your business.",
    image: Frame,
  },
  {
    heading: "legal and due diligence Service",
    subheading:
      "Get a legal advice and services for all of your business concerns from our expertises who are always ready to help.",
    image: Legal,
  },
];
