import React from "react";
import Title from "../components/Title";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { scrollSpy } from "react-scroll";

export default function Contact() {
  return (
    <div>
      <Title title="C o n t a c t" />
      <div
        style={{ backgroundImage: "url(/images/left.png)" }}
        className="bg-center bg-[#0e0e0e] bg-cover flex flex-col items-center"
      >
        <div className="flex flex-col py-8">
          <p className="flex items-center text-xl gap-2">
            <MdOutlineMailOutline className="text-primary" />
            Email : mj950313@naver.com
          </p>
          <p className="flex items-center text-xl gap-2">
            <FaPhoneAlt className="text-primary" />
            Phone : 010 9809 3009
          </p>
        </div>
        <a href="https://github.com/mj950313" className=" text-7xl p-5 mb-10">
          <FaGithub />
        </a>
      </div>
    </div>
  );
}
