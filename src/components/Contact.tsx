import React from 'react';
import { contact } from '@/constants/contact';
import { Animation } from './Animation';
import { ContactForm } from './ContactForm.jsx'; // Import the ContactForm component

export function Contact() {
  return (
    <Animation>
      <div className="my-52 flex flex-col justify-center items-center px-4 max-w-lg mx-auto">
        <h1 id="contact" className="mb-10 text-4xl font-normal">
          {contact.title}
        </h1>
        <div className="w-full p-4 flex-2 flex flex-col gap-4 border rounded-3xl border-zinc-800">
          {/* Render the ContactForm component */}
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
