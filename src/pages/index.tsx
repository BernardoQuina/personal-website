import Image from 'next/image';
import { motion, useScroll, useTransform } from 'motion/react';

import { OrbiterEffect } from '../components/orbiter';
import { PageLayout } from '../components/page-layout';
import { Aws } from '../components/icons/aws';
import { NodeJS } from '../components/icons/nodeJS';
import { K8s } from '../components/icons/k8s';
import { React } from '../components/icons/react';

const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 0;
const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 0;
const initialY = windowHeight / 2 - 250;

export default function Home() {
  const { scrollYProgress } = useScroll();

  const profileOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const profileY = useTransform(
    scrollYProgress,
    [0, 0.1],
    [initialY, initialY - 400],
  );

  const developerWidth = 256; // 16rem
  const developerInitialOffset = 30;
  const developerScale = useTransform(scrollYProgress, [0, 0.1], [0.6, 1]);
  const developerX = useTransform(
    scrollYProgress,
    [0, 0.1],
    [
      windowWidth / 2 - developerWidth / 2 + developerInitialOffset,
      windowWidth / 2 - developerWidth / 2 - 20,
    ],
  );

  const developerY = useTransform(
    scrollYProgress,
    [0, 0.1],
    [windowHeight / 2 + 105, windowHeight / 2 - 200],
  );

  return (
    <PageLayout pageTitle="Bernardo Quina" pageDescription="todo">
      {/* <motion.div className="fixed top-24">{scrollYProgress}</motion.div> */}
      <motion.div
        className="fixed left-[50%] items-center"
        style={{ opacity: profileOpacity, x: '-50%', y: profileY }}
      >
        <div className="relative">
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
            className="absolute left-[50%] top-[50%] -z-10 h-[300px] w-[300px] translate-x-[-52%] translate-y-[-50%] rounded-full bg-orange-600 blur-xl"
            style={{
              background:
                'radial-gradient(rgba(255,165,0,1) 30%, rgba(255,165,0,0.3) 31%, rgba(255,165,0,0.15) 50%, rgba(255,165,0,0) 100%)',
            }}
          />

          <div className="absolute left-[50%] top-[50%] z-0 h-[220px] w-[220px] translate-x-[-50%] translate-y-[-50%]">
            <div className="overflow-hidden rounded-2xl border border-orange-300/50 bg-orange-200/70 shadow-lg supports-[backdrop-filter]:bg-orange-200/70 sm:backdrop-blur-[2px]">
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
      <motion.div
        className="fixed bottom-0 left-[50%] translate-x-[-50%] items-center gap-2"
        style={{ opacity: profileOpacity }}
      >
        <span className="text-[10px] font-bold tracking-[0.2rem] text-gray-400 dark:text-gray-600">
          SCROLL
        </span>
        <div className="h-[15vh] w-[0.75px] bg-gray-300 dark:bg-gray-700 sm:h-[20vh]" />
      </motion.div>
      <motion.a
        href="#snap-2"
        className="fixed"
        style={{ scale: developerScale, x: developerX, y: developerY }}
      >
        <h1 className="min-w-[16rem] text-2xl font-medium">
          <span className="text-gray-400">{'<'}</span>
          FullStackDeveloper
          <span className="text-gray-400">{' />'}</span>
        </h1>
      </motion.a>
      <section className="snap-point" id="snap-1" />
      <section className="snap-point" id="snap-2" />
      <section className="snap-point bg-green-500" id="snap-3" />
      <section className="snap-point bg-yellow-500" id="snap-4" />
      <section className="snap-point bg-purple-500" id="snap-5" />
      <section className="snap-point bg-red-500" id="snap-6" />
      <section className="snap-point bg-blue-500" id="snap-7" />
      <section className="snap-point bg-green-500" id="snap-8" />
      <section className="snap-point bg-yellow-500" id="snap-9" />
      <section className="snap-point bg-purple-500" id="snap-10" />
      <section className="snap-point bg-red-500" id="snap-11" />
      {/* <div className="h-[5000vh]" /> */}
    </PageLayout>
  );
}
