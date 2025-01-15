import Image from 'next/image';

import { OrbiterEffect } from '../components/orbiter';
import { PageLayout } from '../components/page-layout';
import { Aws } from '../components/icons/aws';
import { NodeJS } from '../components/icons/nodeJS';
import { K8s } from '../components/icons/k8s';
import { React } from '../components/icons/react';

export default function Home() {
  return (
    <PageLayout pageTitle="Bernardo Quina" pageDescription="todo">
      <div className="items-center justify-center">
        <div className="min-h-[calc(100vh-3.5rem)] items-center justify-center">
          <div className="relative mt-auto">
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
              className="absolute left-[50%] top-[50%] -z-10 h-[300px] w-[300px] translate-x-[-52%] translate-y-[-50%] transform rounded-full bg-orange-600 blur-xl"
              style={{
                background:
                  'radial-gradient(rgba(255,165,0,1) 30%, rgba(255,165,0,0.3) 31%, rgba(255,165,0,0.15) 50%, rgba(255,165,0,0) 100%)',
              }}
            />

            <div className="absolute left-[50%] top-[50%] z-0 h-[220px] w-[220px] translate-x-[-50%] translate-y-[-50%] transform">
              <div className="overflow-hidden rounded-2xl border border-orange-300/50 bg-orange-200/70 shadow-lg backdrop-blur-[2px] supports-[backdrop-filter]:bg-orange-200/70">
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
            <button className="self-end pt-1">
              <h1 className="text-sm font-medium">
                {'<FullStackDeveloper />'}
              </h1>
            </button>
          </div>
          <div className="mt-auto items-center gap-2">
            <span className="text-[10px] font-bold tracking-[0.2rem] text-gray-400 dark:text-gray-700">
              SCROLL
            </span>
            <div className="h-[30vh] w-[0.75px] bg-gray-300 dark:bg-gray-800 sm:h-[20vh]"></div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
