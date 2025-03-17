import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
const Footer = () =>{
    return(
    <footer className="bg-[#14181F] py-4 text-center text-gray-400">
    <p>© 2025 Anirudh Kalva | All Rights Reserved</p>
    <div className="flex space-x-6">
        <a href="https://github.com/AnirudhKalva" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} className="hover:text-[#00E0FF] transition-transform hover:scale-110" />
        </a>
        <a href="https://www.linkedin.com/in/anirudh-kalva-672b791a3/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} className="hover:text-[#00E0FF] transition-transform hover:scale-110" />
        </a>
        <a href="mailto:anirudhkalva09@gmail.com">
          <FaEnvelope size={24} className="hover:text-[#00E0FF] transition-transform hover:scale-110" />
        </a>
      </div>
  </footer>
    )
}
export default Footer;