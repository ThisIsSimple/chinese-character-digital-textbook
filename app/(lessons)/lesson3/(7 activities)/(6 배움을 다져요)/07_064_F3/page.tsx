"use client";

import { StrengthenLearningWordHeader } from "@/app/components/headers/strengthen-learning-word-header";
import IMAGE_BEFORE from "./image-before.png";
import IMAGE_AFTER from "./image-after.png";
import { ContentContainer } from "@/app/components/content-container";
import { StepContainer } from "@/app/components/step-container";
import { useState } from "react";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import { InputWithPen } from "@/app/components/input-with-pen";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import { SOUND } from "@/app/utils/sound-player";
import BACKGROUND1 from "@/app/bgpng_temp/7/중등한문_언어생활 속의 성어124.png"
import BACKGROUND2 from "@/app/bgpng_temp/7/중등한문_언어생활 속의 성어125.png"
import BACKGROUND3 from "@/app/bgpng_temp/7/중등한문_언어생활 속의 성어126.png"

export default function Page() {
  return (
    <>
      <StrengthenLearningWordHeader
        title={
          "한자 카드를 결합하여 문장의 빈칸에 해당하는 단어를 만들어 보자."
        }
        sound=""
      />

      <Step1 />
    </>
  );
}

const Step1 = () => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <ContentContainer className="!justify-start">
        <div className="relative">
          {showAnswer ? (
            <img src={IMAGE_AFTER.src} />
          ) : (
            <img src={IMAGE_BEFORE.src} />
          )}
        </div>
      </ContentContainer>

      <ExampleAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
      <img src={BACKGROUND1.src} className="absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
};
