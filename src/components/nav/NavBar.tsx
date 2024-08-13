import { FiAlignJustify } from 'react-icons/fi'
import './NavBar.css'
import logo from '../../assets/images/logo.png'

const NavBar = () => {
  return (
    <>
      <nav>
        <div className="logo-container">
          <img 
          className='logo-image'
          src={logo}></img>
        </div>
      
        <div className="menu-icon">
        <FiAlignJustify 
        size={48}/>
        </div>
      </nav>
    </>
  )
}

export default NavBar