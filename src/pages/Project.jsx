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
      <Title title={project.title} />
      <Footer />
    </div>
  );
};

export default Project;
