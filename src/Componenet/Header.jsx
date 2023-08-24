

const Header = () => {
  return (
    <section className="container h-screen flex items-start pt-40 px-28">
        <div className="overflow-y-hidden text-gray-200 ">
            <h1 className="font-bold text-6xl text-teals-400 leading-normal">Hello, I&apos;m Kafayat</h1>
            <h2 className="font-bold text-6xl leading-normal">Front-end Developer</h2>
            <h4 className="text-normal leading-normal mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Officiis 
            voluptas eum exercitationem ratione modi nulla <br/>voluptatem debitis, 
            minima, eius in omnis enim! Ullam quia </h4>
            <button
            className="bg-teals-400 hover:bg-teal-900 mt-7 px-4 py-2 rounded"
            >Download Resume</button>
        </div>
    </section>

  )
}

export default Header
