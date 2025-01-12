const Categories = ({ value, onClickCategory }) => {
  const Categories = ['Все', 'Приложения', 'Машинное обучение', 'Аналитика', 'Дашборды'];
  return (
    <div>
      <div className="container mx-auto xl:py-10 py-6 px-5">
        <ul className="grid grid-cols-2 md:grid-cols-5 gap-5 text-center ">
          {Categories.map((text, index) => (
            <li
              key={index}
              onClick={() => onClickCategory(index)}
              className={` ${
                value === index
                  ? 'active bg-orange-500 text-black'
                  : 'hover:bg-orange-500 hover:text-black'
              }  w-36 h-12 flex items-center justify-center bg-tuna-100 first-line:text-sm text-sm xl:text-lg hover:bg-orange-500 hover:text-black cursor-pointer rounded-lg`}>
              {text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
