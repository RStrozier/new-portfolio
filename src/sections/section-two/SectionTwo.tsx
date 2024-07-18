import NavBar from '../../components/nav/NavBar'
import './SectionTwo.css'

const SectionTwo = () => {

  return (
    <>
    <div className="page-section">
      <NavBar />
      <div className="scroll-piece-left">
        <div className="spacer"></div>
      <div className="sub-title">Who Am I?</div>
      </div>
      <div className="spacer"></div>

    <div className="mediumContainer">
      <div className="scroll-piece-right about-me-text">
        <p>My name is Rashida. I am a computer science student in my 30'swith a passion for 
          pushing the boundaries of reality. Currently, I'm venturing into the realms of 
          virtual reality and augmented reality. When I'm not conjuring digital experiences, 
          I explore the world's hidden gems & reading books. My interests span beyond code, 
          encompassing the worlds of botany, history, and deep thinking.
        </p>
      </div>

      <div className="mini-spacer"></div>
      <div className="scroll-piece-left about-me-text">
        <p>There are no such things are coincidences, so if you landed on this page, you were
          meant to. Explore the world of digital art with me, and the next level of programming.
          This is an art. Although not yet recognized, my goal is to help coders and developers
          alike to push the limitations of possibilities.
        </p>
      </div>

      <div className="mini-spacer"></div>
      <div className="scroll-piece-right about-me-text">
        <p>Welcome to my captivating portfolio. Let's embark to discover where the lines are 
        between what's real and what's possible. Than let's blur those lines in the most 
        wondrous ways.</p>
      </div>
      <div className="mini-spacer"></div>
      <div className="scroll-piece-left signature-text">
      <p>-Rashida S.</p>
      </div>

    </div>
    </div>
    </>
  )
}

export default SectionTwo