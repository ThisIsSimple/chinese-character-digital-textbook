"use client";

import { ContentContainer } from "@/app/components/content-container";
import { HeaderContainer } from "@/app/components/headers/header-container";
import { TitleContainer } from "@/app/components/title-container";
import { useEffect, useState } from "react";
import IMAGE1 from "./image1.png";
import IMAGE2 from "./image2.png";
import IMAGE3 from "./image3.png";
import { StepContainer } from "@/app/components/step-container";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import BACKGROUND1 from "@/app/bgpng_temp/12/중등한문_나에게 힘이 되는 글4.png";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";

export default function Page() {
  const [step, setStep] = useState(1);

  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    setShowAnswer(false);
  }, [step]);

  return (
    <>
      <HeaderContainer>
        <img src="/header/preview_chinese_characters.png" alt="" />
      </HeaderContainer>

      <TitleContainer className="mt-10">
        <p className="tracking-tight flex items-start gap-5">
          <img src="/ui/flower-icon.png" />
          제시된 한자 카드를 보고, 설명에 해당하는 한자를 써 보자.
        </p>
      </TitleContainer>

      <ContentContainer className="!justify-start mt-4 pl-10">
        <div className="relative w-full pb-20">
          {step === 1 && (
            <div className="relative mt-14 mb-10">
              <img src={IMAGE1.src} alt="" />
            </div>
          )}
          {step === 2 && (
            <div className="relative mt-14">
              <img src={IMAGE2.src} alt="" />
            </div>
          )}
          {step === 3 && (
            <div className="relative mt-14">
              <img src={IMAGE3.src} alt="" />
            </div>
          )}
        </div>
      </ContentContainer>

      {step === 2 || step === 3 ? (
        <ExampleAnswerButton
          active={showAnswer}
          onClick={() => setShowAnswer(!showAnswer)}
        />
      ) : null}

      <StepContainer maxStep={3} step={step} onStepChange={setStep} />
      <img src={BACKGROUND1.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
}
