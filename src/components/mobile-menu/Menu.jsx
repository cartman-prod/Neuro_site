import { NavLink } from 'react-router-dom';
const mobnav = [
  { name: 'Главная', href: '/' },
  { name: 'О нас', href: '/about' },
  { name: 'Блог', href: '/blog' },
  { name: 'Контакты', href: '/contact' },
];
const Menu = ({ isOpen = false }) => {
  return (
    <>
      <div
        className={`absolute top-0 left-0 right-0 z-10 bg-stone opacity-60 justify-center min-h-[150vh]  ${
          isOpen ? 'flex' : 'hidden'
        }`}
      />
      <div
        className={`absolute right-0 top-0 w-1/2 bg-white z-20 min-h-[150vh] ${
          isOpen ? 'flex' : 'hidden'
        }`}>
        <div className="my-20 mx-5 space-y-5 text-lg w-full">
          <ul className="text-center text-2xl">
            {mobnav.map((item) => (
              <li key={item.name} className="my-5 ">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? 'active bg-orange-500 text-black rounded-md py-2 px-4'
                      : 'hover:bg-orange-500 hover:text-black py-2 px-4 duration-500 hover:rounded-md hover:duration-500'
                  }
                  to={item.href}>
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Menu;
