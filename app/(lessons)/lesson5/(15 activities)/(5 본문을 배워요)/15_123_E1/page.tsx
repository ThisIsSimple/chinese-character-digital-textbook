"use client";

import { RightTopStepContainer } from "@/app/components/right-top-step-container";
import IMAGE1 from "./image1.png";
import { LearnMainContentPageTemplate } from "@/app/pages/learn-main-content/learn-main-content-page-template";
import { useEffect, useState } from "react";
import { FlippableCard } from "@/app/components/flippable-card/flippable-card";
import { PillButton } from "@/app/components/buttons/pill-button";
import { ContentContainer } from "@/app/components/content-container";
import { SOUND } from "@/app/utils/sound-player";
import BACKGROUND1 from "@/app/bgpng_temp/15/중등한문_돌에 꽂힌 화살15.png"; //7~11~12~15
import { MainContentChineseAndReading } from "@/app/components/main-content/chinese-and-reading";

export default function Page() {
  const [step, setStep] = useState(1);

  const [showReading, setShowReading] = useState(false);
  const [showMeaning, setShowMeaning] = useState(false);
  // const [showResource, setShowResource] = useState(false);

  useEffect(() => {
    setShowReading(false);
    setShowMeaning(false);
    // setShowResource(false);
  }, [step]);

  const data = [
    {
      chinese: [
        { letter: "見", reading: "견" },
        { letter: "草", reading: "초" },
        {
          letter: "中",
          reading: "중",
          additional: (
            <>
              <span
                onClick={() => SOUND("/sound/5/p123_word000.mp3").play()}
                className="font-haeseo cursor-pointer"
              >
                中
              </span>
              : ①<span className="underline">가운데, 속</span>, ②<span className="underline">적중하다</span>
            </>
          ),
        },
        { letter: "石", reading: "석" },
        { letter: "하고", isKor: true, className: "mr-5" },
        {
          letter: "以",
          reading: "이",
          additional: (
            <>
              <span
                onClick={() => SOUND("/sound/5/p123_word001.mp3").play()}
                className="font-haeseo cursor-pointer"
              >
                以爲
              </span>
              : ~라고 여기다.
            </>
          ),
        },
        { letter: "爲", reading: "위" },
        { letter: "虎", reading: "호" },
        { letter: "而", reading: "이" },
        { letter: "射", reading: "사" },
        {
          letter: "之",
          reading: "지",
          additional: (
            <>
              <span
                onClick={() => SOUND("/sound/5/p123_word002.mp3").play()}
                className="font-haeseo cursor-pointer"
              >
                之
              </span>
              <span
                onClick={() => SOUND("/sound/5/p123_word003.mp3").play()}
                className="font-haeseo cursor-pointer"
              >
                → 草中石
              </span>
            </>
          ),
        },
        { letter: "니", isKor: true },
      ],
      sound: "/sound/5/122/2.mp3",
      content: (
        <div className="flex flex-wrap text-[50px] tracking-tight font-bold">
          풀 속의{" "}
          <FlippableCard
            active={showMeaning}
            className="ml-4 mr-5 inline-block"
            text="돌"
            width={130}
            height={80}
          />
          을 보고{" "}
          <FlippableCard
            active={showMeaning}
            className="ml-5 mr-6 inline-block"
            text="호랑이"
            width={210}
            height={80}
          />
          라고 여겨 그것을 쏘니,
        </div>
      ),
    },
    {
      chinese: [
        { letter: "中", reading: "중" },
        { letter: "石", reading: "석" },
        { letter: "沒", reading: "몰" },
        { letter: "矢", reading: "시" },
        { letter: "인데", isKor: true, className: "mr-5" },
        { letter: "視", reading: "시" },
        { letter: "之", reading: "지" },
        { letter: "하니", isKor: true, className: "mr-5" },
        { letter: "石", reading: "석" },
        { letter: "也", reading: "야" },
        { letter: "라.", isKor: true },
      ],
      sound: "/sound/5/122/3'.mp3",
      content: (
        <div className="flex flex-wrap text-[50px] tracking-normal font-bold mr-10">
          돌에 적중하여{" "}
          <FlippableCard
            active={showMeaning}
            className="ml-3 mr-6 inline-block"
            text="화살"
            width={170}
            height={80}
          />
          이 박혔는데 그것을 보니{" "}
          <FlippableCard
            active={showMeaning}
            className="mx-5 inline-block"
            text="돌"
            width={130}
            height={80}
          />
          이었다.
        </div>
      ),
    },
    {
      chinese: [
        { letter: "因", reading: "인" },
        {
          letter: "復",
          reading: "부",
          additional: (
            <>
              <span
                onClick={() => SOUND("/sound/5/p123_word004.mp3").play()}
                className="font-haeseo cursor-pointer"
              >
                復
              </span>
              : ① (부)<span className="underline">다시</span>, ② (복) 돌아오다
            </>
          ),
        },
        {
          letter: "更",
          reading: "갱",
          additional: (
            <>
              <span
                onClick={() => SOUND("/sound/5/p123_word005.mp3").play()}
                className="font-haeseo cursor-pointer"
              >
                更
              </span>
              : ① (갱)<span className="underline">다시</span>, ② (경) 고치다
            </>
          ),
        },
        { letter: "射", reading: "사" },
        { letter: "之", reading: "지" },
        { letter: "나", isKor: true },
      ],
      sound: "/sound/5/122/4.mp3", // 실제 경로로 수정 필요
      content: (
        <div className="flex flex-wrap text-[50px] tracking-tighter font-bold">
          인하여{" "}
          <FlippableCard
            active={showMeaning}
            className="mx-5 inline-block"
            text="다시"
            width={170}
            height={80}
          />
          그것을 쏘았으나,
        </div>
      ),
    },
    {
      chinese: [
        { letter: "終", reading: "종" },
        { letter: "不", reading: "불" },
        { letter: "能", reading: "능" },
        { letter: "復", reading: "부" },
        { letter: "入", reading: "입" },
        { letter: "石", reading: "석" },
        {
          letter: "矢",
          reading: "의",
          additional: (
            <>
              <span
                onClick={() => SOUND("/sound/5/p123_word006.mp3").play()}
                className="font-haeseo cursor-pointer"
              >
                矢
              </span>
              : ~이다
            </>
          ),
        },
        { letter: "러라.", isKor: true },
      ],
      sound: "/sound/5/122/4.mp3", // 실제 경로로 수정 필요
      content: (
        <div className="flex flex-wrap text-[50px] tracking-normal font-bold">
          끝내{" "}
          <FlippableCard
            active={showMeaning}
            className="ml-4 mr-6 inline-block"
            text="다시"
            width={170}
            height={80}
          />{" "}
          돌에 박히게 할 수 없었다.
        </div>
      ),
    },
  ];

  return (
    <>
      <LearnMainContentPageTemplate>
        <RightTopStepContainer maxStep={4} step={step} onStepChange={setStep} />
        {/* {step === 1 ? (
          <img src={IMAGE1.src} alt="image1" />
        ) : ( */}
        <ContentContainer className="w-[1760px] grid grid-cols-[1fr]">
          <div className="absolute w-[1480px] top-[228px] left-[280px]"> 
            <MainContentChineseAndReading
              data={data[step - 1]}
              showReading={showReading}
              setShowReading={setShowReading}
              showMeaning={showMeaning}
              setShowMeaning={setShowMeaning}
            />
          </div>
        </ContentContainer>
        {/* )} */}
      </LearnMainContentPageTemplate>
      <img src={BACKGROUND1.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
}
