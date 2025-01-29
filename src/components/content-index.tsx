import { motion, useTransform } from 'motion/react';

import { AnimationProps } from '../types';
import { SECTIONS } from '../constants';

export function ContentIndex({
  scrollYProgress,
  measurements,
}: AnimationProps) {
  return (
    <section>
      <div className="snap-point" id="index" />
      <DevTag scrollYProgress={scrollYProgress} measurements={measurements} />
      {/* Rest of content lays visually in between this tags */}
      <DevClosingTag
        scrollYProgress={scrollYProgress}
        measurements={measurements}
      />
    </section>
  );
}

export function DevTag({ scrollYProgress, measurements }: AnimationProps) {
  // Scale and position
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
      SECTIONS.experience.apr21May22,
      SECTIONS.latestProject,
      SECTIONS.certificates.index,
      SECTIONS.certificates.awsSolutionsArchitect,
    ],
    [
      30,
      0,
      55 - measurements.aboutMeContent.width / 2,
      -37,
      52 - measurements.may22Jun24Content.width / 2,
      52 - measurements.apr21May22Content.width / 2,
      60 - measurements.latestProject.width / 2,
      -72,
      52 - measurements.awsArchitectContent.width / 2,
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
      SECTIONS.certificates.index,
      SECTIONS.certificates.awsSolutionsArchitect,
      SECTIONS.certificates.kubernetesDeveloper,
    ],
    [
      138,
      -90,
      -70 - measurements.aboutMeContent.height / 2,
      -100,
      -102 - measurements.may22Jun24Content.height / 2,
      -102 - measurements.apr21May22Content.height / 2,
      -72 - measurements.latestProject.height / 2,
      -142,
      -94 - measurements.awsArchitectContent.height / 2,
      -115 - measurements.k8sDeveloperContent.height / 2,
    ],
  );
  const opacity = useTransform(
    scrollYProgress,
    [SECTIONS.index, SECTIONS.aboutMe],
    [1, 0.5],
  );

  // Self-closing/Double tag animation and line guide
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
    [
      SECTIONS.hero,
      SECTIONS.index,
      SECTIONS.aboutMe,
      SECTIONS.experience.index,
      SECTIONS.experience.may22Jun24,
      SECTIONS.experience.apr21May22,
      SECTIONS.latestProject,
      SECTIONS.certificates.index,
      SECTIONS.certificates.awsSolutionsArchitect,
      SECTIONS.certificates.kubernetesDeveloper,
    ],
    [
      0,
      156,
      120 + measurements.aboutMeContent.height,
      200,
      185 + measurements.may22Jun24Content.height,
      185 + measurements.apr21May22Content.height,
      120 + measurements.latestProject.height,
      200,
      185 + measurements.awsArchitectContent.height,
      185 + measurements.k8sDeveloperContent.height,
    ],
  );
  const lineGuideX = useTransform(
    scrollYProgress,
    [
      SECTIONS.hero,
      SECTIONS.index,
      SECTIONS.aboutMe,
      SECTIONS.experience.index,
      SECTIONS.experience.may22Jun24,
      SECTIONS.experience.apr21May22,
      SECTIONS.latestProject,
      SECTIONS.certificates.index,
      SECTIONS.certificates.awsSolutionsArchitect,
    ],
    [
      80,
      0,
      85 - measurements.aboutMeContent.width / 2,
      -7,
      82 - measurements.may22Jun24Content.width / 2,
      82 - measurements.apr21May22Content.width / 2,
      91 - measurements.latestProject.width / 2,
      -41,
      83 - measurements.awsArchitectContent.width / 2,
    ],
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

export function DevClosingTag({
  scrollYProgress,
  measurements,
}: AnimationProps) {
  // Scale and position
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
      SECTIONS.experience.apr21May22,
      SECTIONS.latestProject,
      SECTIONS.certificates.index,
      SECTIONS.certificates.awsSolutionsArchitect,
    ],
    [
      30,
      -3,
      52 - measurements.aboutMeContent.width / 2,
      -39,
      50 - measurements.may22Jun24Content.width / 2,
      50 - measurements.apr21May22Content.width / 2,
      58 - measurements.latestProject.width / 2,
      -74,
      50 - measurements.awsArchitectContent.width / 2,
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
      SECTIONS.certificates.index,
      SECTIONS.certificates.awsSolutionsArchitect,
      SECTIONS.certificates.kubernetesDeveloper,
    ],
    [
      170,
      90,
      72 + measurements.aboutMeContent.height / 2,
      121,
      102 + measurements.may22Jun24Content.height / 2,
      102 + measurements.apr21May22Content.height / 2,
      71 + measurements.latestProject.height / 2,
      79,
      112 + measurements.awsArchitectContent.height / 2,
      91 + measurements.k8sDeveloperContent.height / 2,
    ],
  );

  // Opacity and pointer events
  const opacity = useTransform(
    scrollYProgress,
    [SECTIONS.hero, SECTIONS.index, SECTIONS.aboutMe],
    [0, 1, 0.5],
  );

  const pointerEvents = useTransform(scrollYProgress, (value: number) =>
    value === SECTIONS.hero ? 'none' : 'auto',
  );

  return (
    <div className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
      <motion.a href="#index" style={{ scale, x, y, opacity, pointerEvents }}>
        <span className="min-w-[12rem] whitespace-nowrap text-xl font-medium">
          <span className="text-orange-400">{'</'}</span>
          FullStackDeveloper
          <span className="text-orange-400">{'>'}</span>
        </span>
      </motion.a>
    </div>
  );
}
