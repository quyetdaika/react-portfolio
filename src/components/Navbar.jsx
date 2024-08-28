import logo from "../assets/quyetdaika-w-removebg.png"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img src={logo} alt="logo" width="50%" className="mx-2"/>
        </div>
        <div className="m-8 flex itmes-center justify-center gap-4 text-2xl">
            <FaLinkedin></FaLinkedin>
            <FaGithub></FaGithub>
            <FaInstagram></FaInstagram>
            <FaSquareXTwitter></FaSquareXTwitter>
        </div>
    </nav>
  )
}

export default Navbar