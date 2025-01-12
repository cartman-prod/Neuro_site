import IMAGE from '../../assets/img/job_work.png';
import DONE from '../../assets/svg/acces_green.svg?react';
const Features = () => {
  return (
    <div>
      <div className="container mx-auto px-5 py-10 xl:py-20 xl:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <img className="sm:w-[335px] md:w-[420px] xl:w-[585px]" src={IMAGE} alt="" />
          </div>
          <div>
            <h2 className="text-2xl font-bold sm:w-[370px]">
              95% клиентов отмечают улучшение эффективности после внедрения наших решений
            </h2>
            <p className="text-sm text-gray max-w-sm mt-4">
              Мы раскрываем потенциал бизнеса через интеллектуальные решения, помогая клиентам
              принимать обоснованные решения и адаптироваться к быстро меняющимся условиям рынка
            </p>
            <ul className="flex flex-col gap-4 mt-4 font-medium">
              <li className="flex gap-2 text-sm max-w-sm items-center">
                {' '}
                <DONE className="min-w-[20px]" /> Решения, которые меняют правила игры
              </li>
              <li className="flex gap-2 text-sm max-w-sm items-center">
                {' '}
                <DONE className="min-w-[20px]" />
                Автоматизируйте процессы и улучшите качество своих услуг
              </li>
              <li className="flex gap-2 text-sm max-w-sm items-center">
                {' '}
                <DONE className="min-w-[20px]" />
                Используйте своего личного ИИ-помощника, чтобы улучшить свою работу
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
