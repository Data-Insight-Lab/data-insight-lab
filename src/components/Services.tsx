import { services } from '@/constants/services';
import { Animation } from './Animation';
import { ServiceCard } from './ServiceCard';

export function Services() {
  return (
    <Animation>
      <div
        className="my-52 flex flex-col md:flex-row md:justify-normal items-center
         justify-center gap-2 bg-gradient-services px-2"
      >
        {services.map(item => (
          <ServiceCard
            key={item.id}
            title={item.title}
            content={item.content}
            icon={item.icon}
          />
        ))}
      </div>
    </Animation>
  );
}
