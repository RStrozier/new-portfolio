import { FiChevronsDown } from "react-icons/fi";
import './SectionOne.css'
import mountainBackground from "../../assets/mountain-background.jpg"
import cloudsForeground from "../../assets/clouds-foreground.jpg"

const SectionOne = () => {

  return (
    <>
      <div className="page-section section-one">
        <div className="parallax-container">
          <header>
          <div className="background">
            <img src={mountainBackground} alt="Background Image" />
          </div>
          <div className="foreground">
            <img src={cloudsForeground} alt="Foreground Image" />
          </div>
          <div className="title">Hello, from Rashida's world</div>
          </header>
        </div>
        <FiChevronsDown size={32} />
      </div>
    </>
  );
};

export default SectionOne;