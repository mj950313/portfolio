import React from "react";
import Ariane from "../components/Ariane";

export default function Sidebar() {
  return (
    <div className="hidden lg:block w-[370px] bg-[#070707] fixed top-0 right-0 h-full">
      <h2 className="text-3xl text-center p-5 font-bold">
        <span className="text-primary">MINJAE</span>&thinsp;KIM
        <Ariane />
      </h2>
    </div>
  );
}
