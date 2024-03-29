import React from 'react';
import { contact } from '@/constants/contact';
import { Animation } from './Animation';
import { ContactForm } from './ContactForm.jsx'; 
import Head from 'next/head';

export function Contact() {
  return (
    <Animation>
      <div className="my-52 flex flex-col justify-center items-center px-4 max-w-lg mx-auto">
      <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <h1 id="contact" className="mb-10 text-4xl justify-center items-center font-normal">
          {contact.title}
        </h1>
        <div className="w-full p-4 flex-2 flex flex-col gap-4 border rounded-3xl border-zinc-800">
          <ContactForm />
        </div>
        <div className="mt-4">
          <a href="https://whatsa.me/5548996095043">
            <div className="bg-blue-500 p-4 rounded-lg text-white">
              Click here for more info
            </div>
          </a>
        </div>
      </div>
    </Animation>
  );
}
