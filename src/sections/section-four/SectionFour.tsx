import "./SectionFour.css";
import heroDotImage from '../../assets/images/background-dots.png'

const SectionFour = () => {
  return (
    <>
      <div className="full-page container-fluid section-four">
      <div className="spacer"></div>
      <div className="swirl-background container-sm">
        <div className="title">Random Text</div>
      </div>
        <div className="center-container">
          <div className="container-large">
          <img src={heroDotImage} className="think-image"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionFour;
