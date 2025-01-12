import TEAM from '../../assets/img/team.png';
const Content = () => {
  return (
    <div>
      <div className="container mx-auto px-5 py-10 xl:py-20 xl:px-10">
        <div className="">
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-10 mx-auto">
            <li className="border-r-gray border-r-2 border-solid">
              <h2 className="text-4xl xl:text-6xl font-bold">80%</h2>
              <p className="text-xl xl:text-2xl">Снижение времени на анализ данных</p>
            </li>
            <li className="md:border-r-gray md:border-r-2 border-solid">
              <h2 className="text-4xl xl:text-6xl font-bold">70%</h2>
              <p className="text-xl xl:text-2xl">Увеличение точности прогнозов</p>
            </li>
            <li className="border-r-gray border-r-2 border-solid">
              <h2 className="text-4xl xl:text-6xl font-bold">50%</h2>
              <p className="text-xl xl:text-2xl">Снижение операционных затрат</p>
            </li>
            <li className="">
              <h2 className="text-4xl xl:text-6xl font-bold">50+</h2>
              <p className="text-xl xl:text-2xl">Различных приложений и интеграций</p>
            </li>
          </ul>
          <div className="mt-8 mb-10">
            <img src={TEAM} alt="" />
          </div>
          <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <h2 className="text-2xl font-bold max-w-xl xl:text-5xl">
              Сделайте шаг в будущее с NeuroEdge – вашим надежным партнером в мире ИИ
            </h2>
            <p className="max-w-lg text-sm text-gray xl:text-xl">
              Наши клиенты доверяют нам, потому что мы предлагаем надежные и эффективные решения,
              которые помогают им достигать стратегических целей
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
