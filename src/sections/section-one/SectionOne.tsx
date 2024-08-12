import { FiChevronsDown } from "react-icons/fi";
import "./SectionOne.css";
import NavBar from "../../components/nav/NavBar";
import SocialAccounts from "../../components/SocialAccounts";
import blackWhiteImage from "../../assets/images/black-and-white-geometry.jpg"

const SectionOne = () => {
  return (
    <>
      <div className="section-one-container">
        <NavBar />
        <div className="container-large">
          <div className="largeContainer">
            <SocialAccounts />
            <div className="center-container">
              <img 
              className="hero-image"
              src={blackWhiteImage}></img>
            </div>
            <div className="title">Welcome to my digital art portfolio</div>
            <div className="sub-text  merriweather-light">
              Experience digit art while learning about Rashida.
              <br />
              Novice developer with expert creativity.
            </div>
            <div className="button-container">
              <button className="black-button bona-nova-sc-regular">
                Select Color
              </button>
              <button className="white-button playwrite-cu">Projects</button>
            </div>
          </div>

          <div className="chevrons-down-container">
            <FiChevronsDown size={60} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionOne;
