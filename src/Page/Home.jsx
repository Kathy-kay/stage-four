import Header from "../Componenet/Header";
import About from "../Componenet/About";
import Project from "../Componenet/Project";
import Contact from "../Componenet/Contact";
import { useState, useEffect } from "react";
import BarLoader from "../Componenet/BarLoader";

const Home = () => {
  const [Isloading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 5000); // Adjust the duration as needed
  }, []);

  return (
    <>
      {Isloading ? (
        <div className="min-h-screen bg-bay-300 flex items-center justify-center">
          {" "}
          <BarLoader />
        </div>
      ) : (
        <div className="min-h-screen bg-bay-300">
          <Header />
          <About />
          <Project />
          <Contact />
        </div>
      )}
    </>
  );
};

export default Home;
