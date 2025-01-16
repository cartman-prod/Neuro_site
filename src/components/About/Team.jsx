import { teams } from '../About/TeamsList';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

const Team = () => {
  return (
    <div className="">
      <div className="container mx-auto px-5 py-10 xl:py-15 xl:px-10">
        <div>
          <h2 className="text-2xl xl:text-4xl font-bold ml-8 ">
            Команда экспертов <span className="text-orange-500">Neural Edge</span>
          </h2>
          <p className="text-gray text-md xl:text-xl mt-4 ml-8">
            Команда которая помогает внедрять интеллектуальные решения в бизнес
          </p>
          <div>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 mt-5 justify-items-center">
              {teams.map(({ id, name, lastName, position, img, linkInstagram, linkLinkedin }) => (
                <li key={id} className="mt-2 w-80">
                  <img className="rounded-lg w-full" src={img} alt="" />
                  <div className="grid grid-cols-2">
                    <div className="mt-2 grid grid-cols-1">
                      <h3 className="text-lg font-bold mt-2">
                        {name} {lastName}
                      </h3>
                      <p className="text-md mt-1 text-gray">{position}</p>
                    </div>
                    <div className="flex gap-2 justify-end items-center">
                      <a href={linkInstagram}>
                        <FaInstagram className="text-2xl hover:text-primary duration-300" />
                      </a>
                      <a href={linkLinkedin}>
                        <FaLinkedin className="text-2xl hover:text-primary duration-300" />
                      </a>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
