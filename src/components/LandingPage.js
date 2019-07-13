import React, { Component } from "react";
import Skyline from "../assets/skyline1.png";
import XboxController from "../assets/xboxcontroller.png";
import PS4Controller from "../assets/ps4controller1.png";
import Keyboard from "../assets/mechkeyboard.png";
import { Parallax } from "react-scroll-parallax";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <div id="main">
          <Parallax id="logo" y={[-190, 90]} tagOuter="figure">
            <h1 className="landingPageTitle">GAME TIME MACHINE</h1>
          </Parallax>
          <div id="mainImg">
            <img src={Skyline} alt="skyline" style={{ width: "100%" }} />
          </div>
        </div>
        <Parallax
          id="xbox-div"
          y={[120, 300]}
          x={[-135, 50]}
          style={{ overflow: "hidden" }}
        >
          <img
            src={XboxController}
            alt="xboxcontroller"
            className="xboxControllerImg"
          />
        </Parallax>
        <div style={{ marginTop: "470px", height: "45vh" }}>
          <Parallax
            id="xbox-div"
            y={[125, 280]}
            x={[200, 0]}
            style={{ overflow: "hidden" }}
          >
            <img
              src={PS4Controller}
              alt="ps4controller"
              className="ps4ControllerImg"
            />
          </Parallax>
          <div className="main-sub-content-div">
            <h1
              style={{
                display: "inline-block",
                margin: "0 45%",
                width: "max-content"
              }}
            >
              SOME TEXT HERE
            </h1>
            <p style={{ fontSize: "29px" }}>
              Quisque a felis vitae nisi tincidunt pretium. In sed malesuada
              nisi. Nulla mollis ac ante sed laoreet. In porttitor neque justo,
              vitae mollis purus faucibus vel. Vestibulum ac vulputate lorem.
              Proin pellentesque sit amet dolor vitae malesuada. Etiam mollis
              hendrerit arcu, id faucibus enim vestibulum sit amet. Suspendisse
              ipsum leo, commodo ac feugiat a, molestie vitae nibh. Donec auctor
              in libero in dignissim.
            </p>
          </div>
        </div>
        <div
          style={{
            height: "800px",
            backgroundColor: "grey",
            margin: "50px auto 150px auto",
            width: "1420px",
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            padding: "0px 55px",
            flexDirection: "column",
            fontSize: "30px",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center"
          }}
        >
          <Parallax
            id="xbox-div"
            y={[10, 250]}
            x={[-290, 10]}
            style={{ overflow: "hidden" }}
          >
            <img src={Keyboard} alt="Keyboard" className="keyboardImg" />
          </Parallax>
          <h1 style={{ display: "inline-block", margin: "-50px" }}>
            SOME TEXT HERE
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            suscipit purus sed leo ullamcorper, finibus fringilla diam
            consectetur. Nullam velit nunc, semper non tellus vitae, varius
            elementum libero. Proin tempor tincidunt leo, eget ullamcorper erat
            sagittis eu. Quisque vulputate eu lectus nec laoreet. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Maecenas eros nibh, feugiat non luctus eget,
            molestie vitae justo. Cras placerat sagittis semper. Etiam urna
            massa, consequat nec tristique sed, vulputate id tellus. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Praesent egestas erat eget ante accumsan
            blandit. Sed gravida dui non orci sagittis vehicula quis non sapien.
            Sed magna ex, aliquet in rhoncus sit amet, volutpat ac ante. Etiam
            at massa blandit, semper sem vel, suscipit tortor. Mauris sagittis
            erat risus, faucibus finibus orci pharetra eu.
          </p>
        </div>
        <div
          style={{
            height: "70vh",
            background: "linear-gradient(#66FFFD, #FFF)",
            margin: "50px auto",
            width: "1420px",
            padding: "0px 55px",
            fontSize: "30px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
          }}
        >
          <h1 style={{ display: "inline-block" }}>SOME TEXT HERE</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            suscipit purus sed leo ullamcorper, finibus fringilla diam
            consectetur. Nullam velit nunc, semper non tellus vitae, varius
            elementum libero. Proin tempor tincidunt leo, eget ullamcorper erat
            sagittis eu. Quisque vulputate eu lectus nec laoreet. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Maecenas eros nibh, feugiat non luctus eget,
            molestie vitae justo. Cras placerat sagittis semper. Etiam urna
            massa, consequat nec tristique sed, vulputate id tellus. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Praesent egestas erat eget ante accumsan
            blandit. Sed gravida dui non orci sagittis vehicula quis non sapien.
            Sed magna ex, aliquet in rhoncus sit amet, volutpat ac ante. Etiam
            at massa blandit, semper sem vel, suscipit tortor. Mauris sagittis
            erat risus, faucibus finibus orci pharetra eu.
          </p>
        </div>
        <div
          style={{
            height: "70vh",
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            margin: "50px auto",
            width: "1420px",
            padding: "0px 55px",
            fontSize: "30px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            display: "flex"
          }}
        >
          <h1 style={{ display: "inline-block" }}>SOME TEXT HERE</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            suscipit purus sed leo ullamcorper, finibus fringilla diam
            consectetur. Nullam velit nunc, semper non tellus vitae, varius
            elementum libero. Proin tempor tincidunt leo, eget ullamcorper erat
            sagittis eu. Quisque vulputate eu lectus nec laoreet. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Maecenas eros nibh, feugiat non luctus eget,
            molestie vitae justo. Cras placerat sagittis semper. Etiam urna
            massa, consequat nec tristique sed, vulputate id tellus. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Praesent egestas erat eget ante accumsan
            blandit. Sed gravida dui non orci sagittis vehicula quis non sapien.
            Sed magna ex, aliquet in rhoncus sit amet, volutpat ac ante. Etiam
            at massa blandit, semper sem vel, suscipit tortor. Mauris sagittis
            erat risus, faucibus finibus orci pharetra eu.
          </p>
        </div>
        <div
          style={{
            height: "70vh",
            backgroundColor: "grey",
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            margin: "50px auto",
            width: "1420px",
            padding: "0px 55px",
            fontSize: "30px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            display: "flex"
          }}
        >
          <h1 style={{ display: "inline-block" }}>SOME TEXT HERE</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            suscipit purus sed leo ullamcorper, finibus fringilla diam
            consectetur. Nullam velit nunc, semper non tellus vitae, varius
            elementum libero. Proin tempor tincidunt leo, eget ullamcorper erat
            sagittis eu. Quisque vulputate eu lectus nec laoreet. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Maecenas eros nibh, feugiat non luctus eget,
            molestie vitae justo. Cras placerat sagittis semper. Etiam urna
            massa, consequat nec tristique sed, vulputate id tellus. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Praesent egestas erat eget ante accumsan
            blandit. Sed gravida dui non orci sagittis vehicula quis non sapien.
            Sed magna ex, aliquet in rhoncus sit amet, volutpat ac ante. Etiam
            at massa blandit, semper sem vel, suscipit tortor. Mauris sagittis
            erat risus, faucibus finibus orci pharetra eu.
          </p>
        </div>
      </div>
    );
  }
}

export default LandingPage;
