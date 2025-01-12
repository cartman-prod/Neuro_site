const ListItem = ({ title, text }) => {
  return (
    <div className="mt-10 max-w-sm  xl:max-w-3xl ">
      <h2 className="sm:text-lg md:text-2xl xl:text-4xl w-4/5">{title}</h2>
      <p className="text-gray mt-5 sm:text-md xl:text-2xl xl:mt-10">{text}</p>
    </div>
  );
};

export default ListItem;
