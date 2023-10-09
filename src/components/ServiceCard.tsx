import { IconType } from 'react-icons';

interface Props {
  title: string;
  content: string;
  icon: IconType;
}

export function ServiceCard({ title, content, icon }: Props) {
  const Icon: IconType = icon;

  return (
    <div className="p-4 border rounded-2xl border-zinc-50rem glassmorphism md:min-h-[28rem] sm:min-h-[10rem] md:w-1/2 w-full mb-4">
      <Icon className="h-14 w-14 md:h-20 md:w-20 rounded-xl text-white" />
      <p className="text-lg font-medium my-2 md:text-xl text-base">{title}</p>
      <p className="text-sm font-light md:text-base text-sm">{content}</p>
    </div>
  );
}
