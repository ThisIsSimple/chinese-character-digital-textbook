"use client";

import { ContentContainer } from "@/app/components/content-container";
import { HeaderContainer } from "@/app/components/headers/header-container";
import { TitleContainer2 } from "@/app/components/title-container";
import { useEffect, useState } from "react";
import IMAGE1 from "./image1.png";
import IMAGE2 from "./image2.png";
import IMAGE3 from "./image3.png";
import { StepContainer } from "@/app/components/step-container";
import { TextareaWithPen } from "@/app/components/textarea/textarea-with-pen";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import BACKGROUND1 from "@/app/bgpng_temp/12/중등한문_나에게 힘이 되는 글4.png";
import BACKGROUND2 from "@/app/bgpng_temp/12/중등한문_나에게 힘이 되는 글5.png";
import BACKGROUND3 from "@/app/bgpng_temp/12/중등한문_나에게 힘이 되는 글6.png";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";

export default function Page() {
  const [step, setStep] = useState(1);

  const [showAnswer, setShowAnswer] = useState(false);
  const answer = [
    "반려묘가 털 뭉치 장난감을 능숙하게 가지고 노는 모습을 그렸다.",
    "공책에 목표를 기록하는 모습을 그렸다."
  ];

  useEffect(() => {
    setShowAnswer(false);
  }, [step]);

  return (
    <>
      <HeaderContainer>
        <img src="/header/preview_chinese_characters.png" alt="" />
      </HeaderContainer>

      <TitleContainer2 className="mt-10" sound="/sound/4/97-i.mp3">
        <p className="text-[45px] tracking-tight -mt-1 flex items-start gap-5 break-keep">
          <img src="/ui/flower-icon.png" />
          보기 와 같이 한자의 뜻이 잘 드러나도록 한자를 바탕으로 그림을 그리고 표현한 의도를 써 보자.
        </p>
      </TitleContainer2>

      <ContentContainer className="!justify-start -mt-12 pl-10">
        <div className="relative w-full pb-20">
          {step === 1 && (
            <div className="relative mt-20 ml-14">
              <img src={IMAGE1.src} alt="" />
            </div>
          )}
          {step === 2 && (
            <div className="relative mt-20 ml-14">
              <img src={IMAGE2.src} alt="" />
              <TextareaWithPen
                answer={answer[0]}
                showAnswer={showAnswer}
                containerClassName={`absolute resize-none left-[800px] top-[130px] text-[42px] tracking-tighter w-[500px] ml-3 leading-[60px] break-keep ${showAnswer ? "text-example ml-3" : ""}`}
                penClassName="h-[60px] top-[130px] left-[800px]"
                rows={3}
              />
            </div>
          )}
          {step === 3 && (
            <div className="relative mt-20 ml-14">
              <img src={IMAGE3.src} alt="" />
              <TextareaWithPen
                answer={answer[0]}
                showAnswer={showAnswer}
                containerClassName={`absolute resize-none left-[800px] top-[130px] text-[42px] tracking-tighter w-[500px] ml-3 leading-[60px] break-keep ${showAnswer ? "text-example ml-3" : ""}`}
                penClassName="h-[60px] top-[130px] left-[800px]"
                rows={3}
              />
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
      <img src={
        step === 1 ? BACKGROUND1.src :
          step === 2 ? BACKGROUND2.src :
            step === 3 ? BACKGROUND3.src : ""
      } className="debug absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
}
