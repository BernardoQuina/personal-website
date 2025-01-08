import Image from 'next/image';

import { Aws } from '../components/icons/aws';
import { OrbiterEffect } from '../components/orbiter';
import { PageLayout } from '../components/page-layout';

export default function Home() {
  return (
    <PageLayout pageTitle="Bernardo Quina" pageDescription="todo">
      <div className="min-h-[calc(100vh-4.5rem)] items-center justify-center">
        <div className="items-center">
          <div className="relative">
            <OrbiterEffect>
              <Aws />
            </OrbiterEffect>
            <div className="mt-[-300px]">
              <OrbiterEffect
                initialPosition={90}
                reverse
                rotate={45}
                semiMajorAxis={190}
              >
                <div className="rotate-45">
                  <Aws className="[transform:rotateY(180deg)]" />
                </div>
              </OrbiterEffect>
            </div>
            <div className="mt-[-300px]">
              <OrbiterEffect
                initialPosition={180}
                rotate={90}
                semiMajorAxis={140}
              >
                <Aws className="-rotate-90" />
              </OrbiterEffect>
            </div>
            <div className="mt-[-300px]">
              <OrbiterEffect
                rotate={135}
                reverse
                initialPosition={270}
                semiMajorAxis={190}
              >
                <div className="rotate-[135deg]">
                  <Aws className="[transform:rotateY(180deg)]" />
                </div>
              </OrbiterEffect>
            </div>
            <div
              className="absolute left-[50%] top-[50%] -z-10 h-[300px] w-[300px] translate-x-[-52%] translate-y-[-50%] transform rounded-full bg-orange-600 blur-xl"
              style={{
                background:
                  'radial-gradient(rgba(255,165,0,1) 30%, rgba(255,165,0,0.2) 31%, rgba(255,165,0,0.1) 50%, rgba(255,165,0,0) 100%)',
              }}
            />

            <div className="absolute left-[50%] top-[50%] z-0 h-[220px] w-[220px] translate-x-[-50%] translate-y-[-50%] transform">
              <div className="overflow-hidden rounded-2xl bg-orange-200/70 backdrop-blur-[2px] supports-[backdrop-filter]:bg-orange-200/70">
                <Image
                  // className="image-gradient"
                  // className="pl-2"
                  src="/images/profile-picture.png"
                  alt="Bernardo Quina's profile picture"
                  height={220}
                  width={220}
                  priority
                />
              </div>
            </div>
          </div>
          <div className="w-[220px] gap-2">
            <span className="text-sm font-medium">Hey 👋 , I&apos;m</span>
            <h2 className="text-3xl font-medium">Bernardo Quina</h2>
          </div>
          <button className="pt-20">
            <h1 className="text-2xl font-medium">{'<FullStackDeveloper />'}</h1>
          </button>
        </div>
      </div>
    </PageLayout>
  );
}
