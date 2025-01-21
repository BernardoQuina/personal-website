import { motion, MotionValue, useTransform } from 'motion/react';
import { RefObject } from 'react';

type Props = {
  scrollYProgress: MotionValue<number>;
  aboutMeContentHeight: number;
};

export function AboutMeTag({ scrollYProgress, aboutMeContentHeight }: Props) {
  const scale = useTransform(scrollYProgress, [0, 0.1], [0.7, 1]);
  const x = useTransform(scrollYProgress, [0, 0.1], [17, -32]);
  const y = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2],
    [150, -54, -45 - aboutMeContentHeight / 2],
  );

  const dashOpacity = useTransform(scrollYProgress, [0.1, 0.15], [1, 0]);
  const closingBracketX = useTransform(scrollYProgress, [0.1, 0.2], [0, -14]);

  const lineGuideHeight = useTransform(scrollYProgress, [0.1, 0.2], [0, 300]);

  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
      <motion.a href="#snap-3" style={{ scale, x, y, opacity }}>
        <h3 className="min-w-[7.5rem] text-xl font-medium">
          <span className="text-orange-400">{'<'}</span>
          AboutMe
          <motion.span
            className="text-orange-400"
            style={{ opacity: dashOpacity }}
          >
            {' '}
            /
          </motion.span>
          <motion.span
            className="inline-block text-orange-400"
            style={{ x: closingBracketX }}
          >
            {'>'}
          </motion.span>
        </h3>
        <motion.div
          className="absolute left-1 top-8 bg-gray-300 dark:bg-gray-700"
          style={{ width: 1, height: lineGuideHeight }}
        />
      </motion.a>
    </div>
  );
}

type AboutMeContentProps = {
  scrollYProgress: MotionValue<number>;
  contentRef: RefObject<HTMLDivElement>;
};

export function AboutMeContent({
  scrollYProgress,
  contentRef,
}: AboutMeContentProps) {
  const scale = useTransform(scrollYProgress, [0.1, 0.2], [0.1, 1]);
  const x = useTransform(scrollYProgress, [0, 0.1], [0, 0]);
  const y = useTransform(scrollYProgress, [0, 0.1], [150, -30]);

  const opacity = useTransform(scrollYProgress, [0.1, 0.2], [0, 1]);

  return (
    <div
      className="fixed left-[50%] top-[50%] -z-10 translate-x-[-50%] translate-y-[-50%]"
      ref={contentRef}
    >
      <motion.div
        className="w-[calc(100vw-4rem)] max-w-[30rem] gap-2 sm:gap-4"
        style={{ scale, x, y, opacity }}
      >
        <p className="text-base">
          I&apos;m focused on building robust, type-safe systems where cloud
          services and applications integrate seamlessly. From crafting Node.js
          APIs and React frontends to architecting AWS infrastructure, I thrive
          on creating scalable solutions that are reliable and maintainable.
        </p>
        <p>
          After two years as a full-stack developer at PrimeIT where I worked
          across client projects spanning the entire stack, I took some time to
          travel and strengthen my cloud architecture and algorithmic skills. My
          expertise is backed by AWS Solutions Architect Associate and
          Kubernetes Developer (CKAD) certifications.
        </p>
        <p>
          Away from the keyboard, I love exploring forests and mountains with my
          girlfriend and dog, often with a sci-fi or fantasy epic to read in
          those peaceful moments in nature.
        </p>
      </motion.div>
    </div>
  );
}

export function AboutMeClosingTag({
  scrollYProgress,
  aboutMeContentHeight,
}: Props) {
  const y = useTransform(
    scrollYProgress,
    [0.1, 0.2],
    [-54, -15 + aboutMeContentHeight / 2],
  );

  const opacity = useTransform(scrollYProgress, [0.1, 0.2], [0, 1]);

  return (
    <div className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
      <motion.a href="#snap-3" style={{ x: -38, y, opacity }}>
        <span className="min-w-[7.5rem] text-xl font-medium">
          <span className="text-orange-400">{'</'}</span>
          AboutMe
          <span className="text-orange-400">{'>'}</span>
        </span>
      </motion.a>
    </div>
  );
}
