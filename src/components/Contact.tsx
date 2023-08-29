import { contact } from '@/constants/contact';
import { HTMLProps } from 'react';
import { Animation } from './Animation';

interface Props extends HTMLProps<HTMLInputElement> {}

function TextInput({ ...rest }: Props) {
  return (
    <input className="text-input border-[.5px] border-zinc-700" {...rest} />
  );
}

export function Contact() {
  return (
    <Animation>
      <div className="my-52 flex flex-col justify-center items-center px-4 max-w-lg mx-auto">
        <h1 id= "contact" className="mb-10 text-2xl font-normal">{contact.title}</h1>
        <form
          action=""
          className="w-full p-4 flex-2   flex flex-col gap-4 border rounded-3xl border-zinc-800"
        >
          <TextInput type="email" placeholder="email" />
          <TextInput type="text" placeholder="name" />
          <textarea
            placeholder="Leave a message"
            className="text-input min-h-[150px] border-[.5px] border-zinc-700"
          />
          
          <button className="button mt-10">Send</button>
        </form>
        <div className="mt-4">
        <a href="https://whatsa.me/5548996095043">
            <div className="bg-blue-500 p-4 rounded-lg text-white">Click here for more info</div>
          </a>
          </div>
      </div>
    </Animation>
  );
}
