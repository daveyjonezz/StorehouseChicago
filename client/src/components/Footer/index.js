import React from "react";
// import { Input, FormBtn } from "../Form";
import "./style.css";

const Footer = props => {
  return (
    <footer className="jumbotron">
    <h5 style={{ marginTop:"10px"}}>Connect with us!</h5>
      {/* <div>
      <span><img width="65" height="100%" alt="Nav Bar Logo" src="/images/TheStoreHouse_Branding/Logomark/PNG/NavBarLogo.png" /></span>
        <span id="titleStore">The Storehouse</span> |{" "}
        <span id="titleCity">CHICAGO</span>
      </div> */}

      {/* <form className="form-inline" action="/api/email" method="POST">
        <div className="form-group">
          <label htmlFor="email"></label>
          <input type="email" className="form-control" id="email" placeholder="Email Please"></input>
        </div>
        <button
          type="submit"
          onClick={props.onClick}
          className="btn sendIt"
        ><i className="fa fa-share" aria-hidden="true"></i>
        </button>
      </form> */}
      <h6 style={{ marginTop:"10px", marginBottom:"0"}}>EST. 2019</h6>
      <span><img style={{ width:"65px", height:"100%"}} alt="Nav Bar Logo" src="/images/TheStoreHouse_Branding/Logomark/PNG/NavBarLogo.png" /></span>
    </footer>
  );
};

export default Footer;
