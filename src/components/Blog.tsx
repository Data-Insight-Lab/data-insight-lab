import { blog } from '@/constants/blog';
import Image from 'next/image';
import { Animation } from './Animation';
import { RiAlignCenter } from 'react-icons/ri';

export function Blog() {
  return (
    <Animation>
      <div className="my-52 flex flex-col items-center justify-center px-4 text-center bg-gradient-blog">
        <h1 className="text-3xl mb-4 font-bold">{blog.title}</h1>
        <p className="text-base mb-10 md:mx-52">{blog.content}</p>

        <Image
          src={blog.image}
          alt="image"
          height={300}
          width={400}
          className="rounded-lg"
        />
      </div>
      <div className="mt-3 items-center justify-center text-center">
        <a href="#contact">
        <button className="button mt-10">If you want to become data driven click here</button>
          </a>
          </div>
    </Animation>
  );
}
        
