import Nav from '../components/Nav';
import Title from '../components/Project/Title';
import Footer from '../components/Footer';
import { projects } from '../components/Gallary/projectsList';
import { useParams } from 'react-router-dom';

const Project = () => {
  const { id } = useParams();
  const project = projects[id];

  return (
    <div className="">
      <Nav />
      <div className="container mx-auto px-5 py-10">
        <Title className="text-3xl font-bold" title={project.title} />
        <div className="bg-tuna-100 shadow-xl mt-5 px-4 py-4 rounded-md">
          <img className="w-full rounded-lg" src={project.img} alt={project.title} />
        </div>
        <div className="mt-5">
          <span className="text-lg font-bold">Цель</span>
          <p className="text-lg mt-5 mb-10">{project.target}</p>
          <span className="text-lg font-bold">Описание</span>
          <p className="text-lg mt-5 mb-10">{project.description}</p>
          <span className="text-lg font-bold">Технологии</span>
          <p className="text-lg mt-5">{project.skills}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Project;
