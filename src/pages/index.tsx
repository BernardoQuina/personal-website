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

  console.log({ aboutMeContentSize });

  return (
    <PageLayout pageTitle="Bernardo Quina" pageDescription="todo">
      <Avatar scrollYProgress={scrollYProgress} />
      <DevTag
        scrollYProgress={scrollYProgress}
        aboutMeContentSize={aboutMeContentSize}
      />
      <AboutMeTag
        scrollYProgress={scrollYProgress}
        aboutMeContentSize={aboutMeContentSize}
      />
      <AboutMeContent
        scrollYProgress={scrollYProgress}
        contentRef={aboutMeContentRef}
      />
      <AboutMeClosingTag
        scrollYProgress={scrollYProgress}
        aboutMeContentSize={aboutMeContentSize}
      />
      <ExperienceTag
        scrollYProgress={scrollYProgress}
        aboutMeContentSize={aboutMeContentSize}
      />
      <ExperienceClosingTag
        scrollYProgress={scrollYProgress}
        aboutMeContentSize={aboutMeContentSize}
      />
      <LatestProjectTag
        scrollYProgress={scrollYProgress}
        aboutMeContentSize={aboutMeContentSize}
      />
      <LatestProjectClosingTag
        scrollYProgress={scrollYProgress}
        aboutMeContentSize={aboutMeContentSize}
      />
      <CertificatesTag
        scrollYProgress={scrollYProgress}
        aboutMeContentSize={aboutMeContentSize}
      />
      <CertificatesClosingTag
        scrollYProgress={scrollYProgress}
        aboutMeContentSize={aboutMeContentSize}
      />
      <DevClosingTag
        scrollYProgress={scrollYProgress}
        aboutMeContentSize={aboutMeContentSize}
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
