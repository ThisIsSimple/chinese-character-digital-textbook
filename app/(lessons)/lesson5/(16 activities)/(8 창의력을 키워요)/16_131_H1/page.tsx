"use client";

import IMAGE from "./image.png";
import { useEffect, useState } from "react";
import { CreativityPageTemplate } from "@/app/pages/creativity-page-template";
import { CreativityTitleHeader } from "@/app/components/headers/creativity-title-header";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import { InputWithPen } from "@/app/components/input-with-pen";
import { TitleContainer } from "@/app/components/title-container";
import { StepContainer } from "@/app/components/step-container";
import BACKGROUND1 from "@/app/bgpng_temp/16/중등한문_제주 거상 김만덕27.png";
import { ContentContainer } from "@/app/components/content-container";

export default function Page() {
  const answers1 = [
    "낮말은 새가 듣고 밤말은 쥐가 듣는다.",
    "일아무도 안 듣는데서라도 말조심을 해야한다.",
  ];
  const answers2 = [
    "스토리보드 작성하기.",
    "필요한 역할 분담하기.",
    "각 장면을 내용에 맞게 촬영하기.",
    "영상 완성하여 발표하기.",
  ];
  const [showAnswer, setShowAnswer] = useState(false);
  // const [step, setStep] = useState(1);

  // useEffect(() => {
  //   setShowAnswer(false);
  // }, [step]);

  return (
    <>
      <CreativityPageTemplate>
        <header className="relative width-[1000px] left-[450px] -top-5 text-[50px]">
          <CreativityTitleHeader title="우리 반의 ‘선행왕’ 선정하기" />
        </header>

        <ContentContainer className="!items-start">
          <img src={IMAGE.src} />
        </ContentContainer>
      </CreativityPageTemplate>

      {/* <StepContainer maxStep={2} step={step} onStepChange={setStep} /> */}

      <TitleContainer className="ml-4 mt-4">
        <div className="flex items-center gap-4">
          <img src="/ui/flower-icon-2.png" />
          다음 단어의 뜻을 조사하고 차이점을 발표해 보자.
        </div>
      </TitleContainer>

      <ExampleAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />

      <img
        src={BACKGROUND1.src}
        className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />
    </>
  );
}
