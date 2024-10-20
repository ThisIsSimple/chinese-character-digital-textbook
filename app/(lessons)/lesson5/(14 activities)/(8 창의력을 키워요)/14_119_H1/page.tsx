"use client";

import IMAGE from "./image.png";
import { useEffect, useState } from "react";
import { CreativityPageTemplate } from "@/app/pages/creativity-page-template";
import { CreativityTitleHeader } from "@/app/components/headers/creativity-title-header";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import { InputWithPen } from "@/app/components/input-with-pen";
import { TitleContainer } from "@/app/components/title-container";
import { StepContainer } from "@/app/components/step-container";
import BACKGROUND1 from "@/app/bgpng_temp/14/중등한문_사람만 귀한가요22.png";
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
        <TitleContainer className="ml-4 mt-4">
          <div className="flex items-center gap-4 text-[40px]">
            <img src="/ui/flower-icon-2.png" />
            생태계가 파괴되고 있는 사례를 찾아 써 보고 이 문제를 해결할 수 있는
            대안을 토론해 보자.
          </div>
        </TitleContainer>

        <ContentContainer>
          <div className="relative">
            <img src={IMAGE.src} />
          </div>
        </ContentContainer>
      </CreativityPageTemplate>

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
