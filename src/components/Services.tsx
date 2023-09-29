import 'src/app/app.css';
import { services } from '@/constants/services';
import { Animation } from './Animation';
import { ServiceCard } from './ServiceCard';
import React from 'react';
import { steps as defaultSteps } from '@/constants/steps';
import { RiNumber1, RiNumber2, RiNumber3, RiNumber4,} from 'react-icons/ri';

export function Services() {
  const steps = defaultSteps || [];

  const iconComponents = [
    RiNumber1,
    RiNumber2,
    RiNumber3,
    RiNumber4,
  ];

  return (
    <Animation>
      <div className="my-52 flex flex-col md:flex-row md:justify-normal items-center justify-center gap-2 bg-gradient-services px-2">
        {services.map(item => (
          <ServiceCard key={item.id} title={item.title} content={item.content} icon={item.icon} />
        ))}
      </div>
      <div className="black-box">
        <h2 className="box-title">Step-by-Step Contact</h2>
        <div className="step-list">
  {steps.map((steps, index) => (
    <div className="step" key={index}>
      <h3>
        <span className="step-icon">
          {React.createElement(steps.icon)}
        </span>
        {steps.title}
      </h3>
      <p>{steps.content}</p>
    </div>
  ))}
</div>
      </div>
      <div className="mt-3 items-center justify-center text-center">
        <a href="#contact">
        <button className="button mt-10 custom-button">Get your consult right now</button>
        </a>
      </div>
    </Animation>
  );
}
