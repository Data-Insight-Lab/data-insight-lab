'use client';
import Image from 'next/image';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { Link } from 'react-scroll';
import DataAnalytics from '../../public/data-analytics.jpg';
import { Animation } from './Animation';

export function Home() {
  return (
    <Animation>
      <div className="h-screen bg-gradient flex gap-4 px-4">
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

        <Link
          spy
          activeClass="active"
          smooth={true}
          to={'blog'}
          offset={-200}
          duration={100}
        >
          <div className="absolute flex items-center justify-center bottom-0 left-0 right-0 ml-auto mr-auto animate-bounce bg-zinc-700 p-4 w-max rounded-full cursor-pointer">
            <AiOutlineArrowDown className="h-8 w-8" />
          </div>
        </Link>
      </div>
    </Animation>
  );
}
