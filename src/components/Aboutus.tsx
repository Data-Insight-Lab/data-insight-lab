import { aboutus } from "@/constants/aboutus";
import { Animation } from './Animation';

export function AboutUs() {
    return (
        <Animation>
      <div className="my-52 flex flex-col items-center justify-center px-4 text-center bg-gradient-blog">
        <h1 className="text-3xl mb-4 font-bold">{aboutus.title}</h1>
        <p className="text-base mb-10 md:mx-52">{aboutus.content}</p>
        </div>
    </Animation>
    );
}