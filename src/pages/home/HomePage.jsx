import React from "react";
import "./HomePage.scss";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="jumbotron">
        <h1 className="title">React Native Html Tags</h1>
        <h3 className="sub-title">
          HTML Tags and Elements for your React Native Apps
        </h3>
        <div className="btn-links d-flex justify-content-between">
          <div className="btn btn-outline-light btn-lg">
            <Link to="/documentation" className="nav-item nav-link">
              Get Started
            </Link>
          </div>
          <div className="btn btn-outline-light btn-lg">
            <Link to="/documentation" className="nav-item nav-link">
              Documentation
            </Link>
          </div>
          <div className="btn btn-outline-light btn-lg">
            <Link className="nav-item nav-link" to="/github" target="_blank">
              GitHub
            </Link>
          </div>
        </div>
      </div>
      <div className="intro">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3>Platform</h3>
              <p>
                Tags and Elements are build for iOS and android devices. They
                are also adaptable to web.
              </p>
              <h3>Contribution</h3>
              <p>
                You want to contribute to this project? Please to clone our
                github repository and make the world a better place to live with
                most sofisticated applications for our end-users.
              </p>
            </div>
            <div className="col-md-6">
              <h3>
                Build your native applications feeling like it's an html
                applications
              </h3>
              <div className="snippet">
                <h4>Install</h4>
                <div>
                  <p className="code-snippet">
                    > npm install react-native-htmltags
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about">
        <div className="container">
          <h3>Write HTML is React Native</h3>
          <div className="row">
            <div className="col-md-6">
              <p>
                This library is build to help developers have and use html-like
                elements such as H1, H2, H3 and BodyText which they can also
                customize and style in their own way.
              </p>

              <div className="code-shot">
                <img src="/assets/code2.png" alt="code" width="100%" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="demo-part">
                <img src="/assets/screen-shot.png" alt="code" width="100%" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-bottom">
        <div className="demo-part">
          <div className="container">
            <div className="card-bottom-text">
              <p>
                React Native Html Tags's card elements can be found using{" "}
                <span style={{ color: "maroon" }}>
                  react-native-htmltags/elements
                </span>{" "}
                which you have when you run the npm install.
              </p>
              <p>
                The CardWithRowBottom component has the following props:{" "}
                <span style={{ color: "maroon" }}>
                  title, titleBottom, imageUrl, onPress, children, style
                </span>{" "}
                which you can set at your convenience. Use the{" "}
                <span>titleBottom</span> prop to align your title at the bottom
                of the card image.
              </p>
              <p>
                Children of CardWithRowBottom component are row aligned as you
                can see in the code snipet bellow.
              </p>
            </div>

            <img src="/assets/code-and-shot.png" alt="code" width="100%" />
          </div>
        </div>
      </div>

      <div className="card-demo">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p>
                React Native Html Card elements have some property you can set
                up such{" "}
                <span style={{ color: "maroon" }}>
                  imageUrl, onPress, imageHeight, style.
                </span>{" "}
                The card component is used with the closing tags as shown the
                code below.
              </p>
              <p>
                Between the opening and closing tags, you can put in any type of
                text using the library html-like which is made for you and
                should be very easy to use.
              </p>

              <div className="code-shot">
                <img src="/assets/card-shot.png" alt="code" width="100%" />
              </div>
              <p>
                React Native Html Tags also have a customizable button which
                have{" "}
                <span style={{ color: "maroon" }}>
                  {" "}
                  onPress, style, title, icon, alignIconRight
                </span>{" "}
                as props. You can add a button icon which is by default align to
                the left of the button. You can use{" "}
                <span style={{ color: "maroon" }}> alignIconRight </span> props
                to align the button icon to the right.
              </p>
            </div>
            <div className="col-md-6">
              <div className="demo-part">
                <img src="/assets/card-pic.png" alt="code" width="100%" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
