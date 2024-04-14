import React from "react";
import Title from "../components/Title";

export default function Skill() {
  return (
    <div>
      <Title title="S k i l l s" />
      <div
        style={{ backgroundImage: "url(/images/right.png)" }}
        className="bg-center bg-[#0e0e0e] bg-cover flex justify-center"
      >
        <p align="left" className="px-3 py-9">
          <div className="flex p-3 gap-3">
            <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                alt="html5"
                width="70"
                height="70"
                className=" bg-white p-1 skillbox"
              />
            </a>
            <a
              href="https://www.w3schools.com/css/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                alt="css3"
                width="70"
                height="70"
                className="bg-white p-1 skillbox"
              />
            </a>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                alt="javascript"
                width="70"
                height="70"
                className="skillbox"
              />
            </a>
          </div>

          <div className="flex p-3 gap-3">
            <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
              <img
                src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg"
                alt="nextjs"
                width="70"
                height="70"
                className="bg-white p-1 skillbox"
              />
            </a>
            <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                alt="react"
                width="70"
                height="70"
                className="skillbox"
              />
            </a>
            <a
              href="https://www.typescriptlang.org/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
                alt="typescript"
                width="70"
                height="70"
                className="skillbox"
              />
            </a>
          </div>

          <div className="flex justify-center p-3 gap-3">
            <a href="https://sass-lang.com" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"
                alt="sass"
                width="70"
                height="70"
                className="skillbox"
              />
            </a>
            <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
              <img
                src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                alt="tailwind"
                width="70"
                height="70"
                className="skillbox"
              />
            </a>
          </div>

          <div className="flex justify-center p-3 gap-3">
            <a href="https://redux.js.org" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
                alt="redux"
                width="70"
                height="70"
                className="skillbox"
              />
            </a>
            <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
              <img
                src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                alt="git"
                width="70"
                height="70"
                className="skillbox"
              />
            </a>
          </div>
        </p>
      </div>
    </div>
  );
}
