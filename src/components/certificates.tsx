import { motion, useTransform } from 'motion/react';

import { AnimationProps } from '../types';
import { SECTIONS } from '../constants';

export function Certificates({
  scrollYProgress,
  measurements,
}: AnimationProps) {
  return (
    <section>
      <CertificatesTag
        scrollYProgress={scrollYProgress}
        measurements={measurements}
      />
      <CertificatesClosingTag
        scrollYProgress={scrollYProgress}
        measurements={measurements}
      />
    </section>
  );
}

function CertificatesTag({ scrollYProgress, measurements }: AnimationProps) {
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
      -21,
      47 - measurements.aboutMeContent.width / 2,
      -47,
      39 - measurements.may22Jun24Content.width / 2,
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
      165,
      54,
      51.5 + measurements.aboutMeContent.height / 2,
      100,
      81.5 + measurements.may22Jun24Content.height / 2,
    ],
  );

  const dashOpacity = useTransform(scrollYProgress, [0.4, 0.45], [1, 0]);
  const closingBracketX = useTransform(scrollYProgress, [0.4, 0.5], [0, -14]);

  const lineGuideHeight = useTransform(scrollYProgress, [0.4, 0.5], [0, 300]);

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
          Certificates
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

function CertificatesClosingTag({ scrollYProgress }: AnimationProps) {
  const y = useTransform(scrollYProgress, [0.4, 0.5], [-165, 166]);

  const opacity = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);

  return (
    <div className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
      <motion.a href="#snap-3" style={{ x: -44, y, opacity }}>
        <span className="min-w-[9rem] text-xl font-medium">
          <span className="text-orange-400">{'</'}</span>
          Certificates
          <span className="text-orange-400">{'>'}</span>
        </span>
      </motion.a>
    </div>
  );
}
