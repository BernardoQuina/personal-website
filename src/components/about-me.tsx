import { motion, MotionValue, useTransform } from 'motion/react';
import { RefObject } from 'react';

import { AnimationProps, ContentRefProps } from '../types';
import { SECTIONS } from '../constants';

type Props = AnimationProps & ContentRefProps;

export function AboutMe({ scrollYProgress, measurements, contentRef }: Props) {
  return (
    <section>
      <div className="snap-point" id="about-me" />
      <AboutMeTag
        scrollYProgress={scrollYProgress}
        measurements={measurements}
      />
      <AboutMeContent
        scrollYProgress={scrollYProgress}
        contentRef={contentRef}
      />
      <AboutMeClosingTag
        scrollYProgress={scrollYProgress}
        measurements={measurements}
      />
    </section>
  );
}

function AboutMeTag({ scrollYProgress, measurements }: AnimationProps) {
  const scale = useTransform(
    scrollYProgress,
    [
      SECTIONS.hero,
      SECTIONS.index,
      SECTIONS.aboutMe,
      SECTIONS.experience.index,
    ],
    [0.7, 1, 1, 0.7],
  );
  const x = useTransform(
    scrollYProgress,
    [
      SECTIONS.hero,
      SECTIONS.index,
      SECTIONS.aboutMe,
      SECTIONS.experience.index,
      SECTIONS.experience.may22Jun24,
    ],
    [
      17,
      -32,
      55 - measurements.aboutMeContent.width / 2,
      -58,
      31 - measurements.may22Jun24Content.width / 2,
    ],
  );
  const y = useTransform(
    scrollYProgress,
    [
      SECTIONS.hero,
      SECTIONS.index,
      SECTIONS.aboutMe,
      SECTIONS.experience.index,
      SECTIONS.experience.may22Jun24,
    ],
    [
      150,
      -54,
      -45 - measurements.aboutMeContent.height / 2,
      -79,
      -81 - measurements.may22Jun24Content.height / 2,
    ],
  );

  const dashOpacity = useTransform(
    scrollYProgress,
    [
      SECTIONS.index,
      SECTIONS.index + SECTIONS.length / 2,
      SECTIONS.aboutMe + SECTIONS.length / 2,
      SECTIONS.experience.index,
    ],
    [1, 0, 0, 1],
  );
  const closingBracketX = useTransform(
    scrollYProgress,
    [SECTIONS.index, SECTIONS.aboutMe, SECTIONS.experience.index],
    [0, -14, 0],
  );

  const lineGuideHeight = useTransform(
    scrollYProgress,
    [SECTIONS.index, SECTIONS.aboutMe, SECTIONS.experience.index],
    [0, 5 + measurements.aboutMeContent.height, 0],
  );
  const lineGuideX = useTransform(
    scrollYProgress,
    [SECTIONS.index, SECTIONS.aboutMe, SECTIONS.experience.index],
    [-32, 55 - measurements.aboutMeContent.width / 2, -40],
  );

  const opacity = useTransform(
    scrollYProgress,
    [
      SECTIONS.hero,
      SECTIONS.index,
      SECTIONS.aboutMe,
      SECTIONS.experience.index,
    ],
    [0, 1, 1, 0.5],
  );

  return (
    <div className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
      <motion.a href="#about-me" style={{ scale, x, y, opacity }}>
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
      </motion.a>
      <motion.div
        className="absolute left-1 top-7 bg-gray-200 dark:bg-gray-800"
        style={{ width: 1, y, x: lineGuideX, height: lineGuideHeight }}
      />
    </div>
  );
}

type AboutMeContentProps = {
  scrollYProgress: MotionValue<number>;
  contentRef: RefObject<HTMLDivElement>;
};

function AboutMeContent({ scrollYProgress, contentRef }: AboutMeContentProps) {
  const scale = useTransform(
    scrollYProgress,
    [SECTIONS.index, SECTIONS.aboutMe, SECTIONS.experience.index],
    [0.1, 1, 0.1],
  );
  const x = useTransform(
    scrollYProgress,
    [SECTIONS.index, SECTIONS.aboutMe, SECTIONS.experience.index],
    [-52, 16, -52],
  );
  const y = useTransform(
    scrollYProgress,
    [SECTIONS.aboutMe, SECTIONS.experience.index],
    [-30, -79],
  );

  const opacity = useTransform(
    scrollYProgress,
    [SECTIONS.index, SECTIONS.aboutMe, SECTIONS.experience.index],
    [0, 1, 0],
  );

  return (
    <div
      className="fixed left-[50%] top-[50%] -z-10 translate-x-[-50%] translate-y-[-50%]"
      ref={contentRef}
    >
      <motion.div
        className="w-[calc(100vw-4rem)] max-w-[30rem] gap-2 sm:gap-4"
        style={{ scale, x, y, opacity }}
      >
        <p>
          I&apos;m all about building robust, type-safe systems where cloud
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

function AboutMeClosingTag({ scrollYProgress, measurements }: AnimationProps) {
  const scale = useTransform(
    scrollYProgress,
    [SECTIONS.aboutMe, SECTIONS.experience.index],
    [1, 0.7],
  );
  const x = useTransform(
    scrollYProgress,
    [SECTIONS.index, SECTIONS.aboutMe, SECTIONS.experience.index],
    [-38, 55 - measurements.aboutMeContent.width / 2, -58],
  );
  const y = useTransform(
    scrollYProgress,
    [SECTIONS.index, SECTIONS.aboutMe, SECTIONS.experience.index],
    [-54, -15 + measurements.aboutMeContent.height / 2, -79],
  );

  const opacity = useTransform(
    scrollYProgress,
    [SECTIONS.index, SECTIONS.aboutMe, SECTIONS.experience.index],
    [0, 1, 0],
  );

  return (
    <div className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
      <motion.a href="#about-me" style={{ x, y, opacity, scale }}>
        <span className="min-w-[7.5rem] text-xl font-medium">
          <span className="text-orange-400">{'</'}</span>
          AboutMe
          <span className="text-orange-400">{'>'}</span>
        </span>
      </motion.a>
    </div>
  );
}
