import { motion, useTransform } from 'motion/react';

import { AnimationProps, ContentRefProps } from '../types';
import { SECTIONS } from '../constants';

export function Experience({
  scrollYProgress,
  measurements,
  may22Jun24ContentRef,
  apr21May22ContentRef,
}: AnimationProps & {
  may22Jun24ContentRef: ContentRefProps['contentRef'];
  apr21May22ContentRef: ContentRefProps['contentRef'];
}) {
  return (
    <section>
      <div className="snap-point" id="experience" />
      <ExperienceTag
        scrollYProgress={scrollYProgress}
        measurements={measurements}
      />
      <May22Jun24
        scrollYProgress={scrollYProgress}
        measurements={measurements}
        contentRef={may22Jun24ContentRef}
      />
      <Apr21May22
        scrollYProgress={scrollYProgress}
        measurements={measurements}
        contentRef={apr21May22ContentRef}
      />
      <ExperienceClosingTag
        scrollYProgress={scrollYProgress}
        measurements={measurements}
      />
    </section>
  );
}

function ExperienceTag({ scrollYProgress, measurements }: AnimationProps) {
  const scale = useTransform(
    scrollYProgress,
    [
      SECTIONS.hero,
      SECTIONS.index,
      SECTIONS.aboutMe,
      SECTIONS.experience.index,
      SECTIONS.experience.may22Jun24,
    ],
    [0.7, 1, 0.7, 1, 0.7],
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
      -23,
      45 - measurements.aboutMeContent.width / 2,
      -31,
      37 - measurements.may22Jun24Content.width / 2,
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
      SECTIONS.experience.apr21May22,
    ],
    [
      155,
      -18,
      10 + measurements.aboutMeContent.height / 2,
      -54,
      -60 - measurements.may22Jun24Content.height / 2,
      -60.5 - measurements.apr21May22Content.height / 2,
    ],
  );

  const dashOpacity = useTransform(
    scrollYProgress,
    [SECTIONS.aboutMe, SECTIONS.aboutMe + SECTIONS.length / 2],
    [1, 0],
  );
  const closingBracketX = useTransform(
    scrollYProgress,
    [SECTIONS.aboutMe, SECTIONS.experience.index],
    [0, -14],
  );

  const lineGuideHeight = useTransform(
    scrollYProgress,
    [
      SECTIONS.aboutMe,
      SECTIONS.experience.index,
      SECTIONS.experience.may22Jun24,
      SECTIONS.experience.apr21May22,
    ],
    [
      0,
      85,
      80 + measurements.may22Jun24Content.height,
      80 + measurements.apr21May22Content.height,
    ],
  );
  const lineGuideX = useTransform(
    scrollYProgress,
    [
      SECTIONS.aboutMe,
      SECTIONS.experience.index,
      SECTIONS.experience.may22Jun24,
    ],
    [
      65 - measurements.aboutMeContent.width / 2,
      -31,
      56 - measurements.may22Jun24Content.width / 2,
    ],
  );

  const opacity = useTransform(
    scrollYProgress,
    [
      SECTIONS.hero,
      SECTIONS.index,
      SECTIONS.aboutMe,
      SECTIONS.experience.index,
      SECTIONS.experience.may22Jun24,
    ],
    [0, 1, 0.5, 1, 0.5],
  );

  return (
    <div className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
      <motion.a href="#experience" style={{ scale, x, y, opacity }}>
        <h3 className="min-w-[8rem] text-xl font-medium">
          <span className="text-orange-400">{'<'}</span>
          Experience
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

function ExperienceClosingTag({
  scrollYProgress,
  measurements,
}: AnimationProps) {
  const scale = useTransform(
    scrollYProgress,
    [
      SECTIONS.aboutMe,
      SECTIONS.experience.index,
      SECTIONS.experience.may22Jun24,
    ],
    [0.7, 1, 0.7],
  );

  const x = useTransform(
    scrollYProgress,
    [
      SECTIONS.aboutMe,
      SECTIONS.experience.index,
      SECTIONS.experience.may22Jun24,
    ],
    [
      45 - measurements.aboutMeContent.width / 2,
      -31,
      35 - measurements.may22Jun24Content.width / 2,
    ],
  );
  const y = useTransform(
    scrollYProgress,
    [
      SECTIONS.aboutMe,
      SECTIONS.experience.index,
      SECTIONS.experience.may22Jun24,
      SECTIONS.experience.apr21May22,
    ],
    [
      10 + measurements.aboutMeContent.height / 2,
      54,
      40.5 + measurements.may22Jun24Content.height / 2,
      40.5 + measurements.apr21May22Content.height / 2,
    ],
  );

  const opacity = useTransform(
    scrollYProgress,
    [
      SECTIONS.aboutMe,
      SECTIONS.experience.index,
      SECTIONS.experience.may22Jun24,
    ],
    [0, 1, 0.5],
  );

  return (
    <div className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
      <motion.a href="#experience" style={{ x, y, opacity, scale }}>
        <span className="min-w-[8rem] text-xl font-medium">
          <span className="text-orange-400">{'</'}</span>
          Experience
          <span className="text-orange-400">{'>'}</span>
        </span>
      </motion.a>
    </div>
  );
}

function May22Jun24({
  scrollYProgress,
  measurements,
  contentRef,
}: AnimationProps & ContentRefProps) {
  return (
    <article>
      <div className="snap-point" id="experience-may-22-jun-24" />
      <May22Jun24Tag
        scrollYProgress={scrollYProgress}
        measurements={measurements}
      />
      <May22Jun24Content
        scrollYProgress={scrollYProgress}
        contentRef={contentRef}
        measurements={measurements}
      />

      <May22Jun24ClosingTag
        scrollYProgress={scrollYProgress}
        measurements={measurements}
      />
    </article>
  );
}

function May22Jun24Tag({ scrollYProgress, measurements }: AnimationProps) {
  const scale = useTransform(
    scrollYProgress,
    [
      SECTIONS.aboutMe,
      SECTIONS.experience.index,
      SECTIONS.experience.may22Jun24,
      SECTIONS.experience.apr21May22,
    ],
    [0.5, 1, 1, 0.7],
  );
  const x = useTransform(
    scrollYProgress,
    [
      SECTIONS.aboutMe,
      SECTIONS.experience.index,
      SECTIONS.experience.may22Jun24,
      SECTIONS.experience.apr21May22,
    ],
    [
      70 - measurements.aboutMeContent.width / 2,
      0,
      85 - measurements.may22Jun24Content.width / 2,
      58.5 - measurements.apr21May22Content.width / 2,
    ],
  );
  const y = useTransform(
    scrollYProgress,
    [
      SECTIONS.aboutMe,
      SECTIONS.experience.index,
      SECTIONS.experience.may22Jun24,
      SECTIONS.experience.apr21May22,
    ],
    [
      10 + measurements.aboutMeContent.height / 2,
      -18,
      -35 - measurements.may22Jun24Content.height / 2,
      -40 - measurements.apr21May22Content.height / 2,
    ],
  );

  const dashOpacity = useTransform(
    scrollYProgress,
    [
      SECTIONS.experience.index,
      SECTIONS.experience.index + SECTIONS.length / 2,
      SECTIONS.experience.may22Jun24 + SECTIONS.length / 2,
      SECTIONS.experience.apr21May22,
    ],
    [1, 0, 0, 1],
  );
  const closingBracketX = useTransform(
    scrollYProgress,
    [
      SECTIONS.experience.index,
      SECTIONS.experience.may22Jun24,
      SECTIONS.experience.apr21May22,
    ],
    [0, -14, 0],
  );

  const lineGuideHeight = useTransform(
    scrollYProgress,
    [
      SECTIONS.experience.index,
      SECTIONS.experience.may22Jun24,
      SECTIONS.experience.apr21May22,
    ],
    [0, 5 + measurements.may22Jun24Content.height, 0],
  );
  const lineGuideX = useTransform(
    scrollYProgress,
    [SECTIONS.experience.index, SECTIONS.experience.may22Jun24],
    [0, 85 - measurements.may22Jun24Content.width / 2],
  );

  const opacity = useTransform(
    scrollYProgress,
    [
      SECTIONS.aboutMe,
      SECTIONS.experience.index,
      SECTIONS.experience.may22Jun24,
      SECTIONS.experience.apr21May22,
    ],
    [0, 1, 1, 0.5],
  );

  return (
    <div className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
      <motion.a
        href="#experience-may-22-jun-24"
        style={{ scale, x, y, opacity }}
      >
        <h5 className="min-w-[11rem] text-xl font-medium">
          <span className="text-orange-400">{'<'}</span>
          May22-Jun24
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
        </h5>
      </motion.a>
      <motion.div
        className="absolute left-1 top-7 bg-gray-200 dark:bg-gray-800"
        style={{ width: 1, y, x: lineGuideX, height: lineGuideHeight }}
      />
    </div>
  );
}

function May22Jun24Content({
  scrollYProgress,
  contentRef,
  measurements,
}: AnimationProps & ContentRefProps) {
  const scale = useTransform(
    scrollYProgress,
    [
      SECTIONS.experience.index,
      SECTIONS.experience.may22Jun24,
      SECTIONS.experience.apr21May22,
    ],
    [0, 1, 0],
  );
  const x = useTransform(
    scrollYProgress,
    [
      SECTIONS.experience.index,
      SECTIONS.experience.may22Jun24,
      SECTIONS.experience.apr21May22,
    ],
    [-80, 16, 10 - measurements.apr21May22Content.width / 2],
  );
  const y = useTransform(
    scrollYProgress,
    [SECTIONS.experience.may22Jun24, SECTIONS.experience.apr21May22],
    [-20, -20 - measurements.apr21May22Content.height / 2],
  );

  const opacity = useTransform(
    scrollYProgress,
    [
      SECTIONS.experience.index,
      SECTIONS.experience.may22Jun24,
      SECTIONS.experience.apr21May22,
    ],
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
      </motion.div>
    </div>
  );
}

function May22Jun24ClosingTag({
  scrollYProgress,
  measurements,
}: AnimationProps) {
  const scale = useTransform(
    scrollYProgress,
    [SECTIONS.experience.may22Jun24, SECTIONS.experience.apr21May22],
    [1, 0.7],
  );
  const x = useTransform(
    scrollYProgress,
    [SECTIONS.experience.index, SECTIONS.experience.may22Jun24],
    [0, 85 - measurements.may22Jun24Content.width / 2],
  );

  const y = useTransform(
    scrollYProgress,
    [
      SECTIONS.experience.index,
      SECTIONS.experience.may22Jun24,
      SECTIONS.experience.apr21May22,
    ],
    [
      -18,
      -5 + measurements.may22Jun24Content.height / 2,
      -40 - measurements.apr21May22Content.height / 2,
    ],
  );

  const opacity = useTransform(
    scrollYProgress,
    [
      SECTIONS.experience.index,
      SECTIONS.experience.may22Jun24,
      SECTIONS.experience.apr21May22,
    ],
    [0, 1, 0],
  );

  return (
    <div className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
      <motion.a
        href="#experience-may-22-jun-24"
        style={{ x, y, opacity, scale }}
      >
        <span className="min-w-[11rem] text-xl font-medium">
          <span className="text-orange-400">{'</'}</span>
          May22-Jun24
          <span className="text-orange-400">{'>'}</span>
        </span>
      </motion.a>
    </div>
  );
}

function Apr21May22({
  scrollYProgress,
  measurements,
  contentRef,
}: AnimationProps & ContentRefProps) {
  return (
    <article>
      <div className="snap-point" id="experience-apr-21-may-22" />
      <Apr21May22Tag
        scrollYProgress={scrollYProgress}
        measurements={measurements}
      />
      <Apr21May22Content
        scrollYProgress={scrollYProgress}
        contentRef={contentRef}
        measurements={measurements}
      />
      <Apr21May22ClosingTag
        scrollYProgress={scrollYProgress}
        measurements={measurements}
      />
    </article>
  );
}

function Apr21May22Tag({ scrollYProgress, measurements }: AnimationProps) {
  const scale = useTransform(
    scrollYProgress,
    [
      SECTIONS.aboutMe,
      SECTIONS.experience.index,
      SECTIONS.experience.may22Jun24,
      SECTIONS.experience.apr21May22,
    ],
    [0.5, 1, 0.7, 1],
  );
  const x = useTransform(
    scrollYProgress,
    [
      SECTIONS.aboutMe,
      SECTIONS.experience.index,
      SECTIONS.experience.may22Jun24,
      SECTIONS.experience.apr21May22,
    ],
    [
      70 - measurements.aboutMeContent.width / 2,
      0,
      58.5 - measurements.may22Jun24Content.width / 2,
      85 - measurements.may22Jun24Content.width / 2,
    ],
  );
  const y = useTransform(
    scrollYProgress,
    [
      SECTIONS.aboutMe,
      SECTIONS.experience.index,
      SECTIONS.experience.may22Jun24,
      SECTIONS.experience.apr21May22,
    ],
    [
      10 + measurements.aboutMeContent.height / 2,
      18,
      20 + measurements.may22Jun24Content.height / 2,
      -15 - measurements.apr21May22Content.height / 2,
    ],
  );

  const dashOpacity = useTransform(
    scrollYProgress,
    [
      SECTIONS.experience.may22Jun24,
      SECTIONS.experience.may22Jun24 + SECTIONS.length / 2,
    ],
    [1, 0],
  );
  const closingBracketX = useTransform(
    scrollYProgress,
    [SECTIONS.experience.may22Jun24, SECTIONS.experience.apr21May22],
    [0, -14],
  );

  const lineGuideHeight = useTransform(
    scrollYProgress,
    [SECTIONS.experience.may22Jun24, SECTIONS.experience.apr21May22],
    [0, 5 + measurements.apr21May22Content.height],
  );

  const lineGuideX = useTransform(
    scrollYProgress,
    [SECTIONS.experience.may22Jun24, SECTIONS.experience.apr21May22],
    [
      85 - measurements.may22Jun24Content.width / 2,
      85 - measurements.apr21May22Content.width / 2,
    ],
  );

  const opacity = useTransform(
    scrollYProgress,
    [
      SECTIONS.aboutMe,
      SECTIONS.experience.index,
      SECTIONS.experience.may22Jun24,
      SECTIONS.experience.apr21May22,
      SECTIONS.latestProject,
    ],
    [0, 1, 0.5, 1, 0],
  );

  return (
    <div className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
      <motion.a
        href="#experience-apr-21-may-22"
        style={{ scale, x, y, opacity }}
      >
        <h5 className="min-w-[11rem] text-xl font-medium">
          <span className="text-orange-400">{'<'}</span>
          Apr21-May22
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
        </h5>
      </motion.a>
      <motion.div
        className="absolute left-1 top-7 bg-gray-200 dark:bg-gray-800"
        style={{ width: 1, x: lineGuideX, y, height: lineGuideHeight }}
      />
    </div>
  );
}

function Apr21May22Content({
  scrollYProgress,
  contentRef,
  measurements,
}: AnimationProps & ContentRefProps) {
  const scale = useTransform(
    scrollYProgress,
    [
      SECTIONS.experience.may22Jun24,
      SECTIONS.experience.apr21May22,
      SECTIONS.latestProject,
    ],
    [0, 1, 0],
  );
  const x = useTransform(
    scrollYProgress,
    [
      SECTIONS.experience.may22Jun24,
      SECTIONS.experience.apr21May22,
      SECTIONS.latestProject,
    ],
    [10 - measurements.may22Jun24Content.width / 2, 16, -52],
  );
  const y = useTransform(
    scrollYProgress,
    [
      SECTIONS.experience.may22Jun24,
      SECTIONS.experience.apr21May22,
      SECTIONS.latestProject,
    ],
    [20 + measurements.may22Jun24Content.height / 2, 0, -79],
  );

  const opacity = useTransform(
    scrollYProgress,
    [
      SECTIONS.experience.may22Jun24,
      SECTIONS.experience.apr21May22,
      SECTIONS.latestProject,
    ],
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

function Apr21May22ClosingTag({
  scrollYProgress,
  measurements,
}: AnimationProps) {
  const scale = useTransform(
    scrollYProgress,
    [SECTIONS.experience.may22Jun24, SECTIONS.experience.apr21May22],
    [0.7, 1],
  );
  const x = useTransform(
    scrollYProgress,
    [SECTIONS.experience.may22Jun24, SECTIONS.experience.apr21May22],
    [
      58.5 - measurements.may22Jun24Content.width / 2,
      85 - measurements.apr21May22Content.width / 2,
    ],
  );
  const y = useTransform(
    scrollYProgress,
    [SECTIONS.experience.may22Jun24, SECTIONS.experience.apr21May22],
    [
      20 + measurements.may22Jun24Content.height / 2,
      15 + measurements.apr21May22Content.height / 2,
    ],
  );

  const opacity = useTransform(
    scrollYProgress,
    [SECTIONS.experience.may22Jun24, SECTIONS.experience.apr21May22],
    [0, 1],
  );

  return (
    <div className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
      <motion.a
        href="#experience-apr-21-may-22"
        style={{ x, y, opacity, scale }}
      >
        <span className="min-w-[11rem] text-xl font-medium">
          <span className="text-orange-400">{'</'}</span>
          Apr21-May22
          <span className="text-orange-400">{'>'}</span>
        </span>
      </motion.a>
    </div>
  );
}
