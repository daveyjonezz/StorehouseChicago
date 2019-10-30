import React from "react";
import "./style.css";
import "./style.scss";

function Footer(props) {
  return (
    <footer className="jumbotron">
      <h5 style={{ marginTop: "10px", marginBottom: "20px" }}>Connect with us!</h5>
      <form className="form" action="/api/email" method="POST">
        <label htmlFor="email"></label>
        <input type="email" className="form__field" placeholder="Email Address" name="email" required value={props.stateEmail} onChange={props.onChange}/>
        <button type="submit" onClick={props.onClick} className="btn btn--primary btn--inside uppercase">Send</button>
      </form>
      <h6 style={{ marginTop: "15px", marginBottom: "0"}}>EST. 2019</h6>
      <span><img style={{ width: "65px", height: "50px" }} alt="Nav Bar Logo" src="/images/TheStoreHouse_Branding/Logomark/PNG/NavBarLogo.png" /></span>
    </footer>
  );
};

export default Footer;
