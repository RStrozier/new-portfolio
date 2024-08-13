import { FaGithub, FaLinkedin, FaSpotify, FaXTwitter } from 'react-icons/fa6';
import '../assets/css/components.css'

const SocialAccounts = () => {
  return (
    <>
      <div className="container-md social-account-container merriweather-light">
        <div className="social-icon merriweather-thin"><FaGithub size={22} style={{ color: '#000000' }} /> GitHub </div>
        <div className="social-icon merriweather-thin"><FaLinkedin size={22} style={{ color: '#0072b1' }}/> Linkedin </div>
        <div className="social-icon merriweather-thin"><FaXTwitter size={22} style={{ color: '#000000' }} /> Twitter </div>
        <div className="social-icon merriweather-thin"><FaSpotify size={22} style={{ color: '#1DB954' }} /> Spotify </div>
      </div>
    </>
  );
};

export default SocialAccounts;
