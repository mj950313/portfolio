import React from "react";
import { CiMail } from "react-icons/ci";
import { Link } from "react-scroll";

export default function ContactBox() {
  return (
    <div className="relative flex justify-center items-center duration-500 w-[100px] h-[100px] border-t-primary border-l-transparent border-b-transparent border-r-transparent border-t-[100px] border-r-[100px] border-b-0 border-l-0 xl:border-t-[174px] xl:border-r-[174px] xl:border-b-0 xl:border-l-0">
      <Link
        to="contact"
        className="cursor-pointer absolute flex flex-col items-center justfy-center duration-500 top-[-80px] left-1 xl:top-[-140px] xl:left-1 rotate-[-45deg]"
      >
        <span className="text-lg xl:text-3xl duration-500">
          <CiMail />
        </span>
        <div className="text-md xl:text-3xl duration-500 font-semibold leading-3">
          Contact
        </div>
      </Link>
    </div>
  );
}
