import { motion, MotionValue, useTransform } from 'motion/react';

import { Measurements } from '../types';
import { SECTIONS } from '../constants';

type Props = {
  scrollYProgress: MotionValue<number>;
  measurements: Measurements;
};

export function ExperienceTag({ scrollYProgress, measurements }: Props) {
  const scale = useTransform(
    scrollYProgress,
    [SECTIONS.hero, SECTIONS.index, SECTIONS.aboutMe],
    [0.7, 1, 0.7],
  );
  const x = useTransform(
    scrollYProgress,
    [SECTIONS.hero, SECTIONS.index, SECTIONS.aboutMe],
    [17, -23, 45 + -measurements.aboutMeContent.width / 2],
  );
  const y = useTransform(
    scrollYProgress,
    [SECTIONS.hero, SECTIONS.index, SECTIONS.aboutMe],
    [155, -18, 10 + measurements.aboutMeContent.height / 2],
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
    [SECTIONS.aboutMe, SECTIONS.experience.index],
    [0, 300],
  );

  const opacity = useTransform(
    scrollYProgress,
    [SECTIONS.hero, SECTIONS.index, SECTIONS.aboutMe],
    [0, 1, 0.5],
  );

  return (
    <div className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
      <motion.a href="#snap-3" style={{ scale, x, y, opacity }}>
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
        <motion.div
          className="absolute left-1 top-8 bg-gray-300 dark:bg-gray-700"
          style={{ width: 1, height: lineGuideHeight }}
        />
      </motion.a>
    </div>
  );
}

export function ExperienceClosingTag({ scrollYProgress }: Props) {
  const y = useTransform(
    scrollYProgress,
    [SECTIONS.aboutMe, SECTIONS.experience.index],
    [-165, 166],
  );

  const opacity = useTransform(
    scrollYProgress,
    [SECTIONS.aboutMe, SECTIONS.experience.index],
    [0, 1],
  );

  return (
    <div className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
      <motion.a href="#snap-3" style={{ x: -44, y, opacity }}>
        <span className="min-w-[8rem] text-xl font-medium">
          <span className="text-orange-400">{'</'}</span>
          Experience
          <span className="text-orange-400">{'>'}</span>
        </span>
      </motion.a>
    </div>
  );
}
