import { motion, useTransform } from 'motion/react';

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
        measurements={measurements}
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
  // Because of the dynamic viewport on mobile, animations that go to the end
  // of the scrollYProgress (1) look clunky, so we'll use a lower value there.
  // Also, in the end the footer is quite tall on small screens so we'll offset all
  // elements towards the top.
  const footerSection = measurements.isMobile ? 0.97 : SECTIONS.footer;
  const footerOffset = measurements.viewportWidthTracker.width < 640 ? -100 : 0;

  // Scale and position
  const scale = useTransform(
    scrollYProgress,
    [
      SECTIONS.hero,
      SECTIONS.index,
      SECTIONS.aboutMe,
      SECTIONS.experience.index,
      SECTIONS.certificates.kubernetesDeveloper,
      footerSection,
    ],
    [0.7, 1, 1, 0.7, 0.7, 1],
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
      SECTIONS.certificates.kubernetesDeveloper,
      footerSection,
    ],
    [
      17,
      -32,
      55 - measurements.aboutMeContent.width / 2,
      -58,
      31 - measurements.may22Jun24Content.width / 2,
      31 - measurements.apr21May22Content.width / 2,
      39 - measurements.latestProject.width / 2,
      -91.5,
      31.5 - measurements.awsArchitectContent.width / 2,
      31.5 - measurements.k8sDeveloperContent.width / 2,
      -32,
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
      footerSection,
    ],
    [
      150,
      -54,
      -45 - measurements.aboutMeContent.height / 2,
      -79,
      -81 - measurements.may22Jun24Content.height / 2,
      -81 - measurements.apr21May22Content.height / 2,
      -51 - measurements.latestProject.height / 2,
      -121,
      -73 - measurements.awsArchitectContent.height / 2,
      -94 - measurements.k8sDeveloperContent.height / 2,
      -54 + footerOffset,
    ],
  );

  // Self-closing/Double tag animation and line guide
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

  // Opacity and pointer events
  const opacity = useTransform(
    scrollYProgress,
    [
      SECTIONS.hero,
      SECTIONS.index,
      SECTIONS.aboutMe,
      SECTIONS.experience.index,
      SECTIONS.certificates.kubernetesDeveloper,
      footerSection,
    ],
    [0, 1, 1, 0.5, 0.5, 1],
  );

  const pointerEvents = useTransform(scrollYProgress, (value: number) =>
    value >= SECTIONS.index ? 'auto' : 'none',
  );

  return (
    <div className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
      <motion.a
        href="#about-me"
        style={{ scale, x, y, opacity, pointerEvents }}
      >
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

function AboutMeContent({ scrollYProgress, contentRef }: Props) {
  // Scale and position
  const scale = useTransform(
    scrollYProgress,
    [SECTIONS.index, SECTIONS.aboutMe, SECTIONS.experience.index],
    [0, 1, 0],
  );
  const x = useTransform(
    scrollYProgress,
    [SECTIONS.index, SECTIONS.aboutMe, SECTIONS.experience.index],
    [-85, 16, -95],
  );
  const y = useTransform(
    scrollYProgress,
    [SECTIONS.aboutMe, SECTIONS.experience.index],
    [-30, -79],
  );

  // Opacity and pointer events
  const opacity = useTransform(
    scrollYProgress,
    [SECTIONS.index, SECTIONS.aboutMe, SECTIONS.experience.index],
    [0, 1, 0],
  );

  const pointerEvents = useTransform(scrollYProgress, (value: number) =>
    value === SECTIONS.aboutMe ? 'auto' : 'none',
  );

  return (
    <motion.div
      className="fixed left-[50%] top-[50%] z-20 translate-x-[-50%] translate-y-[-50%]"
      style={{ pointerEvents }}
      ref={contentRef}
    >
      <motion.div
        className="w-[calc(100vw-4rem)] max-w-[30rem] gap-2 sm:gap-4"
        style={{ scale, x, y, opacity }}
      >
        <p className="text-muted-foreground">
          I&apos;m all about building robust, type-safe systems where cloud
          services and applications integrate seamlessly. From crafting
          <span className="font-medium text-foreground"> Node.js </span>
          APIs and<span className="font-medium text-foreground"> React </span>
          frontends to architecting{' '}
          <span className="font-medium text-foreground"> AWS </span>
          infrastructure, I thrive on creating scalable solutions that are
          reliable and maintainable.
        </p>
        <p className="text-muted-foreground">
          After two years as a full-stack developer at
          <a
            href="https://primeit.pt"
            target="_blank"
            rel="noreferrer noopener"
            className="mx-1 inline border-b border-dashed border-foreground font-medium text-foreground"
          >
            PrimeIT
          </a>
          where I worked across client projects spanning the entire stack, I
          took some time to travel and strengthen my cloud architecture and
          algorithmic skills. My expertise is backed by
          <a
            href="https://www.credly.com/badges/b86e532b-05a8-4827-9881-87cfe809cdd8"
            target="_blank"
            rel="noreferrer noopener"
            className="mx-1 inline border-b border-dashed border-foreground font-medium text-foreground"
          >
            AWS Solutions Architect
          </a>
          and
          <a
            href="https://www.credly.com/badges/135861ce-7d7b-41a7-8005-3871d9bd4466"
            target="_blank"
            rel="noreferrer noopener"
            className="mx-1 inline border-b border-dashed border-foreground font-medium text-foreground"
          >
            Kubernetes Developer
          </a>
          certifications.
        </p>
        <p className="text-muted-foreground">
          Away from the keyboard, I love exploring forests and mountains with my
          girlfriend and dog, often with a sci-fi or fantasy epic to read in
          those peaceful moments in nature.
        </p>
      </motion.div>
    </motion.div>
  );
}

function AboutMeClosingTag({ scrollYProgress, measurements }: AnimationProps) {
  // Scale and position
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

  // Opacity and pointer events
  const opacity = useTransform(
    scrollYProgress,
    [SECTIONS.index, SECTIONS.aboutMe, SECTIONS.experience.index],
    [0, 1, 0],
  );

  const pointerEvents = useTransform(scrollYProgress, (value: number) =>
    value === SECTIONS.aboutMe ? 'auto' : 'none',
  );

  return (
    <div className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
      <motion.a
        href="#about-me"
        style={{ x, y, opacity, scale, pointerEvents }}
      >
        <span className="min-w-[7.5rem] text-xl font-medium">
          <span className="text-orange-400">{'</'}</span>
          AboutMe
          <span className="text-orange-400">{'>'}</span>
        </span>
      </motion.a>
    </div>
  );
}
