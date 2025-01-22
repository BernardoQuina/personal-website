import { useRef } from 'react';
import { useScroll } from 'motion/react';

import { DevTag, DevClosingTag } from '../components/dev-tags';
import { PageLayout } from '../components/page-layout';
import { Avatar } from '../components/avatar';
import {
  AboutMeClosingTag,
  AboutMeContent,
  AboutMeTag,
} from '../components/about-me';
import { ExperienceClosingTag, ExperienceTag } from '../components/experience';
import {
  LatestProjectClosingTag,
  LatestProjectTag,
} from '../components/latest-project';
import {
  CertificatesClosingTag,
  CertificatesTag,
} from '../components/certificates';
import useElementSize from '../hooks/useElementSize';

export default function Home() {
  const { scrollYProgress } = useScroll();

  const aboutMeContentRef = useRef<HTMLDivElement>(null);
  const aboutMeContentSize = useElementSize(aboutMeContentRef);

  const measurements = { aboutMeContent: aboutMeContentSize };

  return (
    <PageLayout pageTitle="Bernardo Quina" pageDescription="todo">
      <Avatar scrollYProgress={scrollYProgress} />
      <DevTag scrollYProgress={scrollYProgress} measurements={measurements} />
      <AboutMeTag
        scrollYProgress={scrollYProgress}
        measurements={measurements}
      />
      <AboutMeContent
        scrollYProgress={scrollYProgress}
        contentRef={aboutMeContentRef}
      />
      <AboutMeClosingTag
        scrollYProgress={scrollYProgress}
        measurements={measurements}
      />
      <ExperienceTag
        scrollYProgress={scrollYProgress}
        measurements={measurements}
      />
      <ExperienceClosingTag
        scrollYProgress={scrollYProgress}
        measurements={measurements}
      />
      <LatestProjectTag
        scrollYProgress={scrollYProgress}
        measurements={measurements}
      />
      <LatestProjectClosingTag
        scrollYProgress={scrollYProgress}
        measurements={measurements}
      />
      <CertificatesTag
        scrollYProgress={scrollYProgress}
        measurements={measurements}
      />
      <CertificatesClosingTag
        scrollYProgress={scrollYProgress}
        measurements={measurements}
      />
      <DevClosingTag
        scrollYProgress={scrollYProgress}
        measurements={measurements}
      />
      {/* Section snap points */}
      <div className="snap-point" id="hero" />
      <div className="snap-point" id="index" />
      <div className="snap-point" id="about-me" />
      <div className="snap-point" id="snap-4" />
      <div className="snap-point" id="snap-5" />
      <div className="snap-point" id="snap-6" />
      <div className="snap-point" id="snap-7" />
      <div className="snap-point" id="snap-8" />
      <div className="snap-point" id="snap-9" />
      <div className="snap-point" id="snap-10" />
      <div className="snap-point" id="snap-11" />
    </PageLayout>
  );
}
