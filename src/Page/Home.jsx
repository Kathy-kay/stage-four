import Header from "../Componenet/Header";
import About from "../Componenet/About";
import Project from "../Componenet/Project";
import Contact from "../Componenet/Contact";

const Home = () => {
  return (
    <main className="min-h-screen bg-bay-300">
      <Header />
      <About />
      <Project />
      <Contact />
    </main>
  );
};

export default Home;
