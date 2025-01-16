import Footer from '../components/Footer';
import Categories from '../components/Gallary/Categories';
import Board from '../components/Gallary/Board';
import Nav from '../components/Nav';
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
        <Board />
        <Footer />
      </div>
    </>
  );
};

export default Projects;
