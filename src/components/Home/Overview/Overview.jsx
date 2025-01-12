import ListItem from './ListItem';
const Overview = () => {
  return (
    <div className=" bg-stone text-white py-5 ">
      <div className="container mx-auto px-5 max-w-7xl">
        <h1 className="text-2xl mx-4 sm:w-full xl:text-4xl xl:w-2/4">
          Проблемы, которые мы в Neural Edge помогаем решить
        </h1>
        <p className="text-gray-600 mx-4 sm:text-sm sm:w-full xl:text-xl xl:w-2/4 mt-4 md:max-w-xl xl:max-w-2xl">
          Мы помогаем крупным корпорациям и руководителям принимать обоснованные решения,
          оптимизировать процессы стратегического планирования и повышать конкурентоспособность
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 px-5 gap-5 xl:gap-x-28 ">
          <ListItem
            title="Оптимизация бизнес-процессов"
            text="Ускоряем анализ данных и принятие решений"
          />
          <ListItem
            title="Повышение конкурентоспособности"
            text="Предоставляем мощные конкурентные преимущества благодаря индивидуальному
                ИИ-помощнику, который знает о вашей компании все"
          />
          <ListItem
            title="Управление большими объемами данных"
            text="Эффективно обрабатываем и анализируем данные для получения ценных инсайтов о бизнесе"
          />
          <ListItem
            title="Снижение затрат на анализ данных"
            text="Автоматизируем процессы и улучшаем качество ваших услуг"
          />
          <ListItem
            title="Прогнозирование и планирование"
            text="Создаем точные прогнозы и улучшаем стратегическое управление"
          />
          <ListItem
            title="Улучшение обслуживания клиентов"
            text="Персонализируем рекомендации и улучшаем качество обслуживания"
          />
        </ul>
      </div>
    </div>
  );
};

export default Overview;
