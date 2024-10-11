import { useState } from 'react';

import alkohole from '../assets/menu/alkohol.jpg';
import pizza_bianca from '../assets/menu/biala.jpg';
import pizza_red from '../assets/menu/czerwona.jpg';
import dania_glowne from '../assets/menu/glowne.jpg';
import napoje from '../assets/menu/napoje.jpg';
import przystawki_zupy from '../assets/menu/przystawki_zupy.jpg';
import koktajle1 from '../assets/menu/koktajl1.jpg';
import makarony from '../assets/menu/makaron.jpg';
import saladki_desery from '../assets/menu/saladki_desery.jpg';
import wino from '../assets/menu/wino.jpg';

function Menu() {
  const [selectedMenu, setSelectedMenu] = useState<string>('Dania główne');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const getMenuImage = () => {
    switch (selectedMenu) {
      case 'Dania główne':
        return dania_glowne;
      case 'Pizza Biała':
        return pizza_bianca;
      case 'Pizza Czerwona':
        return pizza_red;
      case 'Przystawki i zupy':
        return przystawki_zupy;
      case 'Makarony':
        return makarony;
      case 'Salatki i desery':
        return saladki_desery;
      case 'Alkohole':
        return alkohole;
      case 'Wino':
        return wino;
      case 'Napoje':
        return napoje;
      case 'Koktajle':
        return koktajle1;
      default:
        return dania_glowne;
    }
  };

  const getImageSize = () => {
    switch (selectedMenu) {
      case 'Dania główne':
        return 'w-screen sm:w-3/5 md:w-2/5 lg:w-2/3 xl:w-2/3';
      case 'Pizza Biaca':
        return 'w-screen sm:w-3/5 md:w-2/5 lg:w-2/3 xl:w-2/3';
      case 'Pizza Czerwona':
        return 'w-screen sm:w-3/5 md:w-2/5 lg:w-2/3 xl:w-2/3';
      case 'Przystawki i zupy':
        return 'w-screen sm:w-3/5 md:w-2/5 lg:w-2/3 xl:w-2/3';
      case 'Makarony':
        return 'w-screen sm:w-3/5 md:w-2/5 lg:w-2/3 xl:w-2/3';
      case 'Salatki i desery':
        return 'w-screen sm:w-3/5 md:w-2/5 lg:w-2/3 xl:w-2/3';
      case 'Alkohole':
        return 'w-full sm:w-4/5 md:w-2/4 lg:w-1/3 xl:w-1/3';
      case 'Wino':
        return 'w-full sm:w-4/5 md:w-2/4 lg:w-1/3 xl:w-1/3';
      case 'Napoje':
        return 'w-full sm:w-4/5 md:w-2/4 lg:w-1/3 xl:w-1/3';
      case 'Koktajle':
        return 'w-full sm:w-4/5 md:w-2/4 lg:w-1/3 xl:w-1/3';
      default:
        return 'w-full sm:w-3/5 md:w-2/5 lg:w-1/3 xl:w-1/3';
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-black w-full h-full">
      {/* Menu navbar Section */}
      <div>
        <ul className="flex flex-wrap items-center justify-center text-white">
          {['Dania główne', 'Pizza Biaca', 'Pizza Czerwona', 'Przystawki i zupy', 'Makarony', 'Salatki i desery', 'Alkohole', 'Wino', 'Napoje', 'Koktajle'].map(
            (menuItem) => (
              <li
                key={menuItem}
                className="p-2 m-2 cursor-pointer hover:ease-in hover:duration-300 hover:scale-y-125 hover:scale-x-125 ease-in duration-300 hover:bg-slate-100 hover:text-black text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl"
                onClick={() => setSelectedMenu(menuItem)}
              >
                {menuItem}
              </li>
            )
          )}
        </ul>
      </div>

      {/* Menu Section */}
      <div className="p-1 flex items-center justify-center">
        <img
          src={getMenuImage()}
          alt={selectedMenu}
          className="p-3 w-full sm:w-3/5 md:w-2/5 lg:w-1/3 xl:w-1/4 cursor-pointer rounded-lg"
          onClick={openModal}
        />
      </div>

      {/* Modal Section */}
      {isModalOpen && (
        <div
          className="p-6 fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="relative flex items-center justify-center">
            <img
              src={getMenuImage()}
              alt={selectedMenu}
              className={`${getImageSize()} h-auto rounded-lg`}
            />
            {/* Przycisk do zamknięcia modalu */}
            <button
              className="absolute border-2 border-red-800 top-2 right-2 sm:right-8 text-white bg-black hover:border-2 hover:border-black px-4 py-2 rounded-full hover:ease-in hover:duration-300 hover:scale-y-110 hover:scale-x-110 ease-in duration-300 hover:bg-slate-100 hover:text-black"
              onClick={closeModal}
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Menu;
