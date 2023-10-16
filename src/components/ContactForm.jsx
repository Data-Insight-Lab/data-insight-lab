
'use client';

import { useState } from 'react';

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        'service_wczgbl2',
        'template_fa3l7oc',
        form.current,
        'VvWaVcxO1N10Z-kfY'
      );

      window.location.href = '/typ';
    } catch (error) {
      console.log(error.text);
    }
  };


  return (
    <div>
    <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
      <label className="text-gray-700">Name</label>
      <input
        type="text"
        name="user_name"
        className="border p-2 bg-black text-white" 
        style={{ backgroundColor: 'black', color: 'white' }}
      />
      <label className="text-gray-700">Company Name</label>
      <input
        type="text"
        name="user_company"
        className="border p-2 bg-black text-white" 
        style={{ backgroundColor: 'black', color: 'white' }}
      />
      <label className="text-gray-700">Phone Number</label>
      <input
        type="text"
        name="user_phone"
        className="border p-2 bg-black text-white" 
        style={{ backgroundColor: 'black', color: 'white' }}
      />
      <label className="text-gray-700">Country</label>
      <input
        type="text"
        name="user_country"
        className="border p-2 bg-black text-white" 
        style={{ backgroundColor: 'black', color: 'white' }}
      />
      <label className="text-gray-700">Email</label>
      <input
        type="email"
        name="user_email"
        className="border p-2 bg-black text-white" 
        style={{ backgroundColor: 'black', color: 'white' }}
      />
      <label className="text-gray-700">How can we help</label>
      <textarea
        name="message"
        className="border p-2 bg-black text-white" 
        style={{ backgroundColor: 'black', color: 'white' }}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded-md"
      >
        Send
      </button>
    </form>
     </div>
  );
  }; 