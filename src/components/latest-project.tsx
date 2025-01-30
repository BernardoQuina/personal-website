import { motion, useTransform } from 'motion/react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

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
      SECTIONS.experience.apr21May22,
      SECTIONS.latestProject,
      SECTIONS.certificates.index,
      SECTIONS.certificates.kubernetesDeveloper,
      footerSection,
    ],
    [0.7, 1, 0.7, 0.7, 1, 0.7, 0.7, 1],
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
      -14.5,
      51 - measurements.aboutMeContent.width / 2,
      -43,
      43 - measurements.may22Jun24Content.width / 2,
      43 - measurements.apr21May22Content.width / 2,
      75 - measurements.latestProject.width / 2,
      -79.5,
      43.5 - measurements.awsArchitectContent.width / 2,
      43.5 - measurements.k8sDeveloperContent.width / 2,
      -14.5,
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
      160,
      18,
      31 + measurements.aboutMeContent.height / 2,
      79,
      61 + measurements.may22Jun24Content.height / 2,
      61 + measurements.apr21May22Content.height / 2,
      -5 - measurements.latestProject.height / 2,
      -79,
      -31 - measurements.awsArchitectContent.height / 2,
      -52 - measurements.k8sDeveloperContent.height / 2,
      18 + footerOffset,
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
      -57,
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
      SECTIONS.certificates.kubernetesDeveloper,
      footerSection,
    ],
    [0, 1, 0.5, 0.5, 1, 0.5, 0.5, 1],
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
          <span className="text-blue-400">{'<'}</span>
          LatestProject
          <motion.span
            className="text-blue-400"
            style={{ opacity: dashOpacity }}
          >
            {' '}
            /
          </motion.span>
          <motion.span
            className="inline-block text-blue-400"
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
    [5 - measurements.apr21May22Content.width / 2, 16, -125],
  );
  const y = useTransform(
    scrollYProgress,
    [
      SECTIONS.experience.apr21May22,
      SECTIONS.latestProject,
      SECTIONS.certificates.index,
    ],
    [61 + measurements.apr21May22Content.height / 2, 10, -79],
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
        className="w-[calc(100vw-4rem)] max-w-[30rem]"
        style={{ scale, x, y, opacity }}
      >
        <a
          href="https://video-analysis.bernardoquina.com"
          target="_blank"
          rel="noreferrer noopener"
          className="flex-row items-center gap-1 pb-4 pt-2 font-medium"
        >
          <h6 className="font-medium">AI Video Analysis Demo</h6>
          <ArrowUpRight className="h-4 w-4" />
        </a>
        <div className="gap-2 sm:gap-4">
          <a
            href="https://video-analysis.bernardoquina.com"
            target="_blank"
            rel="noreferrer noopener"
            className="ml-[-1px]"
          >
            <Image
              className="aspect-video w-full rounded-lg border border-border object-cover shadow-md"
              src="/images/ai-video-analysis-demo.png"
              alt="Latest project screenshot - AI Video Analysis Demo"
              height={1080}
              width={1440}
              priority
            />
          </a>
          <p className="text-muted-foreground">
            Showcase of
            <span className="font-medium text-foreground">
              {' '}
              AI-driven video analysis
            </span>
            , offering transcriptions, object detection, and intelligent Q&A.
          </p>
          <p className="text-muted-foreground">
            Built with
            <span className="font-medium text-foreground">
              {' '}
              AWS services and infrastructure{' '}
            </span>
            using a microservices architecture.
          </p>
          <p className="text-muted-foreground">
            <span className="font-medium text-foreground">Tech stack: </span>
            Node.js, Next.js, Python, CloudFormation (IaC), GitHub Actions.
          </p>
        </div>
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
      -79.5,
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
      25 + measurements.latestProject.height / 2,
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
          <span className="text-blue-400">{'</'}</span>
          LatestProject
          <span className="text-blue-400">{'>'}</span>
        </span>
      </motion.a>
    </div>
  );
}
