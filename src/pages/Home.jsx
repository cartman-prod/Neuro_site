import Nav from '../components/Nav';
import Hero from '../components/Home/Hero';
import Overview from '../components/Home/Overview/Overview';
import Footer from '../components/Footer';
import Features from '../components/Home/Features';
import Content from '../components/Home/Content';

const Home = () => {
  return (
    <div className="">
      <Nav />
      <Hero />
      <Overview />
      <Features />
      <Content />
      <Footer />
    </div>
  );
};

export default Home;
