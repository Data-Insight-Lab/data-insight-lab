'use client';
import { cx } from '@/helpers/cx';
import Image from 'next/image';
import { AnchorHTMLAttributes, useEffect, useRef, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { HiMenuAlt4 } from 'react-icons/hi';
import Logo from '../../public/logo.png';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  label: string;
  selected: string;
}
interface NaveBarItems {
  title: string;
  id: string;
}

function NavbarItem({ label, selected, ...rest }: Props) {
  const href = label.toLowerCase();
  const isSelected = href === selected;

  return (
    <li>
      <a
        href={`#${href}`}
        className={cx(
          `text-neutral-200 text-2xl cursor-pointer font-medium
           hover:text-neutral-50 transition-all duration-500
           md:text-lg
           `,
          isSelected &&
            `border-b border-current transition-all duration-500
             text-neutral-50`
        )}
        {...rest}
      >
        {label}
      </a>
    </li>
  );
}

const naveBarItems: NaveBarItems[] = [
  { title: 'Home', id: 'home' },
  { title: 'Blog', id: 'blog' },
  { title: 'Services', id: 'services' },
  { title: 'Contact', id: 'contact' },
];

export function Header() {
  const [selected, setSelected] = useState('home');
  const [toggleMenu, setToggleMenu] = useState(false);
  const [animated, setAnimated] = useState('animate-slide-in');

  const [activeSection, setActiveSection] = useState(0);
  const scrollingRef = useRef(false);
  const scrollingAutomatically = useRef(false);
  const animationRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollingAutomatically.current || scrollingRef.current) return;

      const sections = document.querySelectorAll<HTMLElement>('section');
      const sectionsPos = Array.from(sections).map(section => ({
        top: section.offsetTop,
        height: section.offsetHeight,
      }));

      const scrollPos = window.scrollY;

      const activeIndex = sectionsPos.findIndex(
        ({ top, height }) =>
          top <= scrollPos + window.innerHeight * 0.9 &&
          top + height >= scrollPos + window.innerHeight * 0.9
      );

      if (activeIndex !== -1 && activeIndex !== activeSection) {
        scrollingRef.current = true;
        const targetPos = sections[activeIndex].offsetTop;
        const step = (targetPos - scrollPos) / 20;
        const scroll = () => {
          const newPos = window.scrollY + step;
          if (
            (step > 0 && newPos >= targetPos) ||
            (step < 0 && newPos <= targetPos)
          ) {
            window.scrollTo(0, targetPos);
            setActiveSection(activeIndex);
            setSelected(naveBarItems[activeIndex].id);
            scrollingRef.current = false;
          } else {
            window.scrollTo(0, newPos);
            animationRef.current = window.requestAnimationFrame(scroll);
          }
        };
        animationRef.current = window.requestAnimationFrame(scroll);
      }

      const prevIndex = activeSection - 1;
      if (
        prevIndex >= 0 &&
        sectionsPos[prevIndex].top + sectionsPos[prevIndex].height >=
          scrollPos + window.innerHeight * 0.1
      ) {
        scrollingRef.current = true;
        const targetPos = sections[prevIndex].offsetTop;
        const step = (targetPos - scrollPos) / 20;
        const scroll = () => {
          const newPos = window.scrollY + step;
          if (
            (step > 0 && newPos >= targetPos) ||
            (step < 0 && newPos <= targetPos)
          ) {
            window.scrollTo(0, targetPos);
            setActiveSection(prevIndex);
            setSelected(naveBarItems[prevIndex].id);
            scrollingRef.current = false;
          } else {
            window.scrollTo(0, newPos);
            animationRef.current = window.requestAnimationFrame(scroll);
          }
        };
        animationRef.current = window.requestAnimationFrame(scroll);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  useEffect(() => {
    return () => window.cancelAnimationFrame(animationRef.current);
  }, [activeSection]);

  function handleChangeNav(href: string) {
    scrollingAutomatically.current = true;
    setSelected(href);
    setTimeout(() => {
      scrollingAutomatically.current = false;
    }, 1000);
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
            <ul className="flex flex-row gap-4">
              {naveBarItems.map(item => (
                <NavbarItem
                  key={item.id}
                  label={item.title}
                  selected={selected}
                  onClick={() => handleChangeNav(item.id)}
                />
              ))}
            </ul>
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
                {naveBarItems.map(item => (
                  <NavbarItem
                    key={item.id}
                    label={item.title}
                    selected={selected}
                    onClick={() => handleChangeNav(item.id)}
                  />
                ))}
              </ul>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
