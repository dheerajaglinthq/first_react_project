import React from "react";

function ServiceCard({ heading, subheading, Image }) {
  return (
    <div className="ourservices-item-block">
      <img src={Image} alt="" />

      <h6 className="ourservices-block-title">{heading}</h6>

      <p className="ourservices-block-text">{subheading}</p>
    </div>
  );
}

export default ServiceCard;
