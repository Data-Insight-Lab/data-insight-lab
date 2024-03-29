import { blog } from '@/constants/blog';
import Image from 'next/image';
import { Animation } from './Animation';
import { RiAlignCenter } from 'react-icons/ri';
import Head from 'next/head';

export function Blog() {
  return (
    <Animation>
      <div className="my-52 flex flex-col md:flex-row items-center justify-center px-4 text-center bg-gradient-blog">
      <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <div className="md:flex md:flex-row-reverse md:mr-6">
  <div className="md:w-1/2 md:ml-8">
    <Image
      src={blog.image}
      alt="image"
      className="rounded-lg responsive-image"
    />
  </div>
  <div className="md:w-1/2 md:ml-4">
    <h1 className="text-4xl mb-4 font-bold">{blog.title}</h1>
    <p className="text-lg mb-10">{blog.content}</p>
  </div>
</div>
 </div>
      <div className="mt-3 items-center justify-center text-center">
        <a href="#contact">
        <button className="button mt-10 custom-button">If you want to become data-driven, click here</button>
        </a>
      </div>
     
    </Animation>
  );
}
