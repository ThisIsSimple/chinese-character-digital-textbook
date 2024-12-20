"use client";

import { PageInfoContext } from "@/app/utils/page-info";
import { useContext } from "react";
import ReactPlayer from "react-player";
import BACKGROUND1 from "@/app/bgpng_temp/intro/1단원_무엇을 배워요_.png";
import { IntroWhatHeader } from "@/app/components/intro/intro-what-header";
import { IntroTextPlayer } from "@/app/components/intro/intro-text-player";

export default function Page() {
  const { setSubtitle } = useContext(PageInfoContext);
  setSubtitle("단원 도입");

  const sound = [
    {
      text: "이 단원에서는 한자와 한문이 우리 삶과 얼마나 밀접하게 연관되어 있는지 재미있는 활동으로 확인해 보겠습니다.",
      start: 0,
      end: 10110,
    },
    {
      text: "한자의 특징, 한자와 한문의 개념, 한자의 발전 과정, 디지털 도구를 활용하여 한자를 찾는 방법, 한자를 바르게 쓰는 방법 등을 배웁니다.",
      start: 10110,
      end: 23488,
    },
    {
      text: "또한 한자 문화권의 개념과 한자 문화권에 속한 나라들의 한자 표기를 살펴보며 서로의 소통과 이해의 바탕을 마련해 봅시다.",
      start: 23488,
      end: 35108,
    },
  ];

  return (
    <>
      <ReactPlayer
        url="/video/intro/1_what.mp4"
        width={1760}
        height={990}
        muted
        playing
      />

      <IntroWhatHeader className="absolute right-[100px] top-[130px]" />

      <div className="bg-white bg-opacity-50 absolute right-[100px] top-[245px] w-[1100px] h-[675px] overflow-y-auto rounded-[20px] pt-[25px] pb-[10px] pl-[40px] pr-[47px] animate__animated animate__fadeIn animate__delay-1s">
        <IntroTextPlayer
          sound="/sound/1/8_intro/5.mp3"
          data={sound}
          textClassName="text-right leading-[80px]"
        />
      </div>

      <img
        src={BACKGROUND1.src}
        className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />
    </>
  );
}
