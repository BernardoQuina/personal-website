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
  const { height: aboutMeContentHeight } = useElementSize(aboutMeContentRef);

  console.log({ aboutMeContentHeight });

  return (
    <PageLayout pageTitle="Bernardo Quina" pageDescription="todo">
      <Avatar scrollYProgress={scrollYProgress} />
      <DevTag
        scrollYProgress={scrollYProgress}
        aboutMeContentHeight={aboutMeContentHeight}
      />
      <AboutMeTag
        scrollYProgress={scrollYProgress}
        aboutMeContentHeight={aboutMeContentHeight}
      />
      <AboutMeContent
        scrollYProgress={scrollYProgress}
        contentRef={aboutMeContentRef}
      />
      <AboutMeClosingTag
        scrollYProgress={scrollYProgress}
        aboutMeContentHeight={aboutMeContentHeight}
      />
      <ExperienceTag
        scrollYProgress={scrollYProgress}
        aboutMeContentHeight={aboutMeContentHeight}
      />
      <ExperienceClosingTag
        scrollYProgress={scrollYProgress}
        aboutMeContentHeight={aboutMeContentHeight}
      />
      <LatestProjectTag
        scrollYProgress={scrollYProgress}
        aboutMeContentHeight={aboutMeContentHeight}
      />
      <LatestProjectClosingTag
        scrollYProgress={scrollYProgress}
        aboutMeContentHeight={aboutMeContentHeight}
      />
      <CertificatesTag
        scrollYProgress={scrollYProgress}
        aboutMeContentHeight={aboutMeContentHeight}
      />
      <CertificatesClosingTag
        scrollYProgress={scrollYProgress}
        aboutMeContentHeight={aboutMeContentHeight}
      />
      <DevClosingTag
        scrollYProgress={scrollYProgress}
        aboutMeContentHeight={aboutMeContentHeight}
      />
      {/* Section snap points */}
      <div className="snap-point" id="snap-1" />
      <div className="snap-point" id="snap-2" />
      <div className="snap-point" id="snap-3" />
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
