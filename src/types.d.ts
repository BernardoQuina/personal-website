type Size = { width: number; height: number };

export type Measurements = { aboutMeContent: Size };

export type AnimationProps = {
  scrollYProgress: MotionValue<number>;
  measurements: Measurements;
};
