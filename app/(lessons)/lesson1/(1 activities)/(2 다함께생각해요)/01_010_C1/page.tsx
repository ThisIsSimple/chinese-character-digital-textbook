"use client";

import { ThinkTogetherHeader } from "@/app/components/headers/think-together";
import { VideoThumbnail, VideoThumbnail_big } from "@/app/components/video-thumbnail";
import { useContext, useState } from "react";
import { StepContainer } from "@/app/components/step-container";

import VIDEO_THUMBNAIL from "./video-thumbnail.png";
import SYMBOL from "./symbol.png";
import TEXTAREA from "./textarea.png";
import EXAMPLE_ANSWER from "./example-answer.png";
import { PageInfoContext } from "@/app/utils/page-info";
// import BACKGROUND from "@/app/bgpng_temp/1/중등한문_한자,어디서봤어2.png"
import BACKGROUND from "@/app/bgpng_temp/1/중등한문_한자,어디서봤어3.png"

export default function Page() {
  const { setSubtitle } = useContext(PageInfoContext);
  setSubtitle("다 함께 생각해요");
  
  const [step, setStep] = useState(1);

  const answer = "도로와 유적 표지판에서 한자 표기를 보았다.";
  const [showAnswer, setShowAnswer] = useState(false);
  const [value, setValue] = useState("");

  return (
    <>
      <ThinkTogetherHeader title="한자를 만난 경험을 떠올려 보자."/>

      {step === 1 ? (
        <div className="h-full flex justify-center items-center">
          <VideoThumbnail_big
            thumbnail={VIDEO_THUMBNAIL.src}
            video="/video/animation/1-1_10.mp4"
            width={972}
            height={526}
          />
        </div>
      ) : null}

      {step === 2 ? (
        <>
          <div className="h-full flex justify-center items-center mb-[100px]">
            <div>
              <div className="animate__animated animate__flipInX flex items-center gap-4">
                <img src={SYMBOL.src} className="mb-3" />
                <p className="text-[55px]">
                  한자를 어디에서 보았는지 자기 경험을 써 보자.
                </p>
              </div>

              <div className="relative top-3">
                {!value && !showAnswer ? (
                  <img
                    src="/ui/textarea-pen.png"
                    className="absolute pointer-events-none"
                    style={{
                      height: 62,
                      top: 48,
                      left: 70
                    }}
                  />
                ) : null}
                <textarea
                  value={showAnswer ? answer : value}
                  onChange={(e) => setValue(e.target.value)}
                  className={`absolute resize-none left-0 top-0 text-[55px] bg-transparent w-full h-full ml-3 px-16 py-11 leading-[76px] ${
                    showAnswer ? "text-example ml-3" : ""
                  }`}
                  rows={3}
                ></textarea>
                <img src={TEXTAREA.src} className="" />
              </div>
            </div>
          </div>
          <button
            className="absolute bottom-0 right-32"
            onClick={() => setShowAnswer(!showAnswer)}
          >
            <img src={EXAMPLE_ANSWER.src} />
          </button>
        </>
      ) : null}

      <StepContainer step={step} maxStep={2} onStepChange={setStep} />
      <img src={BACKGROUND.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
}
