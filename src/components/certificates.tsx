import Image from 'next/image';
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
      SECTIONS.latestProject,
      SECTIONS.certificates.index,
      SECTIONS.certificates.awsSolutionsArchitect,
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
      -21,
      47 - measurements.aboutMeContent.width / 2,
      -47,
      39 - measurements.may22Jun24Content.width / 2,
      39 - measurements.apr21May22Content.width / 2,
      50 - measurements.latestProject.width / 2,
      -62,
      39 - measurements.awsArchitectContent.width / 2,
      39 - measurements.k8sDeveloperContent.width / 2,
      -21,
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
      54 + footerOffset,
    ],
  );

  // Self-closing/Double tag animation and line guide
  const dashOpacity = useTransform(
    scrollYProgress,
    [
      SECTIONS.latestProject,
      SECTIONS.latestProject + SECTIONS.length / 2,
      SECTIONS.certificates.kubernetesDeveloper + SECTIONS.length / 2,
      footerSection,
    ],
    [1, 0, 0, 1],
  );
  const closingBracketX = useTransform(
    scrollYProgress,
    [
      SECTIONS.latestProject,
      SECTIONS.certificates.index,
      SECTIONS.certificates.kubernetesDeveloper,
      footerSection,
    ],
    [0, -14, -14, 0],
  );

  const lineGuideHeight = useTransform(
    scrollYProgress,
    [
      SECTIONS.latestProject,
      SECTIONS.certificates.index,
      SECTIONS.certificates.awsSolutionsArchitect,
      SECTIONS.certificates.kubernetesDeveloper,
      footerSection,
    ],
    [
      0,
      82,
      79 + measurements.awsArchitectContent.height,
      79 + measurements.k8sDeveloperContent.height,
      0,
    ],
  );
  const lineGuideX = useTransform(
    scrollYProgress,
    [
      SECTIONS.latestProject,
      SECTIONS.certificates.index,
      SECTIONS.certificates.awsSolutionsArchitect,
      SECTIONS.certificates.kubernetesDeveloper,
      footerSection,
    ],
    [
      72 - measurements.latestProject.width / 2,
      -62,
      59 - measurements.awsArchitectContent.width / 2,
      59 - measurements.k8sDeveloperContent.width / 2,
      -21,
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
        href="#certificates"
        style={{ scale, x, y, opacity, pointerEvents }}
      >
        <h3 className="min-w-[9rem] text-xl font-medium">
          <span className="text-blue-400">{'<'}</span>
          Certificates
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

function CertificatesClosingTag({
  scrollYProgress,
  measurements,
}: AnimationProps) {
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
      SECTIONS.latestProject,
      SECTIONS.certificates.index,
      SECTIONS.certificates.awsSolutionsArchitect,
      SECTIONS.certificates.kubernetesDeveloper,
      footerSection,
    ],
    [0.7, 1, 0.7, 0.7, 1],
  );

  const x = useTransform(
    scrollYProgress,
    [
      SECTIONS.latestProject,
      SECTIONS.certificates.index,
      SECTIONS.certificates.awsSolutionsArchitect,
      SECTIONS.certificates.kubernetesDeveloper,
      footerSection,
    ],
    [
      50 - measurements.latestProject.width / 2,
      -62,
      39 - measurements.awsArchitectContent.width / 2,
      39 - measurements.k8sDeveloperContent.width / 2,
      -21,
    ],
  );
  const y = useTransform(
    scrollYProgress,
    [
      SECTIONS.latestProject,
      SECTIONS.certificates.index,
      SECTIONS.certificates.awsSolutionsArchitect,
      SECTIONS.certificates.kubernetesDeveloper,
      footerSection,
    ],
    [
      50 + measurements.latestProject.height / 2,
      54,
      91 + measurements.awsArchitectContent.height / 2,
      70 + measurements.k8sDeveloperContent.height / 2,
      54 + footerOffset,
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
      footerSection,
    ],
    [0, 1, 0.5, 0.5, 0],
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
          <span className="text-blue-400">{'</'}</span>
          Certificates
          <span className="text-blue-400">{'>'}</span>
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
      SECTIONS.latestProject,
      SECTIONS.certificates.index,
      SECTIONS.certificates.awsSolutionsArchitect,
      SECTIONS.certificates.kubernetesDeveloper,
      footerSection,
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
      footerSection,
    ],
    [
      70 - measurements.latestProject.width / 2,
      0,
      117 - measurements.awsArchitectContent.width / 2,
      81 - measurements.k8sDeveloperContent.width / 2,
      -21,
    ],
  );
  const y = useTransform(
    scrollYProgress,
    [
      SECTIONS.latestProject,
      SECTIONS.certificates.index,
      SECTIONS.certificates.awsSolutionsArchitect,
      SECTIONS.certificates.kubernetesDeveloper,
      footerSection,
    ],
    [
      50 + measurements.latestProject.height / 2,
      -18,
      15 - measurements.awsArchitectContent.height / 2,
      -10 - measurements.k8sDeveloperContent.height / 2,
      54 + footerOffset,
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
      footerSection,
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
          <span className="text-blue-400">{'<'}</span>
          AwsSolutionsArchitect
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
        className="w-[calc(100vw-4rem)] max-w-[30rem] gap-2 sm:gap-4"
        style={{ scale, x, y, opacity }}
      >
        <div className="gap-2 pt-2 xs:flex-row xs:items-center">
          <a
            href="https://www.credly.com/badges/b86e532b-05a8-4827-9881-87cfe809cdd8"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Check out my AWS Solutions Architect Associate Certificate on Credly"
            className="self-center"
          >
            <Image
              className="aspect-square w-28 object-cover"
              src="/images/aws-sa-certificate.png"
              alt="Latest project screenshot - AI Video Analysis Demo"
              height={340}
              width={340}
              priority
            />
          </a>
          <div>
            <a
              href="https://www.credly.com/badges/b86e532b-05a8-4827-9881-87cfe809cdd8"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Check out my AWS Solutions Architect Associate Certificate on Credly"
              className="flex-row items-center gap-1 pl-0 font-medium xs:pl-0"
            >
              <h6 className="font-medium">
                AWS Solutions Architect - Associate
              </h6>
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <span className="text-left text-muted-foreground xs:text-left">
              Issued by
              <a
                href="https://www.credly.com/org/amazon-web-services"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Go to AWS page on Credly"
                className="ml-1 inline border-b border-dashed border-foreground font-medium text-foreground"
              >
                Amazon Web Services
              </a>
            </span>
          </div>
        </div>
        <div className="gap-2 sm:gap-4">
          <p className="text-muted-foreground">
            Earners of this certification have a comprehensive understanding of
            AWS services and technologies.
          </p>
          <p className="text-muted-foreground">
            They demonstrated the ability to build secure and robust solutions
            using architectural design principles based on customer
            requirements.
          </p>
          <p className="text-muted-foreground">
            Badge owners are able to strategically design well-architected
            distributed systems that are scalable, resilient, efficient, and
            fault-tolerant.
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
    value === SECTIONS.certificates.awsSolutionsArchitect ? 'auto' : 'none',
  );

  return (
    <div className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
      <motion.a
        href="#experience-may-22-jun-24"
        style={{ x, y, opacity, scale, pointerEvents }}
      >
        <span className="min-w-[15rem] text-xl font-medium">
          <span className="text-blue-400">{'</'}</span>
          AwsSolutionsArchitect
          <span className="text-blue-400">{'>'}</span>
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
      SECTIONS.latestProject,
      SECTIONS.certificates.index,
      SECTIONS.certificates.awsSolutionsArchitect,
      SECTIONS.certificates.kubernetesDeveloper,
      footerSection,
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
      footerSection,
    ],
    [
      70 - measurements.latestProject.width / 2,
      0,
      81 - measurements.awsArchitectContent.width / 2,
      117 - measurements.k8sDeveloperContent.width / 2,
      -21,
    ],
  );
  const y = useTransform(
    scrollYProgress,
    [
      SECTIONS.latestProject,
      SECTIONS.certificates.index,
      SECTIONS.certificates.awsSolutionsArchitect,
      SECTIONS.certificates.kubernetesDeveloper,
      footerSection,
    ],
    [
      50 + measurements.latestProject.height / 2,
      18,
      70 + measurements.awsArchitectContent.height / 2,
      15 - measurements.k8sDeveloperContent.height / 2,
      54 + footerOffset,
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
      footerSection,
    ],
    [0, 5 + measurements.k8sDeveloperContent.height, 0],
  );

  const lineGuideX = useTransform(
    scrollYProgress,
    [
      SECTIONS.certificates.awsSolutionsArchitect,
      SECTIONS.certificates.kubernetesDeveloper,
      footerSection,
    ],
    [
      116 - measurements.awsArchitectContent.width / 2,
      117 - measurements.k8sDeveloperContent.width / 2,
      35,
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
      footerSection,
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
          <span className="text-blue-400">{'<'}</span>
          KubernetesDeveloper
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
      SECTIONS.certificates.awsSolutionsArchitect,
      SECTIONS.certificates.kubernetesDeveloper,
      footerSection,
    ],
    [0, 1, 0],
  );
  const x = useTransform(
    scrollYProgress,
    [
      SECTIONS.certificates.awsSolutionsArchitect,
      SECTIONS.certificates.kubernetesDeveloper,
      footerSection,
    ],
    [-measurements.awsArchitectContent.width / 2, 16, -80],
  );
  const y = useTransform(
    scrollYProgress,
    [
      SECTIONS.certificates.awsSolutionsArchitect,
      SECTIONS.certificates.kubernetesDeveloper,
      footerSection,
    ],
    [70 + measurements.awsArchitectContent.height / 2, 30, 54 + footerOffset],
  );

  // Opacity and pointer events
  const opacity = useTransform(
    scrollYProgress,
    [
      SECTIONS.certificates.awsSolutionsArchitect,
      SECTIONS.certificates.kubernetesDeveloper,
      footerSection,
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
        className="w-[calc(100vw-4rem)] max-w-[30rem] gap-2 sm:gap-4"
        style={{ scale, x, y, opacity }}
      >
        <div className="gap-2 pt-2 xs:flex-row xs:items-center sm:gap-4">
          <a
            href="https://www.credly.com/badges/135861ce-7d7b-41a7-8005-3871d9bd4466"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Check out my Kubernetes Application Developer Certificate on Credly"
            className="self-center"
          >
            <Image
              className="aspect-square w-28 object-cover"
              src="/images/ckad-certificate.png"
              alt="Latest project screenshot - AI Video Analysis Demo"
              height={340}
              width={340}
              priority
            />
          </a>
          <div>
            <a
              href="https://www.credly.com/badges/135861ce-7d7b-41a7-8005-3871d9bd4466"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Check out my Kubernetes Application Developer Certificate on Credly"
              className="flex-row items-center gap-1 pl-0 font-medium xs:pl-0"
            >
              <h6 className="font-medium">Kubernetes Application Developer</h6>
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <span className="text-left text-muted-foreground xs:text-left">
              Issued by
              <a
                href="https://www.credly.com/organizations/the-linux-foundation/badges"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Go to The Linux Foundation page on Credly"
                className="ml-1 inline border-b border-dashed border-foreground font-medium text-foreground"
              >
                The Linux Foundation
              </a>
            </span>
          </div>
        </div>
        <div className="gap-2 sm:gap-4">
          <p className="text-muted-foreground">
            Earners of this designation demonstrated the skills to perform the
            responsibilities of a Kubernetes Application Developer.
          </p>
          <p className="text-muted-foreground">
            Earners are able to use core primitives to build, monitor, and
            troubleshoot scalable applications and tools in Kubernetes.
          </p>
          <p className="text-muted-foreground">
            The knowledge demonstrated include Configuration, Multi-Container
            Pods, Observability, Pod Design, Services & Networking, State
            Persistence.
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
      SECTIONS.certificates.awsSolutionsArchitect,
      SECTIONS.certificates.kubernetesDeveloper,
      footerSection,
    ],
    [0.7, 1, 0.5],
  );
  const x = useTransform(
    scrollYProgress,
    [
      SECTIONS.certificates.awsSolutionsArchitect,
      SECTIONS.certificates.kubernetesDeveloper,
      footerSection,
    ],
    [
      81 - measurements.awsArchitectContent.width / 2,
      117 - measurements.k8sDeveloperContent.width / 2,
      -21,
    ],
  );
  const y = useTransform(
    scrollYProgress,
    [
      SECTIONS.certificates.awsSolutionsArchitect,
      SECTIONS.certificates.kubernetesDeveloper,
      footerSection,
    ],
    [
      70 + measurements.awsArchitectContent.height / 2,
      45 + measurements.k8sDeveloperContent.height / 2,
      54 + footerOffset,
    ],
  );

  // Opacity and pointer events
  const opacity = useTransform(
    scrollYProgress,
    [
      SECTIONS.certificates.awsSolutionsArchitect,
      SECTIONS.certificates.kubernetesDeveloper,
      footerSection,
    ],
    [0, 1, 0],
  );

  const pointerEvents = useTransform(scrollYProgress, (value: number) =>
    value === SECTIONS.certificates.kubernetesDeveloper ? 'auto' : 'none',
  );

  return (
    <div className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
      <motion.a
        href="#certificates-kubernetes-developer"
        style={{ x, y, opacity, scale, pointerEvents }}
      >
        <span className="min-w-[15rem] text-xl font-medium">
          <span className="text-blue-400">{'</'}</span>
          KubernetesDeveloper
          <span className="text-blue-400">{'>'}</span>
        </span>
      </motion.a>
    </div>
  );
}
