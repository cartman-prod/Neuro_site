import IMAGE from '../../assets/img/worker_two.png';
import { useNavigate } from 'react-router-dom';
const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className=" ">
      <div className="container min-h-[500px] flex mt-10 sm:mt-0 mx-auto px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
          {/* Text section */}
          <div className="space-y-5 sm:order-1 mt-15 mx-10 ">
            <h1
              data-aos="fade-up"
              className="text-4xl md:text-5xl xl:text-7xl font-semibold mb-7"
              style={{ lineHeight: 1.2 }}>
              Добро пожаловать в <span className="text-primary">Neural Edge</span>
            </h1>
            <p className="md:text-2xl xl:text-3xl" data-aos="fade-up " data-aos-delay="300">
              Ваш интеллектуальный партнер на грани инноваций
            </p>
            <div className="flex justify-center md:justify-start">
              <button
                onClick={() => navigate('/form')}
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-offset="0"
                className="rounded-lg px-5 py-3 font-bold text-black bg-orange-500 hover:text-black ">
                Оставить заявку
              </button>
            </div>
          </div>
          {/* Image section */}
          <div data-aos="zoom-in" className="ml-6 sm:order-2 relative">
            <img
              src={IMAGE}
              alt=""
              className=" sm:max-w-[280px] md:max-w-[400px] lg:max-w-[480px] xl:max-w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
