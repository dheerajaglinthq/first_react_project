import logo from "../../../image/logo.png";

import "./index.css";
function Navbar() {
  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <img src={logo} />
        </div>

        <div className="nav">
          <NavItem itemName={"Home"} />
          <NavItem itemName={"Why"} />
          <NavItem itemName={"Clients"} />
          <NavItem itemName={"About"} />
          <NavItem itemName={"Blog"} />
          <ContactButton text={"Contact Us"} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;

function NavItem({ itemName }) {
  return (
    <div>
      <p className="nav-item">{itemName}</p>
    </div>
  );
}

function ContactButton({ text }) {
  return (
    <div className="contact-button-wrapper">
      <div>{text}</div>
    </div>
  );
}

