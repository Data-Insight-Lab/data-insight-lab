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
        <h1 className="mb-10 text-2xl font-normal">
          Get in contact for more information
        </h1>
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
      </div>
    </Animation>
  );
}
