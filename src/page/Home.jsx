import React from "react";
import TypingAnimation from "../components/TypingAnimation";

export default function Home() {
  return (
    <div className="pt-48 xl:pt-[370px]">
      <div className="flex flex-col items-center ">
        <div className="px-9 sm:w-[600px] w-[350px] xl:w-[820px]">
          <h2 className=" md:text-6xl text-4xl sm:text-5xl xl:text-8xl font-bold text-center">
            MIN JAE
            <br />P O R T F O L I O<span className="text-primary">.</span>
          </h2>
          <div className="my-10 text-xl xl:text-3xl h-10 text-center">
            <TypingAnimation />
          </div>
          <p className="mt-10 mb-36 md:text-xl xl:text-2xl xl:mt-20 bg-primary/60 p-8 rounded-lg">
            저는 다른 개발자들과 소통하는 것을 좋아하며, 매번 새로운 계획과
            도전은 큰 자극제가 되어 주었습니다. 스스로 더욱 나아가기 위해 꾸준히
            노력하며 계속해서 발전해 나갈 기회를 만들어주고자 합니다.
          </p>
        </div>
      </div>
    </div>
  );
}
