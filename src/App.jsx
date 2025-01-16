import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Fidback from './pages/Fidback';
import Project from './pages/Project';
import { Route, Routes } from 'react-router-dom';
import './index.css';
import './reset.css';
function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/form" element={<Fidback />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
