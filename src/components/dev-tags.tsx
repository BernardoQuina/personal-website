import { motion, MotionValue, useTransform } from 'motion/react';

import { Measurements } from '../types';
import { SECTIONS } from '../constants';

type Props = {
  scrollYProgress: MotionValue<number>;
  measurements: Measurements;
};

export function DevTag({ scrollYProgress, measurements }: Props) {
  const scale = useTransform(
    scrollYProgress,
    [SECTIONS.hero, SECTIONS.index, SECTIONS.aboutMe],
    [0.7, 1, 0.7],
  );
  const x = useTransform(
    scrollYProgress,
    [SECTIONS.hero, SECTIONS.index, SECTIONS.aboutMe],
    [30, 0, 55 + -measurements.aboutMeContent.width / 2],
  );
  const y = useTransform(
    scrollYProgress,
    [SECTIONS.hero, SECTIONS.index, SECTIONS.aboutMe],
    [138, -90, -70 - measurements.aboutMeContent.height / 2],
  );
  const opacity = useTransform(
    scrollYProgress,
    [SECTIONS.index, SECTIONS.aboutMe],
    [1, 0.5],
  );

  const dashOpacity = useTransform(
    scrollYProgress,
    [SECTIONS.hero, SECTIONS.hero + SECTIONS.length / 2],
    [1, 0],
  );
  const closingBracketX = useTransform(
    scrollYProgress,
    [SECTIONS.hero, SECTIONS.index],
    [0, -14],
  );

  const lineGuideHeight = useTransform(
    scrollYProgress,
    [SECTIONS.hero, SECTIONS.index, SECTIONS.aboutMe],
    [0, 156, 120 + measurements.aboutMeContent.height],
  );
  const lineGuideX = useTransform(
    scrollYProgress,
    [SECTIONS.hero, SECTIONS.index, SECTIONS.aboutMe],
    [80, 0, 85 + -measurements.aboutMeContent.width / 2],
  );

  return (
    <div className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
      <motion.a href="#index" style={{ scale, x, y, opacity }}>
        <h1 className="min-w-[12rem] whitespace-nowrap text-xl font-medium">
          <span className="text-orange-400">{'<'}</span>
          FullStackDeveloper
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
        </h1>
      </motion.a>
      <motion.div
        className="absolute left-1 top-7 bg-gray-200 dark:bg-gray-800"
        style={{ width: 1, height: lineGuideHeight, y, x: lineGuideX }}
      />
    </div>
  );
}

export function DevClosingTag({ scrollYProgress, measurements }: Props) {
  const scale = useTransform(
    scrollYProgress,
    [SECTIONS.hero, SECTIONS.index, SECTIONS.aboutMe],
    [0.7, 1, 0.7],
  );
  const x = useTransform(
    scrollYProgress,
    [SECTIONS.hero, SECTIONS.index, SECTIONS.aboutMe],
    [30, -3, 52 + -measurements.aboutMeContent.width / 2],
  );
  const y = useTransform(
    scrollYProgress,
    [SECTIONS.hero, SECTIONS.index, SECTIONS.aboutMe],
    [170, 90, 72 + measurements.aboutMeContent.height / 2],
  );

  const opacity = useTransform(
    scrollYProgress,
    [SECTIONS.hero, SECTIONS.index, SECTIONS.aboutMe],
    [0, 1, 0.5],
  );

  return (
    <div className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
      <motion.a href="#index" style={{ scale, x, y, opacity }}>
        <span className="min-w-[12rem] whitespace-nowrap text-xl font-medium">
          <span className="text-orange-400">{'</'}</span>
          FullStackDeveloper
          <span className="text-orange-400">{'>'}</span>
        </span>
      </motion.a>
    </div>
  );
}
