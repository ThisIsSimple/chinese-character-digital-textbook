"use client";

import BACKGROUND from "./assets/background.png";
import BUTTON from "./assets/button.png";
import ACTIVE_BUTTON from "./assets/active-button.png";
import CHARACTER_CONTAINER from "./assets/character-container.png";
import { useContext, useEffect, useMemo, useState } from "react";
import { Howl } from "howler";
import { PageInfoContext } from "@/app/utils/page-info";
import { StepContainerArrow } from "@/app/components/step-container-arrow/step-container-arrow";
import { clickSound } from "@/app/utils/click-sound";
import { Button } from "@/app/components/buttons/button";
import { activityStartSound } from "@/app/utils/activity-start-sound";

type Props = {
  characters: {
    chinese: string;
    reading: string | string[]; // 천
    meaning: string | string[]; // 하늘
    sound: string;
    fontSize?: number;
  }[];
};

export const LearnNewCharacterPageTemplate = ({ characters }: Props) => {
  const { currentStep: step, setCurrentStep: setStep } = useContext(PageInfoContext);
  const pages = useMemo(() => Math.ceil(characters.length / 8), [characters]);

  const [showKorean, setShowKorean] = useState<boolean>(false);
  const [isFirstShown, setIsFirstShown] = useState<boolean>(true);

  const [indexes, setIndexes] = useState<number[]>([]);

  const [playingSound, setPlayingSound] = useState<number | null>(null);

  const resetState = () => {
    setIndexes(Array.from(Array(characters.length).keys()).map(() => -1));
  };

  useEffect(() => {
    if (showKorean) {
      setIndexes(Array.from(Array(characters.length).keys()).map(() => 1));
    } else {
      if (isFirstShown) {
        resetState();
        setIsFirstShown(false);
      } else {
        setIndexes(Array.from(Array(characters.length).keys()).map(() => 0));
      }
    }
  }, [showKorean]);

  useEffect(() => {
    setIsFirstShown(true);
    setShowKorean(false);
    resetState();
    Howler.stop();
    // activityStartSound.play();
  }, [step]);

  return (
    <div
      className="relative w-full h-full"
      style={{
        background: `url('${BACKGROUND.src}') no-repeat center center`,
      }}
    >
      <Button
        className="absolute right-[110px] top-[60px] animate__animated animate__slideInRight"
        onClick={() => {
          clickSound.play();
          setShowKorean(!showKorean);
        }}
      >
        <img src={showKorean ? ACTIVE_BUTTON.src : BUTTON.src} alt="button" />
      </Button>
      <div className="w-[1540px] absolute left-1/2 -translate-x-1/2 top-[160px] grid grid-cols-4 gap-x-[20px] gap-y-[12px]">
        {characters
          .filter((_, i) => (step - 1) * 8 <= i && i < step * 8)
          .map((character, _index) => {
            const index = _index + (step - 1) * 8;
            return (
              <div
                key={index}
                className="w-[370px] h-[370px] flex flex-col justify-center items-center cursor-pointer"
                style={{
                  background: `url('${CHARACTER_CONTAINER.src}') no-repeat center center`,
                }}
                onClick={() => {
                  if (playingSound) {
                    Howler.stop();
                  }
                  clickSound.play();
                  if (indexes[index] === 1) {
                    setIndexes(indexes.map((v, i) => (i === index ? 0 : v)));
                  } else {
                    setPlayingSound(
                      new Howl({
                        src: character.sound,
                      }).play(),
                    );
                    setIndexes(indexes.map((v, i) => (i === index ? 1 : v)));
                  }
                }}
              >
                <p className="font-haeseo text-[170px]">{character.chinese}</p>
                <div
                  className={`relative -top-9 animate__animated opacity-0 ${indexes[index] === -1
                    ? ""
                    : indexes[index] === 1
                      ? "animate__flipInX opacity-100"
                      : "animate__flipOutX opacity-100"
                    }`}
                  style={{
                    fontSize: `${character.fontSize ?? 55}px`,
                  }}
                >
                  {Array.isArray(character.reading) ? (
                    <>
                      {Array.from(Array(character.reading.length)).map(
                        (_, index) => (
                          <span key={index} className="mr-4">
                            <span className="font-chosun text-main-content mr-4">
                              {character.reading[index]}
                            </span>
                            <span className="font-chosun">
                              {character.meaning[index]}
                              {character.reading.length - 1 !== index ? (
                                <span>,</span>
                              ) : null}
                            </span>
                          </span>
                        ),
                      )}
                    </>
                  ) : (
                    <>
                      <span className="font-chosun text-main-content mr-4">
                        {character.reading}
                      </span>
                      <span className="font-chosun">
                        {character.meaning}
                      </span>
                    </>
                  )}
                </div>
              </div>
            );
          })}
      </div>

      {pages !== 1 ? (
        <StepContainerArrow
          maxStep={pages}
          step={step}

          className="absolute w-full bottom-[5px] mb-0"
        />
      ) : null}
    </div>
  );
};
