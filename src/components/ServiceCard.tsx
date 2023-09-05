import { IconType } from 'react-icons';

interface Props {
  title: string;
  content: string;
  icon: IconType;
}
export function ServiceCard({ title, content, icon }: Props) {
  const Icon: IconType = icon;

  return (
    <div
      className="w-full p-4 border rounded-2xl border-zinc-800 
    glassmorphism md:min-h-[450px]"
    >
      <Icon className="h-20 w-20 rounded-xl text-white" />

      <p className="text-xl font-medium my-2">{title}</p>
      <p className="text-base font-light">{content}</p>
    </div>
  );
}
