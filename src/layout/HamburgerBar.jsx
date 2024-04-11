import React, { useState } from "react";
import ContactBox from "./ContactBox";
import { GiHamburgerMenu } from "react-icons/gi";
import Ariane from "../components/Ariane";
import { IoClose } from "react-icons/io5";

export default function HamburgerBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 flex items-center justify-between bg-black/30 lg:bg-transparent">
      <ContactBox />
      <h2 className="lg:hidden text-xl text-center p-5 font-bold duration-50">
        <span className="text-primary">MINJAE</span>&thinsp;KIM
      </h2>

      {/* 버튼: 사이드바 토글 */}

      <button
        className="text-5xl mr-5 xl:hidden"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? (
          <IoClose className="animate-spin" />
        ) : (
          <GiHamburgerMenu />
        )}
      </button>

      {/* 사이드바 */}
      <div
        className={`fixed pt-8 top-[100px] bg-[#070707] w-full h-full xl:hidden transform transition-transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Ariane />
      </div>
    </header>
  );
}
