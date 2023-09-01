'use client';

import { useState } from 'react';

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = async (e) => {


    try {
      const result = await emailjs.sendForm(
        'service_wczgbl2',
        'template_fa3l7oc',
        form.current,
        'VvWaVcxO1N10Z-kfY'
      );
      console.log(result.text);
    } catch (error) {
      console.log(error.text);
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
      <label className="text-gray-700">Name</label>
      <input
        type="text"
        name="user_name"
        className="border p-2 bg-gray-200"
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
      />
      <label className="text-gray-700">Email</label>
      <input
        type="email"
        name="user_email"
        className="border p-2 bg-gray-200"
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
      />
      <label className="text-gray-700">Message</label>
      <textarea
        name="message"
        className="border p-2 bg-gray-200"
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded-md"
      >
        Send
      </button>
    </form>
  );
};

