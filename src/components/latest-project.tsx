import { motion, useTransform } from 'motion/react';

import { AnimationProps, ContentRefProps } from '../types';
import { SECTIONS } from '../constants';

type Props = AnimationProps & ContentRefProps;

export function LatestProject({
  scrollYProgress,
  measurements,
  contentRef,
}: Props) {
  return (
    <section>
      <div className="snap-point" id="latest-project" />
      <LatestProjectTag
        scrollYProgress={scrollYProgress}
        measurements={measurements}
      />
      <LatestProjectContent
        scrollYProgress={scrollYProgress}
        measurements={measurements}
        contentRef={contentRef}
      />
      <LatestProjectClosingTag
        scrollYProgress={scrollYProgress}
        measurements={measurements}
      />
    </section>
  );
}

function LatestProjectTag({ scrollYProgress, measurements }: AnimationProps) {
  // Scale and position
  const scale = useTransform(
    scrollYProgress,
    [
      SECTIONS.hero,
      SECTIONS.index,
      SECTIONS.aboutMe,
      SECTIONS.experience.apr21May22,
      SECTIONS.latestProject,
      SECTIONS.certificates.index,
    ],
    [0.7, 1, 0.7, 0.7, 1, 0.7],
  );
  const x = useTransform(
    scrollYProgress,
    [
      SECTIONS.hero,
      SECTIONS.index,
      SECTIONS.aboutMe,
      SECTIONS.experience.index,
      SECTIONS.experience.may22Jun24,
      SECTIONS.experience.apr21May22,
      SECTIONS.latestProject,
    ],
    [
      17,
      -14.5,
      51 - measurements.aboutMeContent.width / 2,
      -43,
      43 - measurements.may22Jun24Content.width / 2,
      43 - measurements.apr21May22Content.width / 2,
      75 - measurements.latestProject.width / 2,
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
      SECTIONS.latestProject,
    ],
    [
      160,
      18,
      31 + measurements.aboutMeContent.height / 2,
      79,
      61 + measurements.may22Jun24Content.height / 2,
      61 + measurements.apr21May22Content.height / 2,
      -15 - measurements.latestProject.height / 2,
    ],
  );

  // Self-closing/Double tag animation and line guide
  const dashOpacity = useTransform(
    scrollYProgress,
    [
      SECTIONS.experience.apr21May22,
      SECTIONS.experience.apr21May22 + SECTIONS.length / 2,
      SECTIONS.latestProject + SECTIONS.length / 2,
      SECTIONS.certificates.index,
    ],
    [1, 0, 0, 1],
  );
  const closingBracketX = useTransform(
    scrollYProgress,
    [
      SECTIONS.experience.apr21May22,
      SECTIONS.latestProject,
      SECTIONS.certificates.index,
    ],
    [0, -14, 0],
  );

  const lineGuideHeight = useTransform(
    scrollYProgress,
    [
      SECTIONS.experience.apr21May22,
      SECTIONS.latestProject,
      SECTIONS.certificates.index,
    ],
    [0, 5 + measurements.latestProject.height, 0],
  );
  const lineGuideX = useTransform(
    scrollYProgress,
    [
      SECTIONS.experience.apr21May22,
      SECTIONS.latestProject,
      SECTIONS.certificates.index,
    ],
    [
      75 - measurements.apr21May22Content.width / 2,
      75 - measurements.latestProject.width / 2,
      -40,
    ],
  );

  // Opacity and pointer events
  const opacity = useTransform(
    scrollYProgress,
    [
      SECTIONS.hero,
      SECTIONS.index,
      SECTIONS.aboutMe,

      SECTIONS.experience.apr21May22,
      SECTIONS.latestProject,
      SECTIONS.certificates.index,
    ],
    [0, 1, 0.5, 0.5, 1, 0.5],
  );

  const pointerEvents = useTransform(scrollYProgress, (value: number) =>
    value >= SECTIONS.index ? 'auto' : 'none',
  );

  return (
    <div className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
      <motion.a
        href="#latest-project"
        style={{ scale, x, y, opacity, pointerEvents }}
      >
        <h3 className="min-w-[9rem] text-xl font-medium">
          <span className="text-orange-400">{'<'}</span>
          LatestProject
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

function LatestProjectContent({
  scrollYProgress,
  contentRef,
  measurements,
}: Props) {
  // Scale and position
  const scale = useTransform(
    scrollYProgress,
    [
      SECTIONS.experience.apr21May22,
      SECTIONS.latestProject,
      SECTIONS.certificates.index,
    ],
    [0, 1, 0],
  );
  const x = useTransform(
    scrollYProgress,
    [
      SECTIONS.experience.apr21May22,
      SECTIONS.latestProject,
      SECTIONS.certificates.index,
    ],
    [5 - measurements.apr21May22Content.width / 2, 16, -95],
  );
  const y = useTransform(
    scrollYProgress,
    [
      SECTIONS.experience.apr21May22,
      SECTIONS.latestProject,
      SECTIONS.certificates.index,
    ],
    [61 + measurements.apr21May22Content.height / 2, 0, -79],
  );

  // Opacity and pointer events
  const opacity = useTransform(
    scrollYProgress,
    [
      SECTIONS.experience.apr21May22,
      SECTIONS.latestProject,
      SECTIONS.certificates.index,
    ],
    [0, 1, 0],
  );

  const pointerEvents = useTransform(scrollYProgress, (value: number) =>
    value === SECTIONS.latestProject ? 'auto' : 'none',
  );

  return (
    <motion.div
      className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
      style={{ pointerEvents }}
      ref={contentRef}
    >
      <motion.div
        className="w-[calc(100vw-4rem)] max-w-[30rem] gap-2 sm:gap-4"
        style={{ scale, x, y, opacity }}
      >
        <p className="text-muted-foreground">hello!!!</p>
        <p className="text-muted-foreground">
          Away from the keyboard, I love exploring forests and mountains with my
          girlfriend and dog, often with a sci-fi or fantasy epic to read in
          those peaceful moments in nature.
        </p>
      </motion.div>
    </motion.div>
  );
}

function LatestProjectClosingTag({
  scrollYProgress,
  measurements,
}: AnimationProps) {
  // Scale and position
  const scale = useTransform(
    scrollYProgress,
    [
      SECTIONS.experience.apr21May22,
      SECTIONS.latestProject,
      SECTIONS.certificates.index,
    ],
    [0.7, 1, 0.7],
  );
  const x = useTransform(
    scrollYProgress,
    [
      SECTIONS.experience.apr21May22,
      SECTIONS.latestProject,
      SECTIONS.certificates.index,
    ],
    [
      43 - measurements.apr21May22Content.width / 2,
      75 - measurements.latestProject.width / 2,
      -58,
    ],
  );
  const y = useTransform(
    scrollYProgress,
    [
      SECTIONS.experience.apr21May22,
      SECTIONS.latestProject,
      SECTIONS.certificates.index,
    ],
    [
      61 + measurements.apr21May22Content.height / 2,
      15 + measurements.latestProject.height / 2,
      -79,
    ],
  );

  // Opacity and pointer events
  const opacity = useTransform(
    scrollYProgress,
    [
      SECTIONS.experience.apr21May22,
      SECTIONS.latestProject,
      SECTIONS.certificates.index,
    ],
    [0, 1, 0],
  );

  const pointerEvents = useTransform(scrollYProgress, (value: number) =>
    value === SECTIONS.latestProject ? 'auto' : 'none',
  );

  return (
    <div className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
      <motion.a
        href="#latest-project"
        style={{ scale, x, y, opacity, pointerEvents }}
      >
        <span className="min-w-[9rem] text-xl font-medium">
          <span className="text-orange-400">{'</'}</span>
          LatestProject
          <span className="text-orange-400">{'>'}</span>
        </span>
      </motion.a>
    </div>
  );
}
