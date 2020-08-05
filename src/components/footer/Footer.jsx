import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  let date = new Date();
  const currentYear = date.getFullYear();
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>Developers</h3>
            <hr />
            <h5>Barel Musenga</h5>
            <p>contact: barel@bmlcenter.com</p>
            <h5>William Ntumba</h5>
            <h5>Shemouel Mwambi</h5>
          </div>
          <div className="col-md-6">
            <h3>Resources</h3>
            <hr />
            <h5>
              <Link className="nav-item nav-link" to="/github" target="_blank">
                GitHub
              </Link>
            </h5>
          </div>
        </div>
        <hr />
        <p className="text-center">Copyright &copy; {currentYear}</p>
      </div>
    </div>
  );
};

export default Footer;
