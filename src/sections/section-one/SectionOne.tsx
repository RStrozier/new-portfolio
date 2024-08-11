import { FiChevronsDown } from "react-icons/fi";
import "./SectionOne.css";
import NavBar from "../../components/nav/NavBar";
import SocialAccounts from "../../components/SocialAccounts";

const SectionOne = () => {
  return (
    <>
      <div className="section-one-container">
        <NavBar />
        <div className="largeContainer">
          <SocialAccounts />
          <div className="center-container">
          <div className="hero-section-container"></div>
          </div>
            <div className="title">Welcome to my digital art portfolio</div>
            <div className="sub-text  merriweather-light">Experience digit art while 
              learning about Rashida. 
              <br />
              A novice developer with creativity
              and a passion towards programming.
            </div>
            <div className="button-container">
              <button className="black-button bona-nova-sc-regular">Sign up</button>
              <button className="white-button playwrite-cu">Projects</button>
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
