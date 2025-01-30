import { RefObject } from 'react';

type Size = { width: number; height: number };

export type Measurements = {
  aboutMeContent: Size;
  may22Jun24Content: Size;
  apr21May22Content: Size;
  latestProject: Size;
  awsArchitectContent: Size;
  k8sDeveloperContent: Size;
  viewportWidthTracker: Size;
  isMobile: boolean;
};

export type AnimationProps = {
  scrollYProgress: MotionValue<number>;
  measurements: Measurements;
};

export type ContentRefProps = {
  contentRef: RefObject<HTMLDivElement>;
};
