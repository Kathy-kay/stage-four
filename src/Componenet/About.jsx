const About = () => {
  return (
    <section
      id="#about"
      className="text-white bg-about-300 px-6 pt-16 pb-10 sm:px-28 md:pt-32 md:pb-20 flex flex-col sm:flex-row"
    >
      <div className="sm:w-1/2 pr-0 sm:pr-10">
        <h2 className="text-3xl sm:text-4xl md:text-4xl font-medium">
          About me
        </h2>
        <p className="pt-6 sm:pt-16">
          I'm a passionate and self-taught frontend developer with a love for
          crafting immersive digital experiences. With a strong foundation in
          HTML, CSS, and a knack for responsive design, I bring web projects to
          life with an eye for detail and a user-centric approach. My journey
          into web development led me to the exciting world of React and
          Next.js. These powerful tools have become my playground, allowing me
          to build dynamic and lightning-fast web applications that engage users
          and deliver exceptional performance. I thrive on challenges and am
          constantly expanding my knowledge to stay at the forefront of web
          development trends. I'm excited to collaborate, innovate, and turn
          ideas into pixel-perfect realities. Let's work together to create
          digital experiences that leave a lasting impression.
        </p>
        <button className="bg-teals-400 hover:bg-teal-900 mt-6 sm:mt-7 px-4 py-2 rounded">
          Contact me!
        </button>
      </div>
      {/* <div className="sm:w-1/2 pl-0 sm:pl-10 mt-10 sm:mt-0">
        <h2 className="text-3xl sm:text-4xl md:text-4xl font-medium">
          My Skills
        </h2>
        {/* Add your skills or skill icons here 
      </div> */}
    </section>
  );
};

export default About;
