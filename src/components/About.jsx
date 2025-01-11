import "./About.css";

import jacubelogo from "../assets/about.jpg";


const About = () => {
  return (
    <div className="custom-container">
      <div className="custom-inner-container">
        <div className="sticky-section">
          <img src={jacubelogo} className="logoAbout" />
          deez nuts

        </div>
      </div>
    </div>
  );
};

export default About;
