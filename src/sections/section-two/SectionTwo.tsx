import NavBar from "../../components/nav/NavBar";
import "./SectionTwo.css";

const SectionTwo = () => {
  return (
    <>
      <NavBar />
      <div className="page-section section-2">
        <div className="scroll-piece-left">
          <div className="mini-spacer"></div>
          <div className="sub-title bona-nova-sc-regular">Who Am I?</div>
        </div>

        <div className="mini-spacer"></div>
        <div className="mediumContainer merriweather-regular">
          <div className="scroll-piece-right about-me-text">
            <p>
              My name is Rashida. 
              <br />
              I am a computer science student in my 30's
              with a passion for pushing the boundaries of reality. Currently
              I'm venturing into the realms of virtual reality, augmented
              reality, and digital art. When I'm not conjuring digital
              experiences, I explore the world's hidden gems via travel &
              reading books. My interests span beyond code, encompassing the
              worlds of botany, history, and deep thinking.
            </p>
          </div>

          <div className="mini-spacer"></div>
          <div className="scroll-piece-left about-me-text">
            <p>
              Welcome to my captivating portfolio. Let's embark to discover
              where the lines are between what's real and what's possible. Than
              let's blur those lines in the most wondrous ways.
            </p>
          </div>
          <div className="mini-spacer"></div>
          <div className="scroll-piece-left signature-text">
            <p className="playwrite-cu">-Rashida S.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionTwo;
