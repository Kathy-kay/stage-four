import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";

const Project = () => {
  return (
    <section
      id="#projects"
      className="bg-project-500 px-6 pt-10 pb-10 sm:px-28 md:pt-32 md:pb-20 text-white"
    >
      <h2 className="text-3xl sm:text-4xl md:text-4xl font-medium">Project</h2>
      <div className="flex flex-col sm:flex-row pt-6 ">
        <div className="sm:w-1/2">
          <img src={project1} alt="movie project" />
        </div>
        <div className="sm:w-1/2 sm:pl-10 mt-6 sm:my-10">
          <h2 className="text-2xl sm:text-2xl font-semibold mb-2">
            A MovieBox Movie App
          </h2>
          <p className="text-lg">
            MovieBox is a Movie web application that leverages the TMDB API to
            provide users with an interactive and informative movie and TV show
            discovery platform. It allows users to explore a vast collection of
            movies and TV shows.
          </p>
          <div className="my-5">
            <span className="mr-4 text-orange-300"> #Nextjs </span>
            <span className="text-teals-400">#CSS</span>
          </div>
          <a
            href="https://hng-stage.vercel.app/"
            className="bg-teals-400 hover:bg-teal-900 px-4 py-2 rounded"
          >
            DEMO
          </a>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row pt-6 ">
        <div className="sm:w-1/2">
          <img src={project2} alt="project2" />
        </div>
        <div className="sm:w-1/2 sm:pl-10 mt-6 sm:mt-0">
          <h2 className="text-2xl sm:text-2xl font-semibold mb-2">
            GitHub Repositories
          </h2>
          <p className="text-lg">
            The GitHub Repositories project is a web application designed to
            amplify the process of fetching and displaying a Github user's
            repositories.
          </p>
          <div className="my-5">
            <span className="mr-4 text-orange-300"> #Reactjs </span>
            <span className="text-teals-400">#CSS</span>
          </div>
          <a
            href="https://vue-exams-project.vercel.app/"
            className="bg-teals-400 hover:bg-teal-900 px-4 py-2 rounded"
          >
            DEMO
          </a>
        </div>
      </div>
    </section>
  );
};

export default Project;
