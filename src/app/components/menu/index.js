'use client';

import { useState } from 'react';
import Link from 'next/link';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const menuItems = [
    { label: 'Início', href: '/' },
    { label: 'Artigos', href: '/artigos' },
    { label: 'Notícias', href: '/artigos/noticias' },
    { label: 'Vídeos', href: '/artigos/videos' },
    { label: 'Materiais', href: '/artigos/materiais' },
  ];

  return (
    <>
      <button
        onClick={toggleMenu}
        className="w-8 h-8 flex flex-col justify-center items-center cursor-pointer z-50 relative"
        aria-label="Menu"
      >
        <span
          className={`block w-6 h-0.5 bg-current transition-all duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'
            }`}
        />
        <span
          className={`block w-6 h-0.5 bg-current transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100'
            }`}
        />
        <span
          className={`block w-6 h-0.5 bg-current transition-all duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'
            }`}
        />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 z-40 transition-opacity duration-300"
          onClick={closeMenu}
        />
      )}

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-orange-1 shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white">
            Drama News
          </h2>
          <nav>
            <ul className="space-y-4">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className="block py-2 px-4 text-zinc-100 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-lg transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Menu;
