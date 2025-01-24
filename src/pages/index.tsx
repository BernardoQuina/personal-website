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

export default function Home() {
  const { scrollYProgress } = useScroll();

  const aboutMeContentRef = useRef<HTMLDivElement>(null);
  const aboutMeContentSize = useElementSize(aboutMeContentRef);

  const may22Jun24ContentRef = useRef<HTMLDivElement>(null);
  const may22Jun24ContentSize = useElementSize(may22Jun24ContentRef);

  const measurements = {
    aboutMeContent: aboutMeContentSize,
    may22Jun24Content: may22Jun24ContentSize,
  };

  return (
    <PageLayout pageTitle="Bernardo Quina" pageDescription="todo">
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
      />
      <LatestProject
        scrollYProgress={scrollYProgress}
        measurements={measurements}
      />
      <Certificates
        scrollYProgress={scrollYProgress}
        measurements={measurements}
      />
      {/* Section snap points */}
      <div className="snap-point" id="snap-7" />
      <div className="snap-point" id="snap-8" />
      <div className="snap-point" id="snap-9" />
      <div className="snap-point" id="snap-10" />
      <div className="snap-point" id="snap-11" />
    </PageLayout>
  );
}
