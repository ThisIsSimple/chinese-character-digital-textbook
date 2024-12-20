"use client";

import { PageInfoContext } from "@/app/utils/page-info";
import { PropsWithChildren, useContext } from "react";

export default function Lesson1Layout({ children }: PropsWithChildren) {
  const { setTitle, setCurrentLesson } = useContext(PageInfoContext);
  setTitle("III. 성어 이야기 여행");
  setCurrentLesson(3);

  return children;
}
