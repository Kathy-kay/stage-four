import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <header className="w-full shadow-lg h-24 bg-bay-300">
     <nav className=' bg-transparent py-10 px-28 font-bold '>
        <div className="container mx-auto flex items-center justify-between text-gray-300">
            <Link to="/" className="text-3xl" ><h1>KATHY</h1>
            </Link>
          
            <ol className="flex space-x-12 tracking-widest">
                <li><Link to="/">Home</Link></li>
                <li> <Link to="about">About</Link></li>
                <li><Link to="projects">Project</Link></li>
                <li><Link to="contact">Contact</Link></li>
                <li>
                  <a 
                    href=""
                    download
                    className="bg-teals-400 hover:bg-teal-900 px-4 py-2 rounded">
                    Resume 
                  </a>
                </li>
            </ol>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
