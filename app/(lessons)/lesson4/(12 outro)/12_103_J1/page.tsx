"use client";

import IMAGE_BEFORE from "./bg_2.png";
import IMAGE_AFTER from "./bg_2_1.png";
import IMAGE_ROBOT from "./robot.png";
import { useState } from "react";
import { ActivityPageTemplate } from "@/app/pages/activity-page-template";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import BACKGROUND1 from "@/app/bgpng_temp/12/중등한문_나에게 힘이 되는 글36.png";
import { HeaderContainer } from "@/app/components/headers/header-container";
import { InputWithPen } from "@/app/components/input-with-pen";
import { OLD_TextareaWithPen } from "@/app/components/textarea/textarea-with-pen";

export default function Page() {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <ActivityPageTemplate lesson={4}>
        <div className="w-full h-full flex flex-col justify-start items-center overflow-y-scroll">
          <header className="mb-10 -ml-28">
            <h1 className="text-[60px] text-[#5e4141] tracking-tighter  font-bold text-center">
              성찰 일기 작성하기
            </h1>
            <HeaderContainer
              sound="/sound/4/p103_intro.mp3"
              className="text-center text-[35px] tracking-tighter animate__animated animate__flipInX"
              gap={1000}
            >
              Ⅳ단원에서 배운 문장을 하나 골라, 문장에 담긴 교훈을 <br />
              일주일간 내 삶에 적용해 보고 성찰 일기를 작성해 보자.
            </HeaderContainer>
            <img
              src={IMAGE_ROBOT.src}
              className="float-right -mt-[150px] translate-x-[190px]"
            />
          </header>

          <div className="relative">
            {showAnswer ? (
              <>
                <img
                  src={IMAGE_AFTER.src}
                  className="w-[1311px] mt-16 ml-6"
                />
                <p className="absolute bottom-[685px] left-[165px] font-haeseo text-[55px] tracking-[-2px] rotate-[-6.5deg] text-example">無道人之短</p>
              </>
            ) : (
              <img
                src={IMAGE_BEFORE.src}
                className="w-[1311px] mt-16 ml-6"
              />
            )}
            <p className="absolute top-[400px] left-[160px] font-haeseo text-[45px] tracking-[-5px] text-[#231815]">己所不欲</p>
            <p className="absolute top-[400px] left-[357px] font-haeseo text-[45px] tracking-[-5px] text-[#231815]">勿施於人</p>

            <div className="rotate-[5.5deg] absolute right-[195px] top-[900px] w-[450px]">
              <InputWithPen
                className="text-[35px] text-center bg-transparent"
                containerClassName="relative -top-[10px]"
                penClassName="w-[40px] left-1/2 -translate-x-1/2"
              />

              <OLD_TextareaWithPen
                className="w-[400px] text-[35px] text-center leading-tight bg-transparent"
                containerClassName="relative top-[10px]"
                penClassName="w-[40px] left-1/2 -translate-x-1/2 top-0"
                rows={3}
              />

              <OLD_TextareaWithPen
                className="w-[400px] text-[35px] text-center leading-tight bg-transparent"
                containerClassName="relative top-[15px]"
                penClassName="w-[40px] left-1/2 -translate-x-1/2 top-0"
                rows={2}
              />

              <OLD_TextareaWithPen
                className="w-[400px] text-[35px] text-center leading-tight bg-transparent"
                containerClassName="relative top-[30px]"
                penClassName="w-[40px] left-1/2 -translate-x-1/2 top-0"
                rows={2}
              />

            </div>
          </div>
        </div>
      </ActivityPageTemplate>

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
