import React from "react";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";

export default function Ariane() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="flex justify-center p-8 mt-8">
      <ul className="text-3xl text-right font-medium text-[#626262]">
        <li className="text-white cursor-pointer">
          <a onClick={scrollToTop}>H o m e</a>
        </li>
        <li className="mt-[100px] hover:text-white cursor-pointer">
          <Link to="about" spy={true} smooth={true} duration={400}>
            A b o u t m e
          </Link>
        </li>
        <li className="mt-[45px] text-2xl hover:text-white cursor-pointer">
          <Link to="skill" spy={true} smooth={true} duration={400}>
            S k i l l s
          </Link>
        </li>
        <li className="mt-[25px] text-2xl hover:text-white cursor-pointer">
          <Link to="project" spy={true} smooth={true} duration={400}>
            P r o j e c t s
          </Link>
        </li>
        <li className="mt-[60px] hover:text-white cursor-pointer">
          <Link to="career" spy={true} smooth={true} duration={400}>
            C a r e e r
          </Link>
        </li>
        <li className="mt-[50px] text-2xl hover:text-white cursor-pointer">
          <Link to="archiving" spy={true} smooth={true} duration={400}>
            A r c h i v i n g
          </Link>
        </li>
        <li className="mt-[65px] hover:text-white cursor-pointer">
          <Link to="contact" spy={true} smooth={true} duration={400}>
            C o n t a c t
          </Link>
        </li>
      </ul>
      <div>
        <img src="../src/images/ariane.png" alt="nav" className="ml-5 mt-1" />
      </div>
    </div>
  );
}
