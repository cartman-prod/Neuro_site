import { NavLink } from 'react-router-dom';
import Button from './Button/Button';
import LogoIcon from '../assets/svg/logo.svg?react';
import BurgerMenu from '../assets/svg/burger-menu.svg?react';
import BurgerMenuOpen from '../assets/svg/burger-menu-open.svg?react';
import Menu from './mobile-menu/Menu';
import { useState } from 'react';

const Nav = () => {
  const [isOpenMobMenu, setIsOpenMobMenu] = useState(false);
  const navigation = [
    { name: 'Главная', href: '/' },
    { name: 'О нас', href: '/about' },
    { name: 'Проекты', href: '/projects' },
    // { name: 'Контакты', href: '/contact' },
  ];
  return (
    <>
      <nav className="container mx-auto px-5 flex items-center justify-between xl:py-5 border-b border-solid border-gray-500">
        <div className="flex items-center justify-center gap-2">
          <LogoIcon className="w-20 h-20 fill-orange-500" />
          <h1 className="font-bold xl:text-3xl text-orange-500">Neural Edge</h1>
        </div>
        <div className="flex items-center justify-center gap-10">
          <ul className="hidden md:flex justify-center gap-5">
            {navigation.map((item) => (
              <li className=" py-4 px-4 " key={item.name}>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? 'active bg-orange-500 border-orange-500 rounded-full py-2 px-6 md:text-sm xl:text-xl'
                      : 'hover:bg-orange-500 hover:text-black py-2 px-6 duration-500 hover:rounded-full hover:duration-500 md:text-sm xl:text-xl'
                  }
                  to={item.href}>
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <Button hasBorder={true} isFilled={true} display="hidden">
            Связаться с нами
          </Button>
        </div>
        <div
          className=" md:hidden ml-auto cursor-pointer z-30"
          onClick={() => setIsOpenMobMenu(!isOpenMobMenu)}>
          {isOpenMobMenu ? (
            <BurgerMenuOpen className="w-10 h-10" />
          ) : (
            <BurgerMenu className="w-10 h-10" />
          )}
        </div>
        <Menu isOpen={isOpenMobMenu} />
      </nav>
    </>
  );
};

export default Nav;
