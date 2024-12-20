"use client";

import ReactPlayer from "react-player";
import BACKGROUND1 from "@/app/bgpng_temp/intro/4단원_무엇을 배워요_.png";
import { IntroWhatHeader } from "@/app/components/intro/intro-what-header";
import { IntroTextPlayer } from "@/app/components/intro/intro-text-player";

export default function Page() {
  const sound = [
    {
      text: "이 단원에서 우리는 한문에 대한 기초적인 지식을 익혀, 비교적 길이가 짧은 글을 바르게 읽고 풀이하는 방법을 배웁니다.",
      start: 0,
      end: 10926,
    },
    {
      text: "그리고 한문 문장의 구조를 살펴서 우리말과 같은 점과 다른 점도 알아보겠습니다.",
      start: 10926,
      end: 18188,
    },
    {
      text: "또한 그 속에 담긴 선인들의 지혜와 의미를 찾아 현재 우리의 삶에 적용해 보는 다양한 활동을 해 봅시다.",
      start: 18188,
      end: 28133,
    },
  ];

  return (
    <>
      <ReactPlayer
        url="/video/intro/4_what.mp4"
        width={1760}
        height={990}
        muted
        playing
      />

      <IntroWhatHeader className="absolute right-[100px] top-[130px]" />

      <div className="bg-white bg-opacity-50 absolute right-[100px] top-[245px] w-[1100px] rounded-[20px] pt-[25px] pb-[15px] pl-[40px] pr-[55px] animate__animated animate__fadeIn animate__delay-1s">
        <IntroTextPlayer
          sound="/sound/4/88_intro/5.mp3"
          data={sound}
          textClassName="text-right leading-[80px]"
        />
      </div>

      <img
        src={BACKGROUND1.src}
        className="absolute debug left-0 top-0 opacity-25 pointer-events-none"
      />
    </>
  );
}
