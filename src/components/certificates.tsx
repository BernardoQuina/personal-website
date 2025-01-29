import { motion, useTransform } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

import { AnimationProps, ContentRefProps } from '../types';
import { SECTIONS } from '../constants';

export function Certificates({
  scrollYProgress,
  measurements,
  awsArchitectContentRef,
  k8sDeveloperContentRef,
}: AnimationProps & {
  awsArchitectContentRef: ContentRefProps['contentRef'];
  k8sDeveloperContentRef: ContentRefProps['contentRef'];
}) {
  return (
    <section>
      <div className="snap-point" id="certificates" />
      <CertificatesTag
        scrollYProgress={scrollYProgress}
        measurements={measurements}
      />
      <AwsArchitect
        scrollYProgress={scrollYProgress}
        measurements={measurements}
        contentRef={awsArchitectContentRef}
      />
      <K8sDeveloper
        scrollYProgress={scrollYProgress}
        measurements={measurements}
        contentRef={k8sDeveloperContentRef}
      />
      <CertificatesClosingTag
        scrollYProgress={scrollYProgress}
        measurements={measurements}
      />
    </section>
  );
}

function CertificatesTag({ scrollYProgress, measurements }: AnimationProps) {
  // Scale and position
  const scale = useTransform(
    scrollYProgress,
    [
      SECTIONS.hero,
      SECTIONS.index,
      SECTIONS.aboutMe,
      SECTIONS.latestProject,
      SECTIONS.certificates.index,
      SECTIONS.certificates.awsSolutionsArchitect,
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
      SECTIONS.certificates.index,
      SECTIONS.certificates.awsSolutionsArchitect,
    ],
    [
      17,
      -21,
      47 - measurements.aboutMeContent.width / 2,
      -47,
      39 - measurements.may22Jun24Content.width / 2,
      39 - measurements.apr21May22Content.width / 2,
      50 - measurements.latestProject.width / 2,
      -62,
      39 - measurements.awsArchitectContent.width / 2,
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
      165,
      54,
      51.5 + measurements.aboutMeContent.height / 2,
      100,
      81.5 + measurements.may22Jun24Content.height / 2,
      81.5 + measurements.apr21May22Content.height / 2,
      50 + measurements.latestProject.height / 2,
      -54,
      -10 - measurements.awsArchitectContent.height / 2,
      -31 - measurements.k8sDeveloperContent.height / 2,
    ],
  );

  // Self-closing/Double tag animation and line guide
  const dashOpacity = useTransform(
    scrollYProgress,
    [SECTIONS.latestProject, SECTIONS.latestProject + SECTIONS.length / 2],
    [1, 0],
  );
  const closingBracketX = useTransform(
    scrollYProgress,
    [SECTIONS.latestProject, SECTIONS.certificates.index],
    [0, -14],
  );

  const lineGuideHeight = useTransform(
    scrollYProgress,
    [
      SECTIONS.latestProject,
      SECTIONS.certificates.index,
      SECTIONS.certificates.awsSolutionsArchitect,
      SECTIONS.certificates.kubernetesDeveloper,
    ],
    [
      0,
      82,
      79 + measurements.awsArchitectContent.height,
      79 + measurements.k8sDeveloperContent.height,
    ],
  );
  const lineGuideX = useTransform(
    scrollYProgress,
    [
      SECTIONS.latestProject,
      SECTIONS.certificates.index,
      SECTIONS.certificates.awsSolutionsArchitect,
    ],
    [
      72 - measurements.latestProject.width / 2,
      -62,
      59 - measurements.awsArchitectContent.width / 2,
    ],
  );

  // Opacity and pointer events
  const opacity = useTransform(
    scrollYProgress,
    [
      SECTIONS.hero,
      SECTIONS.index,
      SECTIONS.aboutMe,
      SECTIONS.latestProject,
      SECTIONS.certificates.index,
      SECTIONS.certificates.awsSolutionsArchitect,
    ],
    [0, 1, 0.5, 0.5, 1, 0.5],
  );

  const pointerEvents = useTransform(scrollYProgress, (value: number) =>
    value >= SECTIONS.index ? 'auto' : 'none',
  );

  return (
    <div className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
      <motion.a
        href="#certificates"
        style={{ scale, x, y, opacity, pointerEvents }}
      >
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
      </motion.a>
      <motion.div
        className="absolute left-1 top-7 bg-gray-200 dark:bg-gray-800"
        style={{ width: 1, y, x: lineGuideX, height: lineGuideHeight }}
      />
    </div>
  );
}

function CertificatesClosingTag({
  scrollYProgress,
  measurements,
}: AnimationProps) {
  // Scale and position
  const scale = useTransform(
    scrollYProgress,
    [
      SECTIONS.latestProject,
      SECTIONS.certificates.index,
      SECTIONS.certificates.awsSolutionsArchitect,
    ],
    [0.7, 1, 0.7],
  );

  const x = useTransform(
    scrollYProgress,
    [
      SECTIONS.latestProject,
      SECTIONS.certificates.index,
      SECTIONS.certificates.awsSolutionsArchitect,
    ],
    [
      50 - measurements.latestProject.width / 2,
      -62,
      39 - measurements.awsArchitectContent.width / 2,
    ],
  );
  const y = useTransform(
    scrollYProgress,
    [
      SECTIONS.latestProject,
      SECTIONS.certificates.index,
      SECTIONS.certificates.awsSolutionsArchitect,
      SECTIONS.certificates.kubernetesDeveloper,
    ],
    [
      50 + measurements.latestProject.height / 2,
      54,
      91 + measurements.awsArchitectContent.height / 2,
      70 + measurements.k8sDeveloperContent.height / 2,
    ],
  );

  // Opacity and pointer events
  const opacity = useTransform(
    scrollYProgress,
    [
      SECTIONS.latestProject,
      SECTIONS.certificates.index,
      SECTIONS.certificates.awsSolutionsArchitect,
    ],
    [0, 1, 0.5],
  );

  const pointerEvents = useTransform(scrollYProgress, (value: number) =>
    value >= SECTIONS.certificates.index &&
    value <= SECTIONS.certificates.kubernetesDeveloper
      ? 'auto'
      : 'none',
  );

  return (
    <div className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
      <motion.a
        href="#certificates"
        style={{ x, y, opacity, scale, pointerEvents }}
      >
        <span className="min-w-[9rem] text-xl font-medium">
          <span className="text-orange-400">{'</'}</span>
          Certificates
          <span className="text-orange-400">{'>'}</span>
        </span>
      </motion.a>
    </div>
  );
}

function AwsArchitect({
  scrollYProgress,
  measurements,
  contentRef,
}: AnimationProps & ContentRefProps) {
  return (
    <article>
      <div className="snap-point" id="certificates-aws-solutions-architect" />
      <AwsArchitectTag
        scrollYProgress={scrollYProgress}
        measurements={measurements}
      />
      <AwsArchitectContent
        scrollYProgress={scrollYProgress}
        contentRef={contentRef}
        measurements={measurements}
      />

      <AwsArchitectClosingTag
        scrollYProgress={scrollYProgress}
        measurements={measurements}
      />
    </article>
  );
}

function AwsArchitectTag({ scrollYProgress, measurements }: AnimationProps) {
  // Scale and position
  const scale = useTransform(
    scrollYProgress,
    [
      SECTIONS.latestProject,
      SECTIONS.certificates.index,
      SECTIONS.certificates.awsSolutionsArchitect,
      SECTIONS.certificates.kubernetesDeveloper,
      SECTIONS.footer,
    ],
    [0.5, 1, 1, 0.7, 0.5],
  );
  const x = useTransform(
    scrollYProgress,
    [
      SECTIONS.latestProject,
      SECTIONS.certificates.index,
      SECTIONS.certificates.awsSolutionsArchitect,
      SECTIONS.certificates.kubernetesDeveloper,
      SECTIONS.footer,
    ],
    [
      70 - measurements.latestProject.width / 2,
      0,
      117 - measurements.awsArchitectContent.width / 2,
      81 - measurements.k8sDeveloperContent.width / 2,
      50 - measurements.latestProject.width / 2,
    ],
  );
  const y = useTransform(
    scrollYProgress,
    [
      SECTIONS.latestProject,
      SECTIONS.certificates.index,
      SECTIONS.certificates.awsSolutionsArchitect,
      SECTIONS.certificates.kubernetesDeveloper,
      SECTIONS.footer,
    ],
    [
      50 + measurements.latestProject.height / 2,
      -18,
      15 - measurements.awsArchitectContent.height / 2,
      -10 - measurements.k8sDeveloperContent.height / 2,
      -30 - measurements.latestProject.height / 2,
    ],
  );

  // Self-closing/Double tag animation and line guide
  const dashOpacity = useTransform(
    scrollYProgress,
    [
      SECTIONS.certificates.index,
      SECTIONS.certificates.index + SECTIONS.length / 2,
      SECTIONS.certificates.awsSolutionsArchitect + SECTIONS.length / 2,
      SECTIONS.certificates.kubernetesDeveloper,
    ],
    [1, 0, 0, 1],
  );
  const closingBracketX = useTransform(
    scrollYProgress,
    [
      SECTIONS.certificates.index,
      SECTIONS.certificates.awsSolutionsArchitect,
      SECTIONS.certificates.kubernetesDeveloper,
    ],
    [0, -14, 0],
  );

  const lineGuideHeight = useTransform(
    scrollYProgress,
    [
      SECTIONS.certificates.index,
      SECTIONS.certificates.awsSolutionsArchitect,
      SECTIONS.certificates.kubernetesDeveloper,
    ],
    [0, 5 + measurements.awsArchitectContent.height, 0],
  );
  const lineGuideX = useTransform(
    scrollYProgress,
    [SECTIONS.certificates.index, SECTIONS.certificates.awsSolutionsArchitect],
    [0, 117 - measurements.may22Jun24Content.width / 2],
  );

  // Opacity and pointer events
  const opacity = useTransform(
    scrollYProgress,
    [
      SECTIONS.latestProject,
      SECTIONS.certificates.index,
      SECTIONS.certificates.awsSolutionsArchitect,
      SECTIONS.certificates.kubernetesDeveloper,
      SECTIONS.footer,
    ],
    [0, 1, 1, 0.5, 0],
  );

  const pointerEvents = useTransform(scrollYProgress, (value: number) =>
    value >= SECTIONS.certificates.index &&
    value <= SECTIONS.certificates.kubernetesDeveloper
      ? 'auto'
      : 'none',
  );

  return (
    <div className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
      <motion.a
        href="#certificates-aws-solutions-architect"
        style={{ scale, x, y, opacity, pointerEvents }}
      >
        <h5 className="min-w-[15rem] text-xl font-medium">
          <span className="text-orange-400">{'<'}</span>
          AwsSolutionsArchitect
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

function AwsArchitectContent({
  scrollYProgress,
  contentRef,
  measurements,
}: AnimationProps & ContentRefProps) {
  // Scale and position
  const scale = useTransform(
    scrollYProgress,
    [
      SECTIONS.certificates.index,
      SECTIONS.certificates.awsSolutionsArchitect,
      SECTIONS.certificates.kubernetesDeveloper,
    ],
    [0, 1, 0],
  );
  const x = useTransform(
    scrollYProgress,
    [
      SECTIONS.certificates.index,
      SECTIONS.certificates.awsSolutionsArchitect,
      SECTIONS.certificates.kubernetesDeveloper,
    ],
    [-110, 16, 10 - measurements.k8sDeveloperContent.width / 2],
  );
  const y = useTransform(
    scrollYProgress,
    [
      SECTIONS.certificates.index,
      SECTIONS.certificates.awsSolutionsArchitect,
      SECTIONS.certificates.kubernetesDeveloper,
    ],
    [-20, 30, -20 - measurements.k8sDeveloperContent.height / 2],
  );

  // Opacity and pointer events
  const opacity = useTransform(
    scrollYProgress,
    [
      SECTIONS.certificates.index,
      SECTIONS.certificates.awsSolutionsArchitect,
      SECTIONS.certificates.kubernetesDeveloper,
    ],
    [0, 1, 0],
  );

  const pointerEvents = useTransform(scrollYProgress, (value: number) =>
    value === SECTIONS.certificates.awsSolutionsArchitect ? 'auto' : 'none',
  );

  return (
    <motion.div
      className="pointer-events-none fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
      ref={contentRef}
      style={{ pointerEvents }}
    >
      <motion.div
        className="w-[calc(100vw-4rem)] max-w-[30rem]"
        style={{ scale, x, y, opacity }}
      >
        <div className="flex-row items-center gap-1 py-4">
          <h6 className="font-medium">Software Developer ·</h6>
          <a
            href="https://primeit.pt"
            target="_blank"
            rel="noreferrer noopener"
            className="flex-row items-center gap-1 font-medium"
          >
            <span> PrimeIT</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
        <div className="gap-2 sm:gap-4">
          <p className="text-muted-foreground">
            <span className="font-medium text-foreground">Backend: </span>
            Developed scalable Node.js APIs using TypeScript, creating efficient
            data models and services for enterprise clients across multiple
            projects.
          </p>
          <p className="text-muted-foreground">
            <span className="font-medium text-foreground">Frontend: </span>Built
            responsive React and Next.js interfaces, developing reusable
            components and delivering pixel-perfect web apps.
          </p>
          <p className="text-muted-foreground">
            <span className="font-medium text-foreground">DevOps: </span>
            Managed AWS cloud infrastructure using IaC, implemented CI/CD
            pipelines, and optimized performance and reliability.
          </p>
          <p className="text-muted-foreground">
            <span className="font-medium text-foreground">Collaboration: </span>
            Worked directly with clients in an agile team, adapting quickly to
            diverse project requirements.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

function AwsArchitectClosingTag({
  scrollYProgress,
  measurements,
}: AnimationProps) {
  // Scale and position
  const scale = useTransform(
    scrollYProgress,
    [
      SECTIONS.certificates.awsSolutionsArchitect,
      SECTIONS.certificates.kubernetesDeveloper,
    ],
    [1, 0.7],
  );
  const x = useTransform(
    scrollYProgress,
    [
      SECTIONS.certificates.index,
      SECTIONS.certificates.awsSolutionsArchitect,
      SECTIONS.certificates.kubernetesDeveloper,
    ],
    [
      0,
      117 - measurements.awsArchitectContent.width / 2,
      81 - measurements.k8sDeveloperContent.width / 2,
    ],
  );

  const y = useTransform(
    scrollYProgress,
    [
      SECTIONS.certificates.index,
      SECTIONS.certificates.awsSolutionsArchitect,
      SECTIONS.certificates.kubernetesDeveloper,
    ],
    [
      -18,
      45 + measurements.awsArchitectContent.height / 2,
      -10 - measurements.k8sDeveloperContent.height / 2,
    ],
  );

  // Opacity and pointer events
  const opacity = useTransform(
    scrollYProgress,
    [
      SECTIONS.certificates.index,
      SECTIONS.certificates.awsSolutionsArchitect,
      SECTIONS.certificates.kubernetesDeveloper,
    ],
    [0, 1, 0],
  );

  const pointerEvents = useTransform(scrollYProgress, (value: number) =>
    value >= SECTIONS.certificates.awsSolutionsArchitect ? 'auto' : 'none',
  );

  return (
    <div className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
      <motion.a
        href="#experience-may-22-jun-24"
        style={{ x, y, opacity, scale, pointerEvents }}
      >
        <span className="min-w-[15rem] text-xl font-medium">
          <span className="text-orange-400">{'</'}</span>
          AwsSolutionsArchitect
          <span className="text-orange-400">{'>'}</span>
        </span>
      </motion.a>
    </div>
  );
}

function K8sDeveloper({
  scrollYProgress,
  measurements,
  contentRef,
}: AnimationProps & ContentRefProps) {
  return (
    <article>
      <div className="snap-point" id="certificates-kubernetes-developer" />
      <K8sDeveloperTag
        scrollYProgress={scrollYProgress}
        measurements={measurements}
      />
      <K8sDeveloperContent
        scrollYProgress={scrollYProgress}
        contentRef={contentRef}
        measurements={measurements}
      />
      <K8sDeveloperClosingTag
        scrollYProgress={scrollYProgress}
        measurements={measurements}
      />
    </article>
  );
}

function K8sDeveloperTag({ scrollYProgress, measurements }: AnimationProps) {
  // Scale and position
  const scale = useTransform(
    scrollYProgress,
    [
      SECTIONS.latestProject,
      SECTIONS.certificates.index,
      SECTIONS.certificates.awsSolutionsArchitect,
      SECTIONS.certificates.kubernetesDeveloper,
      SECTIONS.footer,
    ],
    [0.5, 1, 0.7, 1, 0.5],
  );
  const x = useTransform(
    scrollYProgress,
    [
      SECTIONS.latestProject,
      SECTIONS.certificates.index,
      SECTIONS.certificates.awsSolutionsArchitect,
      SECTIONS.certificates.kubernetesDeveloper,
      SECTIONS.footer,
    ],
    [
      70 - measurements.latestProject.width / 2,
      0,
      81 - measurements.awsArchitectContent.width / 2,
      117 - measurements.k8sDeveloperContent.width / 2,
      60 - measurements.latestProject.width / 2,
    ],
  );
  const y = useTransform(
    scrollYProgress,
    [
      SECTIONS.latestProject,
      SECTIONS.certificates.index,
      SECTIONS.certificates.awsSolutionsArchitect,
      SECTIONS.certificates.kubernetesDeveloper,
      SECTIONS.footer,
    ],
    [
      50 + measurements.latestProject.height / 2,
      18,
      70 + measurements.awsArchitectContent.height / 2,
      15 - measurements.k8sDeveloperContent.height / 2,
      -30 - measurements.latestProject.height / 2,
    ],
  );

  // Self-closing/Double tag animation and line guide
  const dashOpacity = useTransform(
    scrollYProgress,
    [
      SECTIONS.certificates.awsSolutionsArchitect,
      SECTIONS.certificates.awsSolutionsArchitect + SECTIONS.length / 2,
    ],
    [1, 0],
  );
  const closingBracketX = useTransform(
    scrollYProgress,
    [
      SECTIONS.certificates.awsSolutionsArchitect,
      SECTIONS.certificates.kubernetesDeveloper,
    ],
    [0, -14],
  );

  const lineGuideHeight = useTransform(
    scrollYProgress,
    [
      SECTIONS.certificates.awsSolutionsArchitect,
      SECTIONS.certificates.kubernetesDeveloper,
      SECTIONS.footer,
    ],
    [0, 5 + measurements.apr21May22Content.height, 0],
  );

  const lineGuideX = useTransform(
    scrollYProgress,
    [
      SECTIONS.certificates.awsSolutionsArchitect,
      SECTIONS.certificates.kubernetesDeveloper,
    ],
    [
      116 - measurements.awsArchitectContent.width / 2,
      117 - measurements.k8sDeveloperContent.width / 2,
    ],
  );

  // Opacity and pointer events
  const opacity = useTransform(
    scrollYProgress,
    [
      SECTIONS.latestProject,
      SECTIONS.certificates.index,
      SECTIONS.certificates.awsSolutionsArchitect,
      SECTIONS.certificates.kubernetesDeveloper,
      SECTIONS.footer,
    ],
    [0, 1, 0.5, 1, 0],
  );

  const pointerEvents = useTransform(scrollYProgress, (value: number) =>
    value >= SECTIONS.certificates.index &&
    value <= SECTIONS.certificates.kubernetesDeveloper
      ? 'auto'
      : 'none',
  );

  return (
    <div className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
      <motion.a
        href="#certificates-kubernetes-developer"
        style={{ scale, x, y, opacity, pointerEvents }}
      >
        <h5 className="min-w-[15rem] text-xl font-medium">
          <span className="text-orange-400">{'<'}</span>
          KubernetesDeveloper
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

function K8sDeveloperContent({
  scrollYProgress,
  contentRef,
  measurements,
}: AnimationProps & ContentRefProps) {
  // Scale and position
  const scale = useTransform(
    scrollYProgress,
    [
      SECTIONS.certificates.awsSolutionsArchitect,
      SECTIONS.certificates.kubernetesDeveloper,
      SECTIONS.footer,
    ],
    [0, 1, 0],
  );
  const x = useTransform(
    scrollYProgress,
    [
      SECTIONS.certificates.awsSolutionsArchitect,
      SECTIONS.certificates.kubernetesDeveloper,
      SECTIONS.footer,
    ],
    [
      -measurements.awsArchitectContent.width / 2,
      16,
      10 - measurements.latestProject.width / 2,
    ],
  );
  const y = useTransform(
    scrollYProgress,
    [
      SECTIONS.certificates.awsSolutionsArchitect,
      SECTIONS.certificates.kubernetesDeveloper,
      SECTIONS.footer,
    ],
    [
      70 + measurements.awsArchitectContent.height / 2,
      30,
      -30 - measurements.latestProject.height / 2,
    ],
  );

  // Opacity and pointer events
  const opacity = useTransform(
    scrollYProgress,
    [
      SECTIONS.certificates.awsSolutionsArchitect,
      SECTIONS.certificates.kubernetesDeveloper,
      SECTIONS.footer,
    ],
    [0, 1, 0],
  );

  const pointerEvents = useTransform(scrollYProgress, (value: number) =>
    value === SECTIONS.certificates.kubernetesDeveloper ? 'auto' : 'none',
  );

  return (
    <motion.div
      className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
      ref={contentRef}
      style={{ pointerEvents }}
    >
      <motion.div
        className="w-[calc(100vw-4rem)] max-w-[30rem]"
        style={{ scale, x, y, opacity }}
      >
        <h6 className="py-4 font-medium">Software Developer · Freelancer</h6>
        <div className="gap-2 sm:gap-4">
          <p className="text-muted-foreground">
            <span className="font-medium text-foreground">Freelance: </span>
            Completed a web application project for a client using Node.js and
            Next.js, gaining early professional experience in full-stack
            development.
          </p>
          <p className="text-muted-foreground">
            <span className="font-medium text-foreground">
              Independent Project:{' '}
            </span>
            Developed a React Native mobile application with a Node.js backend,
            focusing on learning advanced development techniques and exploring
            full-stack mobile development challenges
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

function K8sDeveloperClosingTag({
  scrollYProgress,
  measurements,
}: AnimationProps) {
  // Scale and position
  const scale = useTransform(
    scrollYProgress,
    [
      SECTIONS.certificates.awsSolutionsArchitect,
      SECTIONS.certificates.kubernetesDeveloper,
      SECTIONS.footer,
    ],
    [0.7, 1, 0.5],
  );
  const x = useTransform(
    scrollYProgress,
    [
      SECTIONS.certificates.awsSolutionsArchitect,
      SECTIONS.certificates.kubernetesDeveloper,
      SECTIONS.footer,
    ],
    [
      81 - measurements.awsArchitectContent.width / 2,
      117 - measurements.k8sDeveloperContent.width / 2,
      60 - measurements.latestProject.width / 2,
    ],
  );
  const y = useTransform(
    scrollYProgress,
    [
      SECTIONS.certificates.awsSolutionsArchitect,
      SECTIONS.certificates.kubernetesDeveloper,
      SECTIONS.footer,
    ],
    [
      70 + measurements.awsArchitectContent.height / 2,
      45 + measurements.k8sDeveloperContent.height / 2,
      -30 - measurements.latestProject.height / 2,
    ],
  );

  // Opacity and pointer events
  const opacity = useTransform(
    scrollYProgress,
    [
      SECTIONS.certificates.awsSolutionsArchitect,
      SECTIONS.certificates.kubernetesDeveloper,
      SECTIONS.footer,
    ],
    [0, 1, 0],
  );

  const pointerEvents = useTransform(scrollYProgress, (value: number) =>
    value <= SECTIONS.certificates.kubernetesDeveloper ? 'auto' : 'none',
  );

  return (
    <div className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
      <motion.a
        href="#certificates-kubernetes-developer"
        style={{ x, y, opacity, scale, pointerEvents }}
      >
        <span className="min-w-[15rem] text-xl font-medium">
          <span className="text-orange-400">{'</'}</span>
          KubernetesDeveloper
          <span className="text-orange-400">{'>'}</span>
        </span>
      </motion.a>
    </div>
  );
}
