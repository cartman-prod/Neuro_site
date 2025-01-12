import { NavLink } from 'react-router-dom';
const Project = ({ index, title, img, skills }) => {
  return (
    <NavLink to={`/project/${index}`}>
      <li className="">
        <img className="rounded-xl" src={img} alt={title} />
        <h3>{title}</h3>
        <p>{skills}</p>
      </li>
    </NavLink>
  );
};

export default Project;
