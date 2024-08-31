import logo from "../assets/quyetdaika-w-removebg.png";
import { FaGithub, FaFacebook, FaSlack, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex flex-col sm:flex-row items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" className="mx-2 w-32 sm:w-48" />
      </div>
      <div className="mt-4 sm:mt-0 flex items-center justify-center gap-4 text-2xl">
        <a href="https://github.com/quyetdaika" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 hover:scale-110 transition-transform duration-300">
          <FaGithub />
        </a>
        <a href="https://www.facebook.com/nvq29Apr/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 hover:scale-110 transition-transform duration-300">
          <FaFacebook />
        </a>
        <a href="https://app.slack.com/client/T02QFU9TCTD/D05JL21JNT0" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 hover:scale-110 transition-transform duration-300">
          <FaSlack />
        </a>
        <a href="https://www.linkedin.com/in/quyetdaika" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 hover:scale-110 transition-transform duration-300">
          <FaLinkedin />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
