"use client";

import { SummaryPageTemplate } from "@/app/pages/summary-page-template";
import IMAGE1 from "./image1.png";
import IMAGE2 from "./image2.png";
import IMAGE3 from "./image3.png";
import IMAGE4 from "./image4.png";
import { useState } from "react";
import { StepContainer } from "@/app/components/step-container";
import BACKGROUND1 from "@/app/bgpng_temp/6/중등한문_한자를 알면 쉬운 교과서 속 어휘29.png";
import BACKGROUND2 from "@/app/bgpng_temp/6/중등한문_한자를 알면 쉬운 교과서 속 어휘30.png";

export default function Page() {
  const [step, setStep] = useState(1);

  return (
    <>
      <SummaryPageTemplate lesson={2}>
        <div className="w-full h-full">
          {step === 1 && <Step1 />}
          {step === 2 && <Step2 />}
          {step === 3 && <Step3 />}
          {step === 4 && <Step4 />}
        </div>
      </SummaryPageTemplate>
      <StepContainer maxStep={4} step={step} onStepChange={setStep} />
      {/* <img src={BACKGROUND2.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" /> */}
    </>
  );
}

const Step1 = () => {
  return (
    <div className="relative pl-[90px]">
      <div className="flex items-center gap-1">
        <div className="animate__animated animate__flipInX absolute -left-11 -top-1 w-[60px] h-[60px] rounded-full bg-[#e64532] flex justify-center items-center">
          <span className="font-cookierun text-white -ml-1">13</span>
        </div>
        <div className="relative -ml-14 -mt-2">
          <span className="font-cookierun text-[#74210d]">
            귀에 대고 말한 까닭
          </span>
        </div>
      </div>

      <div className="-ml-10 mt-10">
        <img
          src={IMAGE1.src}
          className="animate__animated animate__fadeIn relative top-2"
        />
      </div>
    </div>
  );
};

const Step2 = () => {
  return (
    <div className="relative pl-[90px]">
      <div className="flex items-center gap-1">
        <div className="animate__animated animate__flipInX absolute -left-11 -top-1 w-[60px] h-[60px] rounded-full bg-[#e64532] flex justify-center items-center">
          <span className="font-cookierun text-white -ml-1">14</span>
        </div>
        <div className="relative -ml-14 -mt-2">
          <span className="font-cookierun text-[#74210d]">사람만 귀한가요</span>
        </div>
      </div>

      <div className="-ml-10 mt-10">
        <img
          src={IMAGE2.src}
          className="animate__animated animate__fadeIn relative top-2"
        />
      </div>
    </div>
  );
};

const Step3 = () => {
  return (
    <div className="relative pl-[90px]">
      <div className="flex items-center gap-1">
        <div className="animate__animated animate__flipInX absolute -left-11 -top-1 w-[60px] h-[60px] rounded-full bg-[#e64532] flex justify-center items-center">
          <span className="font-cookierun text-white -ml-1">15</span>
        </div>
        <div className="relative -ml-14 -mt-2">
          <span className="font-cookierun text-[#74210d]">돌에 꽂힌 화살</span>
        </div>
      </div>

      <div className="-ml-10 mt-10">
        <img
          src={IMAGE3.src}
          className="animate__animated animate__fadeIn relative top-2"
        />
      </div>
    </div>
  );
};

const Step4 = () => {
  return (
    <div className="relative pl-[90px]">
      <div className="flex items-center gap-1">
        <div className="animate__animated animate__flipInX absolute -left-11 -top-1 w-[60px] h-[60px] rounded-full bg-[#e64532] flex justify-center items-center">
          <span className="font-cookierun text-white -ml-1">16</span>
        </div>
        <div className="relative -ml-14 -mt-2">
          <span className="font-cookierun text-[#74210d]">
            제주 거상 김만덕
          </span>
        </div>
      </div>

      <div className="-ml-10 mt-10">
        <img
          src={IMAGE4.src}
          className="animate__animated animate__fadeIn relative top-2"
        />
      </div>
    </div>
  );
};
