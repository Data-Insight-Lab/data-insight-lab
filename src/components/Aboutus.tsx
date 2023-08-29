import { aboutus } from "@/constants/aboutus";
import PowerBIImage from '../../public/powerbi.png';
import GrafanaImage from '../../public/grafana.png';
import SQLImage from '../../public/sql.png';
import SupersetImage from '../../public/superset.png';
import TableauImage from '../../public/tableau.png';
import React from 'react';
import Image from 'next/image';
import { Animation } from './Animation';

export function AboutUs() {
    return (
      <Animation>
      <div className="my-52 text-center bg-gradient-blog px-4 py-8">
          <h1 className="text-3xl mb-4 font-bold">{aboutus.title}</h1>
          <p className="text-base mb-10 md:mx-52">{aboutus.content}</p>
          <div className="aboutus-image-container">
              <Image
                  src={aboutus.image}
                  alt="About Us"
                  height={300}
                  width={400}
                  className="rounded-lg"
              />
          </div>

                <h2 className="text-2xl my-6">Our Tools</h2>
                <div className="image-gallery">
                    <Image
                        src={PowerBIImage}
                        alt="Power BI"
                        height={100}
                        width={100}
                        className="gallery-image"
                    />
                    <Image
                        src={GrafanaImage}
                        alt="Grafana"
                        height={100}
                        width={100}
                        className="gallery-image"
                    />
                    <Image
                        src={SQLImage}
                        alt="SQL"
                        height={100}
                        width={100}
                        className="gallery-image"
                    />
                    <Image
                        src={SupersetImage}
                        alt="Superset"
                        height={100}
                        width={100}
                        className="gallery-image"
                    />
                    <Image
                        src={TableauImage}
                        alt="Tableau"
                        height={100}
                        width={100}
                        className="gallery-image"
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
