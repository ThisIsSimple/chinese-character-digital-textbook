"use client";

import { PageInfoContext } from "@/app/utils/page-info";
import { usePathname } from "next/navigation";
import { useContext, useEffect } from "react";

export const StepContainer = ({
  maxStep,
}: {
  maxStep: number;
}) => {
  const { currentStep, setCurrentStep, setMaxStep } =
    useContext(PageInfoContext);
  setMaxStep(maxStep);

  return (
    <nav className="fixed left-[calc(50%_-_40px)] -translate-x-1/2 bottom-7 flex justify-center gap-[40px]">
      {Array.from({ length: maxStep }).map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentStep(index + 1)}
          className={`w-[44px] h-[44px] rounded-full border-[6px] ${currentStep === index + 1
            ? "bg-[#a26032] border-[#d7ac8c]"
            : "bg-[#717271] border-[#b8b9b9]"
            }`}
        ></button>
      ))}
    </nav>
  );
};
