import Image from 'next/image';
import BlogImage from '../../public/blog.jpeg';
import { Animation } from './Animation';

export function Blog() {
  return (
    <Animation>
      <div className="my-52 flex flex-col items-center justify-center px-4 text-center bg-gradient-blog">
        <h1 className="text-3xl mb-4 font-bold">
          Why invest in Data Intelligence?
        </h1>
        <p className="text-base">
          Data Analysis and Business Intelligence are key components to
          successful. It is fundamental to understand how processes can be
          improved and to know how tracking key metrics can impact your business
          in a positive way. Every piece of information is relevant to drive the
          company to a better future.
        </p>

        <Image
          src={BlogImage}
          alt="image"
          height={300}
          width={400}
          className="mt-10 rounded-lg"
        />
      </div>
    </Animation>
  );
}
