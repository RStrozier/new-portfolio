import { FiChevronsDown } from "react-icons/fi";
import "./SectionOne.css";
import NavBar from "../../components/nav/NavBar";
import blackWhiteImage from "../../assets/images/black-and-white-geometry.jpg"
import SectionOneBtns from "./SectionOneBtns";

const SectionOne = () => {
  return (
    <>
      <div className="section-one-container">
        <NavBar />
        <div className="container-large">
            <div className="center-container">
              <img 
              className="hero-image"
              src={blackWhiteImage}></img>
            </div>
            <div className="title poppins-medium">Welcome to my digital art portfolio</div>
            <div className="sub-text  merriweather-light">
              Experience digit art while learning about Rashida.
              <br />
              Novice developer with expert creativity.
            </div>
            <div className="button-container">
           <SectionOneBtns />
           </div>
          </div>

          <div className="chevrons-down-container">
            <FiChevronsDown size={60} />
          </div>
        </div>
    </>
  );
};

export default SectionOne;
