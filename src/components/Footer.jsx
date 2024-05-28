import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white rounded-lg shadow-md m-4 w-full lg:w-[1250px] font-satoshi">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center">
          © {year} . All Rights Reserved |{" "}
          <span>
            Made with 🧠 by{" "}
              Nithin 👉
            <span className="font-bold text-teal-500">
              {" "}
              Give it a ⭐ on
              <a href="https://github.com/SaiNithinn/summarizer" className="cursor-pointer hover:underline" target="_blank"> GitHub</a>
            </span>
          </span>
        </span>
        <ul className="flex flex-wrap gap-4 items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
          <li>
            <a href="mailto:sainithinreddy71@gmail.com" target="_blank">
              <BiLogoGmail size={40} className="hover:scale-110 duration-300" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/sainithin-reddy-a974b2194/"
              target="_blank"
            >
              <BsLinkedin size={30} className="hover:scale-110 duration-300" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/reddy.sainithin/" target="_blank">
              <BsInstagram size={30} className="hover:scale-110 duration-300" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
