"use client";

import { SoundButton2 } from "@/app/components/buttons/sound-button2";
import IMAGE from "./image.png";
import { useEffect, useState } from "react";
import { CreativityPageTemplate } from "@/app/pages/creativity-page-template";
import { CreativityTitleHeader } from "@/app/components/headers/creativity-title-header";
import BACKGROUND1 from "@/app/bgpng_temp/7/중등한문_언어생활 속의 성어131.png";

export default function Page() {
  const [showAnswer, setShowAnswer] = useState(false);
  const [step, setStep] = useState(1);

  useEffect(() => {
    setShowAnswer(false);
  }, [step]);

  const [isReading, setIsReading] = useState(false);

  const sound = new Howl({
    src: "/sound/3/65-i2.mp3",
    onplay: () => setIsReading(true),
    onend: () => setIsReading(false),
  });

  useEffect(() => {
    return () => {
      sound.stop();
    };
  }, []);

  const items = [
    "마음에 드는 성어를 검색하여 찾는다.",
    "두꺼운 색종이를 준비하여 가로 5㎝, 세로 10㎝ 크기로 자른다.",
    "자른 종이에 자신이 찾은 성어를 쓰고 그 내용에 어울리는 글을 적거나 그림을 그린다.",
    "자신의 개성을 살려 색을 칠하거나 예쁘게 꾸민다.",
    "코팅하고 오려 낸 뒤 구멍을 뚫어 노끈 등으로 묶는다.",
    "친구와 서로 교환하거나 주고 싶은 친구에게 선물을 한다.",
  ];

  return (
    <>
      <CreativityPageTemplate>
        <header className="relative left-[450px] -top-5 text-[50px]">
          <CreativityTitleHeader title="‘성어 책갈피’ 만들기" />
        </header>

        <SoundButton2
          className="absolute -top-[13px] left-[1065px] animate__animated animate__bounceIn animate__delay-1s z-10"
          active={isReading}
          onClick={() => sound.play()}
        />

        <div className="grid grid-cols-[450px__1fr] gap-3 mt-5">
          <div className="relaitve h-full flex justify-end items-end pr-5 pl-4">
            <img src={IMAGE.src} />
          </div>

          <div className="flex flex-col gap-14 pt-[52px]">
            {items.map((item, index) => (
              <div key={index} className="flex items-center gap-5">
                <div className="bg-red-500 text-white w-10 h-10 rounded-full flex justify-center items-center text-[30px] tracking-tightest">
                  {index + 1}
                </div>
                <p className="text-[30px]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </CreativityPageTemplate>
      {/* <img src={BACKGROUND1.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" /> */}
    </>
  );
}
