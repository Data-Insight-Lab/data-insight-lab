'use client';
import Image from 'next/image';
import DataAnalytics from '../../public/data-analytics.jpg';
import { Animation } from './Animation';

export function Home() {
  return (
    <section id="home">
      <Animation>
        <div className="bg-gradient  h-screen w-full flex gap-4 px-4 ">
          <div className="flex flex-1 flex-col justify-center">
            <h1 className="text-6xl font-bold">
              Data & Analytics <p className="text-gradient">Solutions</p>
            </h1>
            <p className="text-sm text-white font-normal mt-4">
              Developing end to end solutions in the most efficient way
            </p>
          </div>

          <div className="flex flex-1 items-center justify-center">
            <Image
              src={DataAnalytics}
              alt="image"
              height={400}
              width={700}
              className="rounded-3xl"
            />
          </div>
        </div>
      </Animation>
    </section>
  );
}
