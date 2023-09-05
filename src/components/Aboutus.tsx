import { aboutus } from "@/constants/aboutus";
import PowerBIImage from '../../public/powerbi.png';
import GrafanaImage from '../../public/grafana.png';
import SQLImage from '../../public/sql.png';
import SupersetImage from '../../public/superset.png';
import TableauImage from '../../public/tableau.png';
import AWSImage from '../../public/aws.png';
import RedshiftImage from '../../public/redshift.png';
import PostgresImage from '../../public/postgres.png';
import AirFlowImage from '../../public/airflow.png';
import React from 'react';
import Image from 'next/image';
import { Animation } from './Animation';

export function AboutUs() {
    return (
      <Animation>
      <div className="my-52 text-center bg-gradient-blog px-4 py-8">
          <h1 className="text-4xl mb-4 font-bold">{aboutus.title}</h1>
          <p className="text-lg mb-10 md:mx-52">{aboutus.content}</p>
          <div className="aboutus-image-container">
              <Image
                  src={aboutus.image}
                  alt="About Us"
                  height={400}
                  width={500}
                  className="rounded-lg"
              />
          </div>

                <h2 className="text-4xl my-6">Our Tools</h2>
                <div className="image-gallery">
                <Image
                        src={RedshiftImage}
                        alt="Redshift"
                        height={150}
                        width={150}
                    />                   
                    <Image
                        src={GrafanaImage}
                        alt="Grafana"
                        height={70}
                        width={70}
                    />
                    <Image
                        src={SQLImage}
                        alt="SQL"
                        height={100}
                        width={100}
                    />
                    <Image
                        src={SupersetImage}
                        alt="Superset"
                        height={80}
                        width={80}
                    />
                    <Image
                        src={TableauImage}
                        alt="Tableau"
                        height={110}
                        width={110}
                    />
                    <Image
                        src={PowerBIImage}
                        alt="Power BI"
                        height={120}
                        width={120}
                    />
                    <Image
                        src={PostgresImage}
                        alt="Postgres"
                        height={80}
                        width={80}
                    />
                    <Image
                        src={AirFlowImage}
                        alt="Airflow"
                        height={180}
                        width={180}
                    />
                    <Image
                        src={AWSImage}
                        alt="AWS"
                        height={80}
                        width={80}
                    />
                </div>
            </div>
            <div className="mt-3 items-center justify-center text-center">
                <a href="#contact">
                    <button className="button mt-10">Get in contact</button>
                </a>
            </div>
        </Animation>
    );
}
