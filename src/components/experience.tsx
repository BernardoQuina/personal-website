import { motion, useTransform } from 'motion/react';

import { AnimationProps } from '../types';
import { SECTIONS } from '../constants';

export function Experience({ scrollYProgress, measurements }: AnimationProps) {
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
      />
      <Apr21May22
        scrollYProgress={scrollYProgress}
        measurements={measurements}
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
    ],
    [0.7, 1, 0.7, 1],
  );
  const x = useTransform(
    scrollYProgress,
    [
      SECTIONS.hero,
      SECTIONS.index,
      SECTIONS.aboutMe,
      SECTIONS.experience.index,
    ],
    [17, -23, 45 + -measurements.aboutMeContent.width / 2, -31],
  );
  const y = useTransform(
    scrollYProgress,
    [
      SECTIONS.hero,
      SECTIONS.index,
      SECTIONS.aboutMe,
      SECTIONS.experience.index,
    ],
    [155, -18, 10 + measurements.aboutMeContent.height / 2, -54],
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
    [0, 85],
  );

  const opacity = useTransform(
    scrollYProgress,
    [
      SECTIONS.hero,
      SECTIONS.index,
      SECTIONS.aboutMe,
      SECTIONS.experience.index,
    ],
    [0, 1, 0.5, 1],
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
        <motion.div
          className="absolute left-1 top-7 bg-gray-200 dark:bg-gray-800"
          style={{ width: 1, height: lineGuideHeight }}
        />
      </motion.a>
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
      SECTIONS.latestProject,
    ],
    [0.7, 1, 1, 0.7],
  );

  const x = useTransform(
    scrollYProgress,
    [SECTIONS.aboutMe, SECTIONS.experience.index],
    [45 + -measurements.aboutMeContent.width / 2, -31],
  );
  const y = useTransform(
    scrollYProgress,
    [SECTIONS.aboutMe, SECTIONS.experience.index],
    [10 + measurements.aboutMeContent.height / 2, 54],
  );

  const opacity = useTransform(
    scrollYProgress,
    [SECTIONS.aboutMe, SECTIONS.experience.index],
    [0, 1],
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

function May22Jun24({ scrollYProgress, measurements }: AnimationProps) {
  return (
    <article>
      <div className="snap-point" id="experience-may-22-jun-24" />
      <May22Jun24Tag
        scrollYProgress={scrollYProgress}
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
    [SECTIONS.aboutMe, SECTIONS.experience.index],
    [0.5, 1],
  );
  const x = useTransform(
    scrollYProgress,
    [SECTIONS.aboutMe, SECTIONS.experience.index],
    [70 + -measurements.aboutMeContent.width / 2, 0],
  );
  const y = useTransform(
    scrollYProgress,
    [SECTIONS.aboutMe, SECTIONS.experience.index],
    [10 + measurements.aboutMeContent.height / 2, -18],
  );

  const dashOpacity = useTransform(
    scrollYProgress,
    [
      SECTIONS.experience.index,
      SECTIONS.experience.index + SECTIONS.length / 2,
    ],
    [1, 0],
  );
  const closingBracketX = useTransform(
    scrollYProgress,
    [SECTIONS.experience.index, SECTIONS.experience.may22Jun24],
    [0, -14],
  );

  const lineGuideHeight = useTransform(
    scrollYProgress,
    [SECTIONS.experience.index, SECTIONS.experience.may22Jun24],
    [0, 300],
  );

  const opacity = useTransform(
    scrollYProgress,
    [SECTIONS.aboutMe, SECTIONS.experience.index],
    [0, 1],
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
        <motion.div
          className="absolute left-1 top-7 bg-gray-200 dark:bg-gray-800"
          style={{ width: 1, height: lineGuideHeight }}
        />
      </motion.a>
    </div>
  );
}

function May22Jun24ClosingTag({ scrollYProgress }: AnimationProps) {
  const y = useTransform(
    scrollYProgress,
    [SECTIONS.experience.index, SECTIONS.experience.may22Jun24],
    [-165, 166],
  );

  const opacity = useTransform(
    scrollYProgress,
    [SECTIONS.experience.index, SECTIONS.experience.may22Jun24],
    [0, 1],
  );

  return (
    <div className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
      <motion.a href="#experience-may-22-jun-24" style={{ x: -44, y, opacity }}>
        <span className="min-w-[11rem] text-xl font-medium">
          <span className="text-orange-400">{'</'}</span>
          May22-Jun24
          <span className="text-orange-400">{'>'}</span>
        </span>
      </motion.a>
    </div>
  );
}

function Apr21May22({ scrollYProgress, measurements }: AnimationProps) {
  return (
    <article>
      <div className="snap-point" id="experience-apr-21-may-22" />
      <Apr21May22Tag
        scrollYProgress={scrollYProgress}
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
    [SECTIONS.aboutMe, SECTIONS.experience.index],
    [0.5, 1],
  );
  const x = useTransform(
    scrollYProgress,
    [SECTIONS.aboutMe, SECTIONS.experience.index],
    [70 + -measurements.aboutMeContent.width / 2, 0],
  );
  const y = useTransform(
    scrollYProgress,
    [SECTIONS.aboutMe, SECTIONS.experience.index],
    [10 + measurements.aboutMeContent.height / 2, 18],
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
    [0, 300],
  );

  const opacity = useTransform(
    scrollYProgress,
    [SECTIONS.aboutMe, SECTIONS.experience.index],
    [0, 1],
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
        <motion.div
          className="absolute left-1 top-7 bg-gray-200 dark:bg-gray-800"
          style={{ width: 1, height: lineGuideHeight }}
        />
      </motion.a>
    </div>
  );
}

function Apr21May22ClosingTag({ scrollYProgress }: AnimationProps) {
  const y = useTransform(
    scrollYProgress,
    [SECTIONS.experience.index, SECTIONS.experience.may22Jun24],
    [-165, 166],
  );

  const opacity = useTransform(
    scrollYProgress,
    [SECTIONS.experience.index, SECTIONS.experience.may22Jun24],
    [0, 1],
  );

  return (
    <div className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
      <motion.a href="#experience-apr-21-may-22" style={{ x: -44, y, opacity }}>
        <span className="min-w-[11rem] text-xl font-medium">
          <span className="text-orange-400">{'</'}</span>
          Apr21-May22
          <span className="text-orange-400">{'>'}</span>
        </span>
      </motion.a>
    </div>
  );
}
