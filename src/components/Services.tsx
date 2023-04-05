import { IconType } from 'react-icons';
import { BsDatabaseAdd } from 'react-icons/bs';
import { RiDashboardLine } from 'react-icons/ri';
import { TbDeviceAnalytics } from 'react-icons/tb';
import { Animation } from './Animation';

const services = [
  {
    id: '1',
    title: 'Collecting and Storing Data',
    content:
      'Acquire data from multiple sources, storing, cataloging, and developing them is the key to success.',
    icon: BsDatabaseAdd,
  },
  {
    id: '2',
    title: 'Smart Dashboards',
    content:
      'Dynamically visualize your data. Have useful dashboards using the most, powerful analytics platform that fits company needs.',
    icon: RiDashboardLine,
  },
  {
    id: '3',
    title: 'Data Analysis',
    content:
      'Efficient analysis that will take your company to the next level.',
    icon: TbDeviceAnalytics,
  },
];

interface Props {
  title: string;
  content: string;
  icon: IconType;
}
function Card({ title, content, icon }: Props) {
  const Icon: IconType = icon;

  return (
    <div
      className="w-full p-4 border rounded-2xl border-zinc-800 
    glassmorphism md:min-h-[350px]"
    >
      <Icon className="h-16 w-16 rounded-xl text-white" />

      <p className="text-lg font-medium my-2">{title}</p>
      <p className="text-sm font-light">{content}</p>
    </div>
  );
}

export function Services() {
  return (
    <Animation>
      <div
        className="my-40 flex flex-col md:flex-row md:justify-normal items-center
         justify-center gap-2 bg-gradient-services px-2"
      >
        {services.map(item => (
          <Card
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
