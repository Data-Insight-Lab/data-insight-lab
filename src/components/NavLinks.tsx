import { navLinks } from '@/constants/navLinks';
import { cx } from '@/helpers/cx';
import { Link } from 'react-scroll';

interface NavItemProps {
  label: string;
  selected: string;
}

function NavItem({ label, selected }: NavItemProps) {
  const href = label.toLowerCase();
  const isSelected = href === selected;

  return (
    <li
      className={cx(
        `text-neutral-200 text-2xl cursor-pointer font-medium
           hover:text-neutral-50 transition-all duration-500
           md:text-lg
           `,
        isSelected &&
          `border-b border-current transition-all duration-500
             text-neutral-50`
      )}
    >
      {label}
    </li>
  );
}

interface Props {
  selected: string;
  setSelected(id: string): void;
}
export function NavLinks({ selected, setSelected }: Props) {
  return (
    <>
      {navLinks.map(item => {
        const offset = item.id === 'home' ? 0 : -200;
        return (
          <Link
            key={item.id}
            spy
            activeClass="active"
            smooth={true}
            to={item.id}
            duration={100}
            offset={offset}
            onSetActive={() => setSelected(item.id)}
          >
            <NavItem key={item.id} label={item.title} selected={selected} />
          </Link>
        );
      })}
    </>
  );
}
