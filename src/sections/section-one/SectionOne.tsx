import { FiChevronsDown } from "react-icons/fi";
import "./SectionOne.css";
import cloudsForeground2 from "../../assets/images/clouds-foreground-2.jpg";
import NavBar from "../../components/nav/NavBar";
import mountainBackground2 from "../../assets/images/mountain-background-2.jpg";

const SectionOne = () => {
  return (
    <>
   
      <div className="page-section">
      <NavBar />
        <div className="parallax-container">
          <header>
            <div className="background">
              <img src={mountainBackground2} alt="Background Image" />
            </div>
            <div className="foreground">
              <img src={cloudsForeground2} alt="Foreground Image" />
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
