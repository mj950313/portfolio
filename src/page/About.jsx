import React from "react";
import Title from "../components/Title";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineCalendarToday } from "react-icons/md";
import { HiMapPin } from "react-icons/hi2";
import { FaPhoneAlt } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { FaPen } from "react-icons/fa";

export default function About() {
  const ListItem = ({ icon, title, value }) => (
    <div className="flex justify-between mb-4">
      <div className="flex items-center gap-3">
        <span className="text-primary text-3xl">{icon}</span>
        <span className="font-semibold">{title}</span>
      </div>
      <span>{value}</span>
    </div>
  );
  return (
    <div>
      <Title title="A b o u t m e" />
      <div
        style={{ backgroundImage: "url(../src/images/left.png)" }}
        className="bg-center bg-[#0e0e0e] bg-cover flex justify-center"
      >
        <div className="px-3 py-9 sm:w-[600px] w-[350px] xl:w-[820px]">
          <ListItem icon={<FaUserCircle />} title="이름" value="김민재" />
          <ListItem
            icon={<MdOutlineCalendarToday />}
            title="생년월일"
            value="1995년 3월 13일"
          />
          <ListItem
            icon={<HiMapPin />}
            title="주소지"
            value="인천광역시 서구 심곡동"
          />
          <ListItem
            icon={<FaPhoneAlt />}
            title="연락처"
            value="010-9809-3009"
          />
          <ListItem
            icon={<TfiEmail />}
            title="이메일"
            value="mj950313@naver.com"
          />
          <ListItem icon={<FaPen />} title="학력" value="고등학교 졸업" />
        </div>
      </div>
    </div>
  );
}
