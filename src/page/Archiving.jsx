import React from "react";
import Title from "../components/Title";
import Archivingbox from "../components/Archivingbox";
import { FaGithub } from "react-icons/fa";
import { SiVelog } from "react-icons/si";

export default function Archiving() {
  return (
    <div>
      <Title title="A r c h i v i n g" />
      <div
        style={{ backgroundImage: "url(/images/left.png)" }}
        className="bg-center bg-[#0e0e0e] bg-cover flex flex-col gap-12 items-center md:flex md:flex-row md:justify-center p-10"
      >
        <Archivingbox
          title={
            <span className="flex gap-1">
              <FaGithub />
              GitHub
            </span>
          }
          link="https://github.com/mj950313"
          des="소스 코드 저장소입니다."
          li1="코딩 연습을 위한 소스 코드"
          li2="다른 개발자들과의 협업 프로젝트 소스 코드"
          li3="과거 프로젝트의 소스 코드"
        />
        <Archivingbox
          title={
            <span className="flex gap-1">
              <SiVelog />
              Velog
            </span>
          }
          link="https://velog.io/@mj950313"
          des="개발 공부를 위한 블로그 입니다."
          li1="공부한 것을 나의 것으로 만들기 위한 블로깅"
          li2="프로젝트를 하며 얻은 지식 기록"
          li3="과거의 나와 현재의 나의 회고"
        />
      </div>
    </div>
  );
}
