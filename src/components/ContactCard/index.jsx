const ContactCard = ({ src, heading, subheading }) => {
  return (
    <div>
      <img src={src} alt="" />
      <div>{heading}</div>
      <div>{subheading}</div>
    </div>
  );
};

export default ContactCard;
