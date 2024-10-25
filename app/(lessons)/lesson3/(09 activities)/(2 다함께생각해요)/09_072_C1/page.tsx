"use client";

import { ThinkTogetherHeader } from "@/app/components/headers/think-together";
import IMAGE1 from "./image1.png";
import { ContentContainer } from "@/app/components/content-container";
import { useState } from "react";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import BACKGROUND1 from "@/app/bgpng_temp/9/중등한문_이야기가 담긴 성어13.png";
import BACKGROUND2 from "@/app/bgpng_temp/9/중등한문_이야기가 담긴 성어14.png";
import { StepContainer } from "@/app/components/step-container";
import { VideoThumbnail_big } from "@/app/components/video-thumbnail";
import { SmartButton } from "@/app/components/buttons/smart-button";

export default function Page() {
  const [step, setStep] = useState(1);
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <ThinkTogetherHeader
        title={<p className="-ml-2">다음 대화를 통해 '고사'의 뜻을 알아보고, 디지털 도구로 '오십보백보(<span className="font-haeseo">五十步百步</span>)'의 유래를 찾아 그 내용을 정리해 보자.</p>}
        sound=""
      />
        {step !== 2 ? (
      <SmartButton
        link="https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%EC%98%A4%EC%8B%AD%EB%B3%B4%EB%B0%B1%EB%B3%B4"
        className="animate__animated animate__bounceIn animate__delay-2s absolute right-[166px] top-[220px] z-1 w-[100px]" 
        />
        ) : null }
      
      {step !== 1 ? (
      <SmartButton
        link="https://stdict.korean.go.kr/main/main.do"
        className="animate__animated animate__bounceIn animate__delay-2s absolute right-[166px] top-[220px] z-1 w-[100px]" 
        />
        ) : null }
      <ContentContainer className="-top-[30px]">
        {step === 1 && <VideoThumbnail_big thumbnail={IMAGE1.src} video="" width={900} height={480}/>}
        {step === 2 && <Step2 />}
      </ContentContainer>
      <img
        src={step === 1 ? BACKGROUND1.src : BACKGROUND2.src}
        className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />

      <StepContainer maxStep={2} step={step} onStepChange={setStep} />
    </>
  );
}

const Step2 = () => {
  return (
    <div className="flex flex-col items-center">
      내가 찾은 오십보백보(五十步百步)’의 유래
    </div>
  );
};
