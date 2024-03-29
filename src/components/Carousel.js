import React from "react";
import ReactDOM from "react-dom/client";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
//import "/Users/Marcus/Desktop/hola-gallery/src/Styles/slider-animations.css";
import '../Styles/slider-animations.css'
import '../Styles/styles.css';
import '../Styles/styleguide.css';
import '../Styles/globals.css';
import { Link } from "react-router-dom";

const content = [
  {
    art:
      "https://anima-uploads.s3.amazonaws.com/projects/629190b42b83fc7d786b7112/releases/629200c080d6b728d3b7613a/img/74aea5fa-6b79-4883-9b47-ec949cadda35-1@1x.png",
    profileMask:
      "https://anima-uploads.s3.amazonaws.com/projects/629190b42b83fc7d786b7112/releases/629190ba1cc4e1f4f27e72ec/img/profile-mask-1@2x.png",
    twitterHandle: "@ma10goo",
    description:
      "Tokyo based photographer\nSoftware developer",
    qrCode:
      "https://anima-uploads.s3.amazonaws.com/projects/629190b42b83fc7d786b7112/releases/629200c080d6b728d3b7613a/img/allenton-hippo-qr-code-1@2x.png",
    solanaLogo:
      "https://anima-uploads.s3.amazonaws.com/projects/629190b42b83fc7d786b7112/releases/629200c080d6b728d3b7613a/img/l-sponsors@2x.png",
    holaplexLogo:
      "https://anima-uploads.s3.amazonaws.com/projects/629190b42b83fc7d786b7112/releases/629200c080d6b728d3b7613a/img/holaplex-logo-compressed-07@2x.png"
  },
  {
    art:
      "https://anima-uploads.s3.amazonaws.com/projects/629190b42b83fc7d786b7112/releases/629200c080d6b728d3b7613a/img/74aea5fa-6b79-4883-9b47-ec949cadda35-1@1x.png",
    profileMask:
      "https://anima-uploads.s3.amazonaws.com/projects/629190b42b83fc7d786b7112/releases/629190ba1cc4e1f4f27e72ec/img/profile-mask-1@2x.png",
    twitterHandle: "@Loremipsumdolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru",
    qrCode:
      "https://anima-uploads.s3.amazonaws.com/projects/629190b42b83fc7d786b7112/releases/629200c080d6b728d3b7613a/img/allenton-hippo-qr-code-1@2x.png",
    solanaLogo:
      "https://anima-uploads.s3.amazonaws.com/projects/629190b42b83fc7d786b7112/releases/629200c080d6b728d3b7613a/img/l-sponsors@2x.png",
    holaplexLogo:
      "https://anima-uploads.s3.amazonaws.com/projects/629190b42b83fc7d786b7112/releases/629200c080d6b728d3b7613a/img/holaplex-logo-compressed-07@2x.png"
  },
  {
    art:
      "https://anima-uploads.s3.amazonaws.com/projects/629190b42b83fc7d786b7112/releases/629200c080d6b728d3b7613a/img/74aea5fa-6b79-4883-9b47-ec949cadda35-1@1x.png",
    profileMask:
      "https://anima-uploads.s3.amazonaws.com/projects/629190b42b83fc7d786b7112/releases/629190ba1cc4e1f4f27e72ec/img/profile-mask-1@2x.png",
    twitterHandle: "@Loremipsumdolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru",
    qrCode:
      "https://anima-uploads.s3.amazonaws.com/projects/629190b42b83fc7d786b7112/releases/629200c080d6b728d3b7613a/img/allenton-hippo-qr-code-1@2x.png",
    solanaLogo:
      "https://anima-uploads.s3.amazonaws.com/projects/629190b42b83fc7d786b7112/releases/629200c080d6b728d3b7613a/img/l-sponsors@2x.png",
    holaplexLogo:
      "https://anima-uploads.s3.amazonaws.com/projects/629190b42b83fc7d786b7112/releases/629200c080d6b728d3b7613a/img/holaplex-logo-compressed-07@2x.png"
  }
];

const Carousel = (view) => (

  <div>
    <Slider className="cardFull" autoplay="1" infinite duration="10000" previousButton="" nextButton="">
      {view.view.map((item, index) => (
        <div key={index} className="sliderContent">
          <div className="cardFull screen">
            <div className="artFrame">
              <img className="artImage" src={item.art} alt="art" />
            </div>
            <div className="artistInfo">
              <img
                className="profileMask"
                src={item.profileMask}
                alt="profile"
              />
              <div className="twitterHandleFrame">
                <div className="twitterHandle">{item.twitterHandle}</div>
              </div>
              <div className="descriptionFrame">
                <div className="description">{item.description}</div>
              </div>
              <div className="qrCodeFrame">
                <img className="qrCodeImage" src={item.qrCode} alt="qr code" />
              </div>
            </div>
            <div className="logos">
                <img className="solanaLogo" src={item.solanaLogo} alt="solona" />

              <div className="logoFrame">
                <Link to="/GetNft">
                  <img
                    className="holaplexLogo"
                    src={item.holaplexLogo}
                    alt="holaplex"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Carousel />
  </React.StrictMode>
);

export default Carousel
