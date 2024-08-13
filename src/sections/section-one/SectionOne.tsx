import "./SectionOne.css";
import NavBar from "../../components/nav/NavBar";
import blackWhiteImage from "../../assets/images/black-and-white-geometry.jpg";
import SectionOneBtns from "./SectionOneBtns";

const SectionOne = () => {
  return (
    <>

      <div className="section-one-container">
        <NavBar />
        <div className="left-square"></div>
        <div className="container-large main-container">
          <div className="center-container">
            <img className="hero-image" src={blackWhiteImage}></img>
          </div>

          <div className="ring-background">
            <div className="title poppins-medium">
              Welcome to my digital art portfolio
            </div>
            <div className="sub-text  merriweather-light p-1 contrast-color-2">
              Experience digit art while viewing the journey through projects.
              <br />
              Novice developer with expert creativity.
            </div>

            <div className="center-container compress-container">
            <div className="text-center text-sm">Rashida is a unique developer who has the 
              desire to merge the world online with the world we live in today through art 
              and simple design.
            </div>
            </div>
            <div className="button-container">
              <SectionOneBtns />
            </div>
          </div>
        </div>
        <div className="right-square"></div>
      </div>
    </>
  );
};

export default SectionOne;
