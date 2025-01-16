import { NavLink } from 'react-router-dom';
const Project = ({ index, title, img, skills }) => {
  return (
    <NavLink to={`/project/${index}`}>
      <li className="bg-tuna-200 p-2 rounded-xl">
        <img className="rounded-xl w-full" src={img} alt={title} />
        <h3 className="mt-4 text-xl lg:text-2xl font-bold">{title}</h3>
        <p className="mt-2 text-base lg:text-xl">{skills}</p>
      </li>
    </NavLink>
  );
};

export default Project;
