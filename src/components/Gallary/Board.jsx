import Project from './Project';
import { projects } from './projectsList';

const Board = () => {
  return (
    <div>
      <div className="container mx-auto px-4 py-2 xl:py-4 xl:px-5">
        <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 text-center">
          {projects.map((item, index) => (
            <Project
              key={index}
              title={item.title}
              img={item.img}
              index={index}
              skills={item.skills}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Board;
