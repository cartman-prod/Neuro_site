import Footer from '../components/Footer';
import Categories from '../components/Gallary/Categories';
import Project from '../components/Gallary/Project';
import Nav from '../components/Nav';
import { projects } from '../components/Gallary/projectsList';
// import { useDispatch, useSelector } from 'react-redux';
// import { setCategoryId } from '../service/redux/slices';

const Projects = () => {
  // const dispatch = useDispatch();
  // const { categoryId } = useSelector((state) => state.filter);

  // const onChangeCategory = (id) => {
  //   dispatch(setCategoryId(id));
  // };

  return (
    <>
      <div>
        <Nav />
        <Categories />
        <div className="container mx-auto px-4 py-4 xl:py-6 xl:px-5">
          <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 text-center">
            {projects.map((item, index) => (
              <Project
                key={index}
                title={item.title}
                img={item.img}
                skills={item.skills}
                index={index}
              />
            ))}
          </ul>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Projects;
