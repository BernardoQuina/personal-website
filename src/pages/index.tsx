import { useRef } from 'react';
import { useScroll } from 'motion/react';

import { ContentIndex } from '../components/content-index';
import { PageLayout } from '../components/page-layout';
import { Hero } from '../components/hero';
import { AboutMe } from '../components/about-me';
import { Experience } from '../components/experience';
import { LatestProject } from '../components/latest-project';
import { Certificates } from '../components/certificates';
import useElementSize from '../hooks/useElementSize';
import { Measurements } from '../types';

export default function Home() {
  const { scrollYProgress } = useScroll();

  const aboutMeContentRef = useRef<HTMLDivElement>(null);
  const aboutMeContentSize = useElementSize(aboutMeContentRef);

  const may22Jun24ContentRef = useRef<HTMLDivElement>(null);
  const may22Jun24ContentSize = useElementSize(may22Jun24ContentRef);

  const apr21May22ContentRef = useRef<HTMLDivElement>(null);
  const apr21May22ContentSize = useElementSize(apr21May22ContentRef);

  const latestProjectContentRef = useRef<HTMLDivElement>(null);
  const latestProjectContentSize = useElementSize(latestProjectContentRef);

  const awsArchitectContentRef = useRef<HTMLDivElement>(null);
  const awsArchitectContentSize = useElementSize(awsArchitectContentRef);

  const k8sDeveloperContentRef = useRef<HTMLDivElement>(null);
  const k8sDeveloperContentSize = useElementSize(k8sDeveloperContentRef);

  const measurements: Measurements = {
    aboutMeContent: aboutMeContentSize,
    may22Jun24Content: may22Jun24ContentSize,
    apr21May22Content: apr21May22ContentSize,
    latestProject: latestProjectContentSize,
    awsArchitectContent: awsArchitectContentSize,
    k8sDeveloperContent: k8sDeveloperContentSize,
  };

  return (
    <PageLayout
      pageTitle="Bernardo Quina"
      pageDescription="Full-stack developer specializing in Node.js, React, and AWS cloud architecture. Experienced in building scalable web applications with modern TypeScript stacks and cloud infrastructure."
    >
      <Hero scrollYProgress={scrollYProgress} />
      <ContentIndex
        scrollYProgress={scrollYProgress}
        measurements={measurements}
      />
      <AboutMe
        scrollYProgress={scrollYProgress}
        measurements={measurements}
        contentRef={aboutMeContentRef}
      />
      <Experience
        scrollYProgress={scrollYProgress}
        measurements={measurements}
        may22Jun24ContentRef={may22Jun24ContentRef}
        apr21May22ContentRef={apr21May22ContentRef}
      />
      <LatestProject
        scrollYProgress={scrollYProgress}
        measurements={measurements}
        contentRef={latestProjectContentRef}
      />
      <Certificates
        scrollYProgress={scrollYProgress}
        measurements={measurements}
        awsArchitectContentRef={awsArchitectContentRef}
        k8sDeveloperContentRef={k8sDeveloperContentRef}
      />
      {/* Section snap points */}
    </PageLayout>
  );
}
