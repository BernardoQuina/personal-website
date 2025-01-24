import { motion, useTransform } from 'motion/react';

import { AnimationProps } from '../types';
import { SECTIONS } from '../constants';

export function LatestProject({
  scrollYProgress,
  measurements,
}: AnimationProps) {
  return (
    <section>
      <LatestProjectTag
        scrollYProgress={scrollYProgress}
        measurements={measurements}
      />
      <LatestProjectClosingTag
        scrollYProgress={scrollYProgress}
        measurements={measurements}
      />
    </section>
  );
}

function LatestProjectTag({ scrollYProgress, measurements }: AnimationProps) {
  const scale = useTransform(
    scrollYProgress,
    [SECTIONS.hero, SECTIONS.index, SECTIONS.aboutMe],
    [0.7, 1, 0.7],
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
      -14.5,
      51 - measurements.aboutMeContent.width / 2,
      -43,
      43 - measurements.may22Jun24Content.width / 2,
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
      160,
      18,
      31 + measurements.aboutMeContent.height / 2,
      79,
      61 + measurements.may22Jun24Content.height / 2,
      61 + measurements.apr21May22Content.height / 2,
    ],
  );

  const dashOpacity = useTransform(
    scrollYProgress,
    [
      SECTIONS.experience.index,
      // SECTIONS.experience.index + SECTIONS.length / 2,
    ],
    [1],
  );
  const closingBracketX = useTransform(
    scrollYProgress,
    [SECTIONS.experience.index],
    [0],
  );

  const lineGuideHeight = useTransform(
    scrollYProgress,
    [SECTIONS.experience.index],
    [0],
  );

  const opacity = useTransform(
    scrollYProgress,
    [SECTIONS.hero, SECTIONS.index, SECTIONS.aboutMe],
    [0, 1, 0.5],
  );

  return (
    <div className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
      <motion.a href="#snap-3" style={{ scale, x, y, opacity }}>
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
        <motion.div
          className="absolute left-1 top-7 bg-gray-200 dark:bg-gray-800"
          style={{ width: 1, height: lineGuideHeight }}
        />
      </motion.a>
    </div>
  );
}

function LatestProjectClosingTag({ scrollYProgress }: AnimationProps) {
  const y = useTransform(scrollYProgress, [SECTIONS.experience.index], [-165]);

  const opacity = useTransform(
    scrollYProgress,
    [SECTIONS.experience.index],
    [0],
  );

  return (
    <div className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
      <motion.a href="#snap-3" style={{ x: -44, y, opacity }}>
        <span className="min-w-[9rem] text-xl font-medium">
          <span className="text-orange-400">{'</'}</span>
          LatestProject
          <span className="text-orange-400">{'>'}</span>
        </span>
      </motion.a>
    </div>
  );
}
