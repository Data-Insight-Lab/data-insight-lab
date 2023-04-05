'use client';
import { cx } from '@/helpers/cx';
import Image from 'next/image';
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { HiMenuAlt4 } from 'react-icons/hi';
import { Link } from 'react-scroll';
import Logo from '../../public/logo.png';

const naveBarItems: NaveBarItems[] = [
  { title: 'Home', id: 'home' },
  { title: 'Blog', id: 'blog' },
  { title: 'Services', id: 'services' },
  { title: 'Contact', id: 'contact' },
];

interface Props {
  label: string;
  selected: string;
}
interface NaveBarItems {
  title: string;
  id: string;
}

function NavbarItem({ label, selected }: Props) {
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

export function Header() {
  const [selected, setSelected] = useState('home');
  const [toggleMenu, setToggleMenu] = useState(false);
  const [animated, setAnimated] = useState('animate-slide-in');

  function navLinks() {
    return naveBarItems.map(item => {
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
          <NavbarItem key={item.id} label={item.title} selected={selected} />
        </Link>
      );
    });
  }

  return (
    <header>
      <div className="fixed w-full z-10 top-0 px-4 py-6 flex flex-row justify-between items-center bg-opacity-30 bg-zinc-950 backdrop-filter backdrop-blur-xl">
        <a
          href="home"
          className="flex gap-4 items-center text-xl font-bold text-gradient"
        >
          <Image src={Logo} alt="logo" height={40} width={40} />
          Data Insight Lab
        </a>

        <nav>
          <div className="md:flex hidden">
            <ul className="flex flex-row gap-4">{navLinks()}</ul>
          </div>

          <div className="md:hidden flex relative">
            {toggleMenu ? (
              <AiOutlineClose
                fontSize={28}
                className="text-white cursor-pointer"
                onClick={() => setToggleMenu(false)}
              />
            ) : (
              <HiMenuAlt4
                fontSize={28}
                className="text-white cursor-pointer"
                onClick={() => {
                  setAnimated('animate-slide-in');
                  setTimeout(() => setToggleMenu(true));
                }}
              />
            )}

            {toggleMenu && (
              <ul
                className={`z-10 fixed top-0 -right-2 p-3 w-[50vw] h-screen shadow-2xl
            md:hidden list-none flex flex-col justify-start items-end rounded-md
            glassmorphism text-white ${animated}`}
              >
                <li className="text-xl w-full my-2 cursor-pointer">
                  <AiOutlineClose
                    onClick={() => {
                      setAnimated('animate-slide-out');
                      setTimeout(() => setToggleMenu(false), 500);
                    }}
                  />
                </li>
                {navLinks()}
              </ul>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
