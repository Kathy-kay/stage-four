import WaterDropGrid from "./WaterDrop";

const Header = () => {
  return (
    <section
      id="/"
      className="relative z-10 max-w-6xl m-auto px-6 sm:p-28 overflow-hidden"
    >
      <div className="w-fit-content z-10 text-gray-200 text-center sm:text-left">
        <h1 className="font-bold text-4xl sm:text-6xl text-teals-400 leading-normal">
          Hello, I'm Kafayat
        </h1>
        <h2 className="font-bold text-4xl sm:text-6xl leading-normal">
          Front-end Developer
        </h2>
        <h4 className="text-normal leading-normal mt-3">
         I'm a passionate and self-taught frontend developer 
          with a love for crafting immersive digital experiences. With a 
          strong foundation in HTML, CSS, and a knack for responsive design
        </h4>
        <button className="bg-teals-400 hover:bg-teal-900 mt-7 px-4 py-2 rounded">
          Download Resume
        </button>
      </div>
      <div className="absolute top-12 sm:top-0 bottom-12 right-0 max-w-[75%] z-0">
        <WaterDropGrid />
      </div>
    </section>
  );
};

export default Header;
