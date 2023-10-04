import Head from 'next/head';
import React from 'react';
import Image from 'next/image';
import { aboutus } from '@/constants/aboutus';
import PowerBIImage from '../../public/powerbi.png';
import GrafanaImage from '../../public/grafana.png';
import SQLImage from '../../public/sql.png';
import SupersetImage from '../../public/superset.png';
import TableauImage from '../../public/tableau.png';
import AWSImage from '../../public/aws.png';
import RedshiftImage from '../../public/redshift.png';
import PostgresImage from '../../public/postgres.png';
import AirFlowImage from '../../public/airflow.png';
import { Animation } from './Animation';

const images = [
  RedshiftImage,
  GrafanaImage,
  SQLImage,
  SupersetImage,
  TableauImage,
  PowerBIImage,
  PostgresImage,
  AirFlowImage,
  AWSImage,
];

export function AboutUs() {
  return (
    <Animation>
      <div className="my-52 text-center bg-gradient-blog px-4 py-8">
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <div className="flex flex-wrap items-center">
  <div className="w-full md:w-1/2">
    <Image
      src={aboutus.image}
      alt="image"
      style={{ height: '25rem', width: '25rem' }}
      className="rounded-lg"
    />
  </div>
  <div className="w-full md:w-1/2">
    <h1 className="text-4xl mb-4 font-bold">{aboutus.title}</h1>
    <p className="text-lg mb-10">{aboutus.content}</p>
  </div>
</div>
        <h2 className="text-4xl my-6">Our Tools</h2>
        <div className="image-gallery">
        {images.map((image, index) => (
          <div key={index} className="aboutus-image-container">
            <Image
              src={image}
              alt={`Image ${index + 1}`} 
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
        <div>
          <a href="#contact">
            <button className="button mt-10 custom-button">Get in contact</button>
          </a>
        </div>
      </div>
    </Animation>
  );
}
