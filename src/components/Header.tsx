'use client';
import Image from 'next/image';
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { HiMenuAlt4 } from 'react-icons/hi';
import { Link } from 'react-scroll';
import Logo from '../../public/logo.png';
import { NavLinks } from './NavLinks';

export function Header() {
  const [selected, setSelected] = useState('home');
  const [toggleMenu, setToggleMenu] = useState(false);
  const [animated, setAnimated] = useState('animate-slide-in');

  return (
    <header>
      <div className="fixed w-full z-10 top-0 px-4 py-6 flex flex-row justify-between items-center bg-opacity-30 bg-zinc-950 backdrop-filter backdrop-blur-xl">
        <Link
          spy
          activeClass="active"
          smooth={true}
          to="home"
          duration={100}
          className="flex gap-4 items-center text-xl font-bold text-gradient cursor-pointer"
        >
          <Image src={Logo} alt="logo" height={60} width={60} />
          Data Insight Lab
        </Link>

        <nav>
          <div className="md:flex hidden">
            <ul className="flex flex-row gap-4">
              <NavLinks selected={selected} setSelected={setSelected} />
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
                className={`z-10 fixed top-0 -right-2 p-4 w-[50vw] h-screen shadow-2xl
            md:hidden list-none flex flex-col justify-start items-end rounded-md
            glassmorphism text-white ${animated}`}
              >
                <div className="text-xl w-full my-2 cursor-pointer">
                  <AiOutlineClose
                    onClick={() => {
                      setAnimated('animate-slide-out');
                      setTimeout(() => setToggleMenu(false), 500);
                    }}
                  />
                </div>

                <NavLinks selected={selected} setSelected={setSelected} />
              </ul>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
