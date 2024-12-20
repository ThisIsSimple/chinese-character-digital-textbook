"use client";

import { SoundButton2 } from "@/app/components/buttons/sound-button2";
import { ContentContainer } from "@/app/components/content-container";
import { StepContainer } from "@/app/components/step-container";
import { useContext, useEffect, useState } from "react";
import { Howl } from "howler";
import IMAGE1 from "./image.png";
import { WordStoryHeader } from "@/app/components/headers/word-story-header";
import BACKGROUND1 from "@/app/bgpng_temp/13/중등한문_귀에 대고 말한 까닭22.png";
import BACKGROUND2 from "@/app/bgpng_temp/13/중등한문_귀에 대고 말한 까닭23.png";
import { CultureHeader } from "@/app/components/headers/culture-header";
import { PageInfoContext } from "@/app/utils/page-info";

const sound1 = new Howl({
  src: "/sound/5/113_story-1.mp3",
});
const sound2 = new Howl({
  src: "/sound/5/113_story-2.mp3",
});

export default function Page() {
  const { currentStep: step, setCurrentStep: setStep } = useContext(PageInfoContext);

  const [isReading, setIsReading] = useState(false);

  useEffect(() => {
    sound1.on("play", () => setIsReading(true));
    sound1.on("end", () => setIsReading(false));
    sound1.on("stop", () => setIsReading(false));

    sound2.on("play", () => setIsReading(true));
    sound2.on("end", () => setIsReading(false));
    sound2.on("stop", () => setIsReading(false));
  }, []);

  [
    {
      text: "조선 초기의 문신 황희는 우의정, 좌의정, 영의정 등 최고의 벼슬을 두루 거쳤기에 황희 정승이라 불린다.",
      start: 0,
      end: 10110,
    },
    {
      text: "세종 때에는 무려 18년간 영의정으로 재임하였다.",
      start: 10110,
      end: 14510,
    },
    {
      text: "어느 눈 내리는 겨울날, 황희 정승의 단벌 관복의 솜을 뜯어내어 빨래하고 있는데 갑자기 입궐하라는 소식이 왔다.",
      start: 14510,
      end: 23930,
    },
    {
      text: "황희는 급히 얼기설기 솜을 꿰맨 관복을 입고 궁에 들어가게 되었다.",
      start: 23930,
      end: 30458,
    },
  ];
  [
    {
      text: "솜이 삐져나온 관복을 입은 황희의 모습을 본 세종이 그 이유를 듣고 한 나라의 재상이 어찌 관복 한 벌로 겨울을 나겠냐며 비단을 내리도록 하였다.",
      start: 0,
      end: 11866,
    },
    {
      text: "그러자 황희는 “지금 이 나라 백성들은 연이은 흉년에 헐벗고 굶주리고 있습니다. 그런데 어찌 정승으로서 몸에 비단을 걸치겠습니까? 이 솜옷 한 벌로 충분합니다.”라고 말하였다.",
      start: 11866,
      end: 25806,
    },
    {
      text: "이에 세종은 비단을 내리라는 명을 거두었다.",
      start: 25806,
      end: 30511,
    },
  ];

  return (
    <>
      <CultureHeader title={"청렴한 관리 황희 정승"} />

      <SoundButton2
        className="absolute top-[110px] left-[890px] animate__animated animate__bounceIn animate__delay-2s z-10"
        active={isReading}
        onClick={() => {
          if (isReading) {
            sound1.stop();
            sound2.stop();
          } else {
            if (step === 1) sound1.play();
            else sound2.play();
          }
        }}
      />

      <ContentContainer>
        {step === 1 && (
          <div className="relative -top-[95px] w-[1460px]">
            <div
              className={`bg-[#f4ede1] rounded-[50px] px-14 pt-8 pb-8 text-[45px] leading-[70px] tracking-[-1.5px] break-keep transition-colors duration-[2000ms] ${isReading ? "text-reading" : ""
                }`}
            >
              조선 초기의 문신 황희는 우의정, 좌의정, 영의정 등 최고의 벼슬을
              두루 거쳤기에 황희 정승이라 불린다. 세종 때에는 무려 18년간
              영의정으로 재임하였다.
              <br />
              <br />
              어느 눈 내리는 겨울날, 황희 정승의 단벌 관복의 솜을 뜯어내어
              빨래하고 있는데 갑자기 입 하라는 소식이 왔다. 황희는 급히 얼기설기
              솜을 꿰맨 관복을 입고 궁에 들어가게 되었다.
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="-mt-[330px] w-[1460px]">
            <div
              className={`bg-[#f4ede1] rounded-[50px] px-14 pt-8 pb-8 text-[45px] leading-[70px] tracking-[-1.5px] break-keep transition-colors duration-[2000ms] ${isReading ? "text-reading" : ""
                }`}
            >
              솜이 삐져나온 관복을 입은 황희의 모습을 본 세종이 그 이유를 듣고
              한 나라의 재상이 어찌 관복 한 벌로 겨울을 나겠냐며 비단을 내리도록
              하였다. 그러자 황희는 “지금 이 나라 백성들은 연이은 흉년에 헐벗고
              굶주리고 있습니다. 그런데 어찌 정승으로서 몸에 비단을
              걸치겠습니까? 이 솜옷 한 벌로 충분합니다.” 라고 말하였다. 이에
              세종은 비단을 내리라는 명을 거두었다.
            </div>
            <div className="absolute bottom-20 mr-20 right-0">
              <img src={IMAGE1.src} />
            </div>
          </div>
        )}
      </ContentContainer>

      <StepContainer maxStep={2} />
      <img
        src={BACKGROUND2.src}
        className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />
    </>
  );
}
