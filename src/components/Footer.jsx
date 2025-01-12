import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
const FooterLinks = [
  {
    title: 'О нас',
    link: '/about',
  },
  {
    title: 'Контакты',
    link: '/Contacts',
  },
  {
    title: 'Проекты',
    link: '/works',
  },
  {
    title: 'Блог',
    link: '/blog',
  },
];
const HelpLinks = [
  {
    title: 'Customer Support',
    link: '/#support',
  },
  {
    title: 'Delivery Details',
    link: '/#delivery-details',
  },
  {
    title: 'Terms & Conditions',
    link: '/#terms',
  },
  {
    title: 'Privacy Policy',
    link: '/#policy',
  },
];
const ResourcesLinks = [
  {
    title: 'Free Ebooks',
    link: '/#ebooks',
  },
  {
    title: 'How To Blog',
    link: '/#blogs',
  },
  {
    title: 'Subscribe TCJ',
    link: 'https://www.youtube.com/channel/UC1H-a1MKEFXRiFlGNLcy7gQ?sub_confirmation=1',
  },
];

const Footer = () => {
  return (
    <div className="bg-stone text-white">
      <section className="container py-10 px-5 mx-auto">
        <div className=" grid md:grid-cols-3 py-5">
          {/* company Details */}
          <div className=" py-8 px-4 ">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              Откройте новые горизонты с NeuroEdge
            </h1>
            <p className="text-sm">
              Мы специализирующаяся на разработке инновационных решений в области искусственного
              интеллекта и нейросетей
            </p>
            <br />
            {/* Social Handle */}
            <div className="flex items-center gap-4 mt-6">
              <a href="#">
                <FaInstagram className="text-2xl hover:text-primary duration-300" />
              </a>
              <a href="#">
                <FaFacebook className="text-2xl hover:text-primary duration-300" />
              </a>
              <a href="#">
                <FaLinkedin className="text-2xl hover:text-primary duration-300" />
              </a>
            </div>
          </div>
          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Компания
                </h1>
                <ul className={`flex flex-col gap-3`}>
                  {FooterLinks.map((link) => (
                    <NavLink
                      to={link.link}
                      key={link.title}
                      className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-400 ">
                      <span>{link.title}</span>
                    </NavLink>
                  ))}
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Продукты
                </h1>
                <ul className="flex flex-col gap-3">
                  {HelpLinks.map((link) => (
                    <li
                      key={link.title}
                      className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-400 ">
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Особенности
                </h1>
                <ul className="flex flex-col gap-3">
                  {ResourcesLinks.map((link) => (
                    <li
                      key={link.title}
                      className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-400 ">
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
