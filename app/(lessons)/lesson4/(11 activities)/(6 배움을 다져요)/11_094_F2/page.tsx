"use client";

import IMAGE from "./image.png";
import { ContentContainer } from "@/app/components/content-container";
import { StepContainer } from "@/app/components/step-container";
import { useState } from "react";
import { InputWithPen } from "@/app/components/input-with-pen";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import { SOUND } from "@/app/utils/sound-player";
import BACKGROUND1 from "@/app/bgpng_temp/5/중등한문_한자를 알면 틀리지 않는 일상 어휘13.png";
import { StrengthenLearningMainContentHeader } from "@/app/components/headers/strengthen-learning-main-content-header";

export default function Page() {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <>
      <StrengthenLearningMainContentHeader
        title="문장의 의미를 생각해 보고, 질문에 답해 보자."
        sound=""
      />

      <ContentContainer className="!justify-start left-10 -top-16">
        <img src={IMAGE.src} />
      </ContentContainer>

      <CheckAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
    </>
  );
}
