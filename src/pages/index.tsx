import { useScroll } from 'motion/react';

import { DevTag, DevClosingTag } from '../components/dev-tags';
import { PageLayout } from '../components/page-layout';
import { Avatar } from '../components/avatar';

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <PageLayout pageTitle="Bernardo Quina" pageDescription="todo">
      <Avatar scrollYProgress={scrollYProgress} />
      <DevTag scrollYProgress={scrollYProgress} />
      <DevClosingTag scrollYProgress={scrollYProgress} />
      {/* Section snap points */}
      <div className="snap-point" id="snap-1" />
      <div className="snap-point" id="snap-2" />
      <div className="snap-point bg-green-500" id="snap-3" />
      <div className="snap-point bg-yellow-500" id="snap-4" />
      <div className="snap-point bg-purple-500" id="snap-5" />
      <div className="snap-point bg-red-500" id="snap-6" />
      <div className="snap-point bg-blue-500" id="snap-7" />
      <div className="snap-point bg-green-500" id="snap-8" />
      <div className="snap-point bg-yellow-500" id="snap-9" />
      <div className="snap-point bg-purple-500" id="snap-10" />
      <div className="snap-point bg-red-500" id="snap-11" />
    </PageLayout>
  );
}
