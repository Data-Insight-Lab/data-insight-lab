import { IconType } from 'react-icons';

interface Props {
  title: string;
  content: string;
  icon: IconType;
}

export function ServiceCard({ title, content, icon }: Props) {
  const Icon: IconType = icon;

  return (
    <div className="card">
    <Icon className="icon" />
    <p className="title">{title}</p>
    <p className="content">{content}</p>
  </div>
  );
}
