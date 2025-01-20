import { useScroll } from 'motion/react';

import { DevTag, DevClosingTag } from '../components/dev-tags';
import { PageLayout } from '../components/page-layout';
import { Avatar } from '../components/avatar';
import { AboutMeClosingTag, AboutMeTag } from '../components/about-me';
import { ExperienceClosingTag, ExperienceTag } from '../components/experience';
import {
  LatestProjectClosingTag,
  LatestProjectTag,
} from '../components/latest-project';
import {
  CertificatesClosingTag,
  CertificatesTag,
} from '../components/certificates';

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <PageLayout pageTitle="Bernardo Quina" pageDescription="todo">
      <Avatar scrollYProgress={scrollYProgress} />
      <DevTag scrollYProgress={scrollYProgress} />
      <AboutMeTag scrollYProgress={scrollYProgress} />
      <AboutMeClosingTag scrollYProgress={scrollYProgress} />
      <ExperienceTag scrollYProgress={scrollYProgress} />
      <ExperienceClosingTag scrollYProgress={scrollYProgress} />
      <LatestProjectTag scrollYProgress={scrollYProgress} />
      <LatestProjectClosingTag scrollYProgress={scrollYProgress} />
      <CertificatesTag scrollYProgress={scrollYProgress} />
      <CertificatesClosingTag scrollYProgress={scrollYProgress} />
      <DevClosingTag scrollYProgress={scrollYProgress} />
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
