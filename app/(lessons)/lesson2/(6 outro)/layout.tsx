"use client";

import AutoplaySound from "@/app/components/autoplay-sound";
import { PageInfoContext } from "@/app/utils/page-info";
import { PropsWithChildren, useContext } from "react";

export default function ActivityLayout({ children }: PropsWithChildren) {
  const { setSubtitle, setCurrentChapter } = useContext(PageInfoContext);
  setSubtitle("1. 한자, 어디서 봤어?");
  setCurrentChapter(1);

  return (
    <>
      {children}
      {/* <AutoplaySound /> */}
    </>
  );
}
