"use client";

import { ThinkTogetherHeader } from "@/app/components/headers/think-together";
import IMAGE1 from "./image1.png";
import { ContentContainer } from "@/app/components/content-container";
import { useState } from "react";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import BACKGROUND1 from "@/app/bgpng_temp/8/중등한문_언어생활 속의 성어2.png";
import { StepContainer } from "@/app/components/step-container";
import { VideoThumbnail_big } from "@/app/components/video-thumbnail";

export default function Page() {
  const [step, setStep] = useState(1);
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <ThinkTogetherHeader title="다음 대화를 통해 '고사'의 뜻을 알아보고, 디지털 도구로 '오십보백보(五十步百步)'의 유래를 찾아 그 내용을 정리해 보자." />

      <ContentContainer>
        {step === 1 && <VideoThumbnail_big thumbnail={IMAGE1.src} video="" />}
        {step === 2 && <Step2 />}
      </ContentContainer>
      <img
        src={BACKGROUND1.src}
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
