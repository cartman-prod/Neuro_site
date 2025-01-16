import Project from './Project';
import { projects } from './projectsList';

const Board = () => {
  return (
    <div>
      <div className="container mx-auto px-4 py-4 xl:py-6 xl:px-5">
        <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 text-center">
          {projects.map((item) => (
            <Project key={item.id} title={item.title} img={item.img} skills={item.skills} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Board;
