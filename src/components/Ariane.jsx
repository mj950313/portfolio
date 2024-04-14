import React, { useEffect } from "react";
import { Link, Events, scrollSpy } from "react-scroll";

export default function Ariane() {
  useEffect(() => {
    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  return (
    <div className="flex justify-center p-8 md:mt-8">
      <ul className="text-3xl text-right font-medium text-[#626262]">
        <li className="hover:text-white cursor-pointer">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={400}
            activeClass="text-white"
          >
            H o m e
          </Link>
        </li>
        <li className="mt-[100px] hover:text-white cursor-pointer">
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={400}
            activeClass="text-white"
          >
            A b o u t m e
          </Link>
        </li>
        <li className="mt-[45px] text-2xl hover:text-white cursor-pointer">
          <Link
            to="skill"
            spy={true}
            smooth={true}
            duration={400}
            activeClass="text-white"
          >
            S k i l l s
          </Link>
        </li>
        <li className="mt-[25px] text-2xl hover:text-white cursor-pointer">
          <Link
            to="project"
            spy={true}
            smooth={true}
            duration={400}
            activeClass="text-white"
          >
            P r o j e c t s
          </Link>
        </li>
        <li className="mt-[60px] hover:text-white cursor-pointer">
          <Link
            to="career"
            spy={true}
            smooth={true}
            duration={400}
            activeClass="text-white"
          >
            C a r e e r
          </Link>
        </li>
        <li className="mt-[50px] text-2xl hover:text-white cursor-pointer">
          <Link
            to="archiving"
            spy={true}
            smooth={true}
            duration={400}
            activeClass="text-white"
          >
            A r c h i v i n g
          </Link>
        </li>
        <li className="mt-[65px] hover:text-white cursor-pointer">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={400}
            activeClass="text-white"
          >
            C o n t a c t
          </Link>
        </li>
      </ul>
      <div>
        <img src="/images/ariane.png" alt="nav" className="ml-5 mt-1" />
      </div>
    </div>
  );
}
