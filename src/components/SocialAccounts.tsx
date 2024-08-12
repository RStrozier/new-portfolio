import { FaGithub, FaLinkedin, FaSpotify, FaXTwitter } from 'react-icons/fa6';
import '../assets/css/components.css'

const SocialAccounts = () => {
  return (
    <>
      <div className="social-account-container merriweather-light">
        <div className="social-icon"><FaGithub size={24} /> GitHub </div>
        <div className="social-icon"><FaLinkedin size={24} style={{ color: '#0072b1' }}/> Linkedin </div>
        <div className="social-icon"><FaXTwitter size={24} /> Twitter </div>
        <div className="social-icon"><FaSpotify size={24} style={{ color: '#1DB954' }} /> Spotify </div>
      </div>
    </>
  );
};

export default SocialAccounts;
