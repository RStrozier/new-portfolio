import { FiChevronsDown } from "react-icons/fi";
import "./SectionOne.css";
import mountainBackground from "../../assets/images/mountain-background.jpg";
import cloudsForeground from "../../assets/images/clouds-foreground.jpg";

const SectionOne = () => {
  return (
    <>
      <div className="page-section">
        <div className="parallax-container">
          <header>
            <div className="background">
              <img src={mountainBackground} alt="Background Image" />
            </div>
            <div className="foreground">
              <img src={cloudsForeground} alt="Foreground Image" />
            </div>
            <div className="title">
              Hello, <span>[Rashida's]</span> world
            </div>
          </header>
        </div>
        <div className="chevrons-down-container">
          <FiChevronsDown size={60} />
        </div>
      </div>
    </>
  );
};

export default SectionOne;
