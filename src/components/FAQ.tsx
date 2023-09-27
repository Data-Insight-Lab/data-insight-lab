import { faq } from '@/constants/faq';
import { Animation } from './Animation';

export function FAQ() {
    return (
      <Animation>
        <div className="my-52 flex flex-col items-center justify-center px-4 text-center bg-gradient-blog">
          <h1 className="text-4xl mb-4 font-bold">{faq.title}</h1>
          
          </div>
      </Animation>
    );
}