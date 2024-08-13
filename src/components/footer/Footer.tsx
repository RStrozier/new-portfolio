import SocialAccounts from '../SocialAccounts'
import './Footer.css'

const Footer = () => {
  return (
    <>
    <div className="container-fluid footer">
      <p>&copy; 2023 My App</p>
        <div className="container-sm">
          <SocialAccounts />
        </div>
      </div>
    </>
  )
}

export default Footer