"use client";

import IMAGE from "./image.png";
import IMAGE2 from "./image2.png";
import { useEffect, useState } from "react";
import { CreativityPageTemplate } from "@/app/pages/creativity-page-template";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import { InputWithPen } from "@/app/components/input-with-pen";
import { TitleContainer } from "@/app/components/title-container";
import { StepContainer } from "@/app/components/step-container";
import BACKGROUND1 from "@/app/bgpng_temp/5/중등한문_한자를 알면 틀리지 않는 일상 어휘16.png";
import BACKGROUND2 from "@/app/bgpng_temp/5/중등한문_한자를 알면 틀리지 않는 일상 어휘17.png";

export default function Page() {
  const [showAnswer, setShowAnswer] = useState(false);
  const [step, setStep] = useState(1);

  useEffect(() => {
    setShowAnswer(false);
  }, [step]);

  return (
    <>
      <CreativityPageTemplate>
        {step === 1 && <Step1 />}
        {step === 2 && <Step2 />}
      </CreativityPageTemplate>

      <StepContainer maxStep={2} step={step} onStepChange={setStep} />
      {/* <img src={BACKGROUND2.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" /> */}
    </>
  );
}

const Step1 = () => {
  const answers = [
    "지금 지나가고 있는 이날.",
    "일이 있는 바로 그날.",
    "오늘의 바로 다음 날.",
    "특정 시점의 그다음 날.",
  ];
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <>
      <TitleContainer className="ml-4 mt-4">
        <div className="flex items-center gap-4">
          <img src="/ui/flower-icon-2.png" />
          다음 단어의 뜻을 조사하고 차이점을 발표해 보자.
        </div>
      </TitleContainer>
      <div className="relaitve h-full flex justify-end items-end pr-5">
        <img src={IMAGE.src} />
      </div>

      <InputWithPen
        answer={answers[0]}
        showAnswer={showAnswer}
        className="text-[50px] text-center w-[720px] bg-transparent"
        penClassName="left-0 w-[60px] top-[35px]"
        containerClassName="absolute top-[172px] left-[280px]"
      />
      <InputWithPen
        answer={answers[1]}
        showAnswer={showAnswer}
        className="text-[50px] text-center w-[720px] bg-transparent"
        penClassName="left-0 w-[60px] top-[35px]"
        containerClassName="absolute top-[317px] left-[280px]"
      />
      <InputWithPen
        answer={answers[2]}
        showAnswer={showAnswer}
        className="text-[50px] text-center w-[720px] bg-transparent"
        penClassName="left-0 w-[60px] top-[35px]"
        containerClassName="absolute top-[463px] left-[280px]"
      />
      <InputWithPen
        answer={answers[3]}
        showAnswer={showAnswer}
        className="text-[50px] text-center w-[720px] bg-transparent"
        penClassName="left-0 w-[60px] top-[35px]"
        containerClassName="absolute top-[608px] left-[280px]"
      />

      <CheckAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
    </>
  );
};

const Step2 = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <>
      <TitleContainer className="ml-4 mt-4">
        <div className="flex items-center gap-4">
          <img src="/ui/flower-icon-2.png" />
          글의 내용에 알맞은 단어를 골라 보자.
        </div>
      </TitleContainer>
      <div className="relaitve h-full flex justify-end items-end pr-5">
        <img src={IMAGE2.src} />
      </div>

      <CheckAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
    </>
  );
};
