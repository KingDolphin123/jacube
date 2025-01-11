import "./About.css";

import jacubelogo from "../assets/jacubefull.png";


const About = () => {
  return (
    <div className="custom-container">
      <div className="custom-inner-container">
        <div className="sticky-section">
          <img src={jacubelogo} className="logo" />
          <img src={jacubelogo} className="logo" />
          <img src={jacubelogo} className="logo" />

        </div>
      </div>
    </div>
  );
};

export default About;
