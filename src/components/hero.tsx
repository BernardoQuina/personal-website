import Image from 'next/image';
import { motion, MotionValue, useTransform } from 'motion/react';

import { SECTIONS } from '../constants';

import { OrbiterEffect } from './orbiter';
import { Aws } from './icons/aws';
import { NodeJS } from './icons/nodeJS';
import { K8s } from './icons/k8s';
import { React } from './icons/react';

type Props = {
  scrollYProgress: MotionValue<number>;
};

export function Hero({ scrollYProgress }: Props) {
  const y = useTransform(
    scrollYProgress,
    [SECTIONS.hero, SECTIONS.index],
    [-50, -500],
  );
  const opacity = useTransform(
    scrollYProgress,
    [SECTIONS.hero, SECTIONS.index],
    [1, 0],
  );

  return (
    <section className="snap-point -z-10" id="hero">
      {/* <motion.div className="fixed top-24">{scrollYProgress}</motion.div> */}
      <div className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
        <motion.div className="items-center" style={{ opacity, y }}>
          <div className="pointer-events-none relative">
            <OrbiterEffect initialPosition={90} rotate={45}>
              <Aws className="-rotate-45" />
            </OrbiterEffect>
            <OrbiterEffect
              className="mt-[-300px]"
              initialPosition={270}
              rotate={45}
            >
              <K8s className="-rotate-45" />
            </OrbiterEffect>
            <OrbiterEffect className="mt-[-300px]" rotate={135}>
              <NodeJS className="rotate-[-135deg]" />
            </OrbiterEffect>
            <OrbiterEffect
              className="mt-[-300px]"
              rotate={135}
              initialPosition={180}
            >
              <React className="rotate-[-135deg]" />
            </OrbiterEffect>
            <div
              className="absolute left-[50%] top-[50%] -z-10 h-[250px] w-[250px] translate-x-[-52%] translate-y-[-50%] rounded-full blur-xl"
              style={{
                background:
                  'radial-gradient(rgba(0,55,255,1) 10%, rgba(0,55,255,0.3) 25%, rgba(0,55,255,0.15) 50%, rgba(0,55,255,0) 100%)',
              }}
            />

            <div className="absolute left-[50%] top-[50%] z-0 h-[220px] w-[220px] translate-x-[-50%] translate-y-[-50%]">
              <div className="overflow-hidden rounded-2xl border border-blue-300/50 bg-blue-200/70 shadow-lg">
                <Image
                  src="/images/profile-picture.png"
                  alt="Bernardo Quina's profile picture"
                  height={220}
                  width={220}
                  priority
                />
              </div>
            </div>
          </div>
          <div className="w-[220px]">
            <span className="text-sm font-medium">Hey there 👋 , I&apos;m</span>
            <h2 className="text-3xl font-medium">Bernardo Quina</h2>
          </div>
        </motion.div>
      </div>
      <motion.div
        className="fixed bottom-0 left-[50%] translate-x-[-50%] items-center gap-2"
        style={{ opacity }}
      >
        <span className="text-[10px] font-bold tracking-[0.2rem] text-gray-400 dark:text-gray-600">
          SCROLL
        </span>
        <div className="h-[15vh] w-[1px] bg-gray-200 dark:bg-gray-800 sm:h-[20vh]" />
      </motion.div>
    </section>
  );
}
