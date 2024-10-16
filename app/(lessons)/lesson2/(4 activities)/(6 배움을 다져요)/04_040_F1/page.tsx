"use client";

import { StrengthenLearningMainContentHeader } from "@/app/components/headers/strengthen-learning-main-content-header";
import { useState } from "react";
import IMAGE1_BEFORE from "./image1-before.png";
import IMAGE1_AFTER from "./image1-after.png";
import { ContentContainer } from "@/app/components/content-container";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import { SOUND } from "@/app/utils/sound-player";

export default function Page() {
  const [showAnswer, setShowAnswer] = useState(false);

  const sounds = [
    "001",
    "002",
    "003",
    "004",
    "005",
    "006",
    "007",
    "008",
    "009",
    "010",
  ].map((sound) => `/sound/2/40_${sound}.mp3`);

  return (
    <>
      <StrengthenLearningMainContentHeader
        title="사다리 타기를 하고 서로 만나는 한자를 결합하였을 때 완성되는 한자를 써 보자."
        sound=""
      />

      <ContentContainer className="!justify-start">
        <div className="relative">
          {showAnswer ? (
            <img src={IMAGE1_AFTER.src} />
          ) : (
            <img src={IMAGE1_BEFORE.src} />
          )}

          <div className="absolute left-[25px] top-0 grid grid-cols-5 gap-x-[80px] gap-y-[330px]">
            {sounds.map((sound) => (
              <button
                key={sound}
                className="w-[150px] h-[50px]"
                onClick={() => SOUND(sound).play()}
              />
            ))}
          </div>
        </div>
      </ContentContainer>

      <CheckAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
    </>
  );
}
