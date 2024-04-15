import React from "react";

export default function Archivingbox({ title, link, des, li1, li2, li3 }) {
  return (
    <div className="bg-white w-96 text-[#070707] p-8 rounded-xl">
      <div className="flex flex-col gap-3">
        <h1 className="text-5xl font-extrabold">{title}</h1>
        <a href={link} className="text-primary">
          {link}
        </a>
        <p className="font-bold">{des}</p>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <li>{li1}</li>
        <li>{li2}</li>
        <li>{li3}</li>
      </div>
    </div>
  );
}
