"use client";

import { ThinkTogetherHeader } from "@/app/components/headers/think-together";
import { TitleContainer } from "@/app/components/title-container";
import { ContentContainer } from "@/app/components/content-container";
import { StepContainer } from "@/app/components/step-container";
import { useContext, useEffect, useState } from "react";
import { SOUND } from "@/app/utils/sound-player";
import { TextareaWithPen } from "@/app/components/textarea/textarea-with-pen";
import BACKGROUND1 from "@/app/bgpng_temp/12/중등한문_나에게 힘이 되는 글2.png";
import BACKGROUND2 from "@/app/bgpng_temp/12/중등한문_나에게 힘이 되는 글3.png";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import { BuddyButton } from "@/app/components/buttons/buddy-button";
import { GroupButton } from "@/app/components/buttons/group-button";
import { PageInfoContext } from "@/app/utils/page-info";

export default function Page() {
  const { currentStep: step, setCurrentStep: setStep } = useContext(PageInfoContext);

  return (
    <>
      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}
      <StepContainer maxStep={2} />
    </>
  );
}

const Step1 = () => {
  const answers = [
    "너는 할 수 있어.",
    "네가 하는 게 그렇지 뭐."
  ];
  const [showAnswer, setShowAnswer] = useState(false);

  const sound = "/sound/4/96/2.mp3"
  useEffect(() => {
    if (sound) {
      const soundInstance = SOUND(sound);
      const delay = 3000; // Delay in milliseconds (e.g., 1000 ms = 1 second)

      const playSound = setTimeout(() => {
        soundInstance.stop();
        soundInstance.play();
      }, delay);

      return () => {
        clearTimeout(playSound);
        soundInstance.stop();
      };
    }
  }, [sound]);

  return (
    <>
      <ThinkTogetherHeader
        title={<p className="-ml-2">나에게 힘이 되었던 말을 써 보자.</p>}
        sound="/sound/4/96/1.mp3"
      />

      <ContentContainer className="!justify-start">
        <div className="bg-[#f2efec] p-5 rounded-3xl w-[1400px] h-[220px]"></div>

        <TextareaWithPen
          answer={answers[0]}
          showAnswer={showAnswer}
          containerClassName={`absolute resize-none w-[1265px] left-[165px] top-[10px] text-[55px] leading-[65px] tracking-tighter break-keep bg-transparent py-1  ${showAnswer ? "text-example" : ""}`}
          penClassName="h-[60px] top-[10px] left-[80px]"
          rows={3}
        />
      </ContentContainer>

      <div
        className="relative ml-[110px] text-[55px] leading-[62px] tracking-[-2.5px] max-w-[1500px] mx-auto break-keep left-20"
      >
        <div className="relative w-[1000px] -top-[100px]">
          <ul className="list-disc marker:text-[#567c56] pl-0">
            <li
              className={`absolute leading-tight max-w-[1400px] break-keep `}
            >
              <p className="-ml-2">들었을 때 힘이 쭉 빠졌던 말을 써 보자.</p>
            </li>
          </ul>
        </div>
      </div>

      <ContentContainer className="!justify-start">
        <div className="bg-[#f2efec] p-5 rounded-3xl w-[1400px] h-[220px] mt-0"></div>

        <TextareaWithPen
          answer={answers[1]}
          showAnswer={showAnswer}
          containerClassName={`absolute resize-none w-[1265px] left-[165px] top-[10px] text-[55px] leading-[65px] tracking-tighter break-keep bg-transparent py-1  ${showAnswer ? "text-example" : ""}`}
          penClassName="h-[60px] top-[10px] left-[80px]"
          rows={3}
        />

      </ContentContainer>

      <ExampleAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
      <img src={BACKGROUND1.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
};

const Step2 = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <ThinkTogetherHeader
        title={<p className="-ml-2">학급 친구들과 함께 ‘힘이 되는 말’ 세 가지를 뽑아 보자.</p>}
        sound="/sound/4/96/3.mp3"
      />

      <BuddyButton className="animate__animated animate__fadeIn animate__delay-1s absolute right-[350px] top-[181px] w-[100px] z-1" />
      <GroupButton className="animate__animated animate__fadeIn animate__delay-1s absolute right-[220px] top-[186px] z-1" />

      <ContentContainer className="!justify-start">
        <div className="bg-[#f2efec] p-5 rounded-3xl w-[1400px] h-[450px]"></div>

        <TextareaWithPen
          // answer={answer}
          // showAnswer={showAnswer}
          containerClassName={`absolute resize-none w-[1265px] left-[165px] top-[10px] text-[55px] leading-[70px] tracking-tighter break-keep bg-transparent py-1"}`}
          penClassName="h-[60px] top-[10px] left-[80px]"
          rows={6}
        />
      </ContentContainer>


      <img src={BACKGROUND2.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
};
