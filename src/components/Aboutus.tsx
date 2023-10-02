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

export function AboutUs() {
  return (
    <Animation>
      <div className="my-52 text-center bg-gradient-blog px-4 py-8">
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <h1 className="text-4xl mb-4 font-bold">{aboutus.title}</h1>
        <p className="text-lg mb-10 md:mx-52">{aboutus.content}</p>
        <div className="aboutus-image-container">
          <Image
            src={aboutus.image}
            alt="About Us"
            style={{ height: '22rem', width: '33rem' }}
            className="rounded-lg"
          />
        </div>
        <h2 className="text-4xl my-6">Our Tools</h2>
        <div className="image-gallery">
          <Image
            src={RedshiftImage}
            alt="Redshift"
            style={{ height: '5rem', width: '10rem' }}
          />
          <Image
            src={GrafanaImage}
            alt="Grafana"
            style={{ height: '5rem', width: '5rem' }}
          />
          <Image
            src={SQLImage}
            alt="SQL"
            style={{ height: '4rem', width: '6.5rem' }}
          />
          <Image
            src={SupersetImage}
            alt="Superset"
            style={{ height: '4rem', width: '5.5rem' }}
          />
          <Image
            src={TableauImage}
            alt="Tableau"
            style={{ height: '4rem', width: '7rem' }}
          />
          <Image
            src={PowerBIImage}
            alt="Power BI"
            style={{ height: '3rem', width: '10rem' }}
          />
          <Image
            src={PostgresImage}
            alt="Postgres"
            style={{ height: '5rem', width: '5rem' }}
          />
          <Image
            src={AirFlowImage}
            alt="Airflow"
            style={{ height: '6rem', width: '9rem' }}
          />
          <Image
            src={AWSImage}
            alt="AWS"
            style={{ height: '5rem', width: '5rem' }}
          />
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
