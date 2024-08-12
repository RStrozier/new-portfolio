import "./SectionTwo.css";
import computerImage from "../../../assets/images/computer-mess.png";

const SectionTwo = () => {
  return (
    <>
      <div className="container-fluid full-page section-two">
        <div className="mini-spacer"></div>

        <div className="container-large">
          <div className="center-container">
            <img src={computerImage} className="computer-image"></img>
            <div className="title text-black">
              Are you tired of seeing the same old generic websites?
            </div>
          </div>
        </div>

        <div className="container-medium">
          <div className="center-container">
            <div className="mini-spacer"></div>
            <div className="text-black">
              Imagine thinking that it's cool to be just like everyone else. To
              fit in. Average is where the great go to die.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionTwo;
