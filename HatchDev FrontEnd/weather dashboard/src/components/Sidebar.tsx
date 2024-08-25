// import React, { useState } from 'react';
import weather from '../assets/weather vector.png';
import cities from '../assets/cities vector.png';
import map from '../assets/map vector.png';
import settings from '../assets/settings vector.png';
import control from '../assets/control.png';
import logo from '../assets/akurate logo.png';
import { useState } from 'react';

interface MenuItem {
  title: string;
  src: string;
  gap?: boolean;
}

interface SidebarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  setSelectedPage: (page: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ darkMode, toggleDarkMode, setSelectedPage }) => {
  const [open, setOpen] = useState<boolean>(true);

  const Menus: MenuItem[] = [
    { title: "Weather", src: weather },
    { title: "Cities", src: cities },
    { title: "Map", src: map },
    { title: "Settings", src: settings },
  ];

  return (
    <div className="flex">
      <div
        className={`${
          open ? "w-72" : "w-20"
        } bg-dark-purple dark:bg-gray-800 h-screen p-5 pt-8 relative duration-300 md:w-72 md:overflow-hidden overflow-auto`}
      >
        <img
          src={control}
          alt="control"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple dark:border-gray-800
           border-2 rounded-full ${!open && "rotate-180"} md:hidden`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <h1
            className={`text-white dark:text-gray-300 origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            <img src={logo} alt='Akurate Weather'/>
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white dark:hover:bg-gray-700 text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                Menu.title === 'Weather' && !open ? 'bg-light-white dark:bg-gray-700' : ''
              }`}
              onClick={() => setSelectedPage(Menu.title)}
            >
              <img src={Menu.src} alt={Menu.title} className="w-6" />
              <span
                className={`${
                  !open && "hidden"
                } origin-left duration-200`}
              >
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <button
            onClick={toggleDarkMode}
            className={`toggle-button ${darkMode ? 'dark-mode' : 'light-mode'}`}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
      <div className="h-screen flex-1 p-7 dark:bg-gray-900 dark:text-gray-100">
        {/* Your content here */}
      </div>
    </div>
  );
};

export default Sidebar;
