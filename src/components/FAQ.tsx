'use client';

import React from 'react';
import { faq } from '@/constants/faq';
import { Animation } from './Animation';
import  FA  from './FA'; 
import Head from 'next/head';

export function FAQ() {
  return (
    <Animation>
      <div className="my-52 flex flex-col items-center justify-center px-4 text-center bg-gradient-blog">
      <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <h1 className="text-4xl mb-4 font-bold">{faq.title}</h1>
        <FA />
      </div>
    </Animation>
  );
}
