import React, { useState, useEffect } from "react";

function TypingAnimation() {
  // 타이핑될 메시지를 순서대로 배열에 저장합니다.
  const messages = ["안녕하세요 : )\n Frontend 개발자 김민재입니다."];
  const [fullMessage, setFullMessage] = useState(""); // 전체 메시지를 저장할 상태
  const [currentMessage, setCurrentMessage] = useState(""); // 현재 타이핑 중인 메시지
  const [index, setIndex] = useState(0); // 현재 메시지의 문자 인덱스
  const [messageIndex, setMessageIndex] = useState(0); // 현재 메시지 배열의 인덱스
  const [isDeleting, setIsDeleting] = useState(false); // 삭제 모드인지 여부

  useEffect(() => {
    let timeoutId;

    if (isDeleting) {
      // 삭제 모드
      if (index > 0) {
        // 메시지를 한 글자씩 삭제
        timeoutId = setTimeout(() => {
          setFullMessage((prev) => prev.slice(0, -1));
          setIndex((prev) => prev - 1);
        }, 50);
      } else {
        // 현재 메시지를 모두 삭제한 경우, 다음 메시지로 전환
        setMessageIndex((prev) => (prev + 1) % messages.length);
        setIsDeleting(false);
      }
    } else {
      // 타이핑 모드
      if (index < messages[messageIndex].length) {
        // 현재 메시지의 다음 글자를 추가
        timeoutId = setTimeout(() => {
          setCurrentMessage(messages[messageIndex].slice(0, index + 1));
          setFullMessage((prev) => prev + messages[messageIndex][index]);
          setIndex((prev) => prev + 1);
        }, 100);
      } else {
        // 메시지를 모두 타이핑한 경우, 잠시 후에 삭제 모드로 전환
        timeoutId = setTimeout(() => {
          setIsDeleting(true);
        }, 1000);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [currentMessage, isDeleting, index, messageIndex, messages]);

  return (
    <div className="typing-animation">
      <span>{fullMessage}</span>
      <span className="cursor">|</span>
    </div>
  );
}

export default TypingAnimation;
