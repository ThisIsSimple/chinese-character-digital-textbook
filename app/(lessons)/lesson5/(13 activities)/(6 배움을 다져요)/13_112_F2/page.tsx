"use client";

import { StrengthenLearningWordHeader } from "@/app/components/headers/strengthen-learning-word-header";
import IMAGE1 from "./bg_1.png";
import { InputWithPen } from "@/app/components/input-with-pen";
import { ContentContainer } from "@/app/components/content-container";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import { useState } from "react";
import { SOUND } from "@/app/utils/sound-player";
import BACKGROUND1 from "@/app/bgpng_temp/13/중등한문_귀에 대고 말한 까닭21.png";

export default function Page() {
  const [showAnswer, setShowAnswer] = useState(false);
  const answers = ["家畜", "同行", "劣惡"];

  return (
    <>
      <StrengthenLearningWordHeader
        title={
          <p className="-mr-20">
            한자 카드를 결합하여 아래의 설명에 해당하는 단어를 만들어 보자.
          </p>
        }
        sound="/sound/5/112-i-3.mp3"
      />

      <ContentContainer className="!justify-start -top-[50px] left-16">
        <img src={IMAGE1.src} />
        <div className="absolute left-[230px] top-[50px] grid grid-cols-6 gap-[55px] w-[1040px] h-[90px] bg-transparent ">
          <button onClick={() => SOUND("/sound/5/p112_word000.mp3").play()}>
          </button>
          <button onClick={() => SOUND("/sound/5/p112_word001.mp3").play()}></button>
          <button onClick={() => SOUND("/sound/5/p112_word002.mp3").play()}></button>
          <button onClick={() => SOUND("/sound/5/p112_word003.mp3").play()}></button>
          <button onClick={() => SOUND("/sound/5/p112_word004.mp3").play()}></button>
          <button onClick={() => SOUND("/sound/5/p112_word005.mp3").play()}></button>
        </div>

        <InputWithPen
          answer={answers[0]}
          showAnswer={showAnswer}
          className={`w-[200px] text-center font-haeseo bg-transparent text-[55px] tracking-tighter`}
          penClassName="left-1/2 -translate-x-1/2 h-[40px]"
          containerClassName="absolute top-[398px] left-[190px] -mt-1 ml-1"
          />
          <InputWithPen
          answer={answers[1]}
          showAnswer={showAnswer}
          className={`w-[200px] text-center font-haeseo bg-transparent text-[55px] tracking-tighter`}
          penClassName="left-1/2 -translate-x-1/2 h-[40px]"
          containerClassName="absolute top-[398px] left-[640px] -mt-1 ml-1"
          />
          <InputWithPen
          answer={answers[2]}
          showAnswer={showAnswer}
          className={`w-[200px] text-center font-haeseo bg-transparent text-[55px] tracking-tighter`}
          penClassName="left-1/2 -translate-x-1/2 h-[40px]"
          containerClassName="absolute top-[398px] left-[1110px] -mt-1 ml-1"
          />

      </ContentContainer>

      <CheckAnswerButton
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
