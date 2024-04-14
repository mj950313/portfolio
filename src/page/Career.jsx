import React from "react";
import Title from "../components/Title";

export default function Career() {
  return (
    <div>
      <Title title="C a r e e r" />
      <div
        style={{ backgroundImage: "url(/images/right.png)" }}
        className="bg-center bg-[#0e0e0e] bg-cover flex justify-center"
      >
        <div className="p-5">
          <div className="flex gap-3 items-baseline font-semibold">
            <img
              className="w-6 rounded-lg"
              src="/images/fastcampus.png"
              alt="fastcampus"
            />
            <h2 className="text-3xl text-[#FC1C49]">FastCampus</h2>
            <span className="text-xl align-bottom">
              2023.11.16 ~ 2024.06.14
            </span>
          </div>
          <p className="text-right my-3">
            패스트캠퍼스 : 프론트엔드 개발 부트캠프 7기
          </p>
        </div>
      </div>
    </div>
  );
}
