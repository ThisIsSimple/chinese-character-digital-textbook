import { createContext, Dispatch, SetStateAction } from "react";

export const PageInfoContext = createContext<{
  title: string;
  subtitle: string;
  setTitle: Dispatch<SetStateAction<string>>;
  setSubtitle: Dispatch<SetStateAction<string>>;
  currentStep: number;
  maxStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
  setMaxStep: Dispatch<SetStateAction<number>>;
  navigationDirection: "prev" | "next" | null;
  setNavigationDirection: Dispatch<SetStateAction<"prev" | "next" | null>>;
  pageNumber: number;

  currentLesson: number;
  setCurrentLesson: Dispatch<SetStateAction<number>>;
  currentChapter: number;
  setCurrentChapter: Dispatch<SetStateAction<number>>;
  currentSubChapter: string;
  setCurrentSubChapter: Dispatch<SetStateAction<string>>;

  scale: number;

  isPageReady: boolean;
  setIsPageReady: Dispatch<SetStateAction<boolean>>;
  ignoreRightStep: boolean;
  setIgnoreRightStep: Dispatch<SetStateAction<boolean>>;

  soundOnStep: Howl | string | null;
  setSoundOnStep: Dispatch<SetStateAction<Howl | string | null>>;
}>({
  title: "",
  subtitle: "",
  setTitle: () => { },
  setSubtitle: () => { },
  currentStep: 1,
  maxStep: 1,
  setCurrentStep: () => { },
  setMaxStep: () => { },
  navigationDirection: null,
  setNavigationDirection: () => { },
  pageNumber: 1,
  currentLesson: 1,
  setCurrentLesson: () => { },
  currentChapter: 1,
  setCurrentChapter: () => { },
  currentSubChapter: "",
  setCurrentSubChapter: () => { },

  scale: 1,

  isPageReady: false,
  setIsPageReady: () => { },
  ignoreRightStep: false,
  setIgnoreRightStep: () => { },

  soundOnStep: null,
  setSoundOnStep: () => { },
});
