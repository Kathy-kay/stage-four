import { createBrowserRouter,
   RouterProvider,
    createRoutesFromElements,
    Route,

  } from "react-router-dom"
import RootLayout from "./layout/RootLayout"
import About from "./Componenet/About"
import Project from "./Componenet/Project"
import Contact from "./Componenet/Contact"
import Home from "./Page/Home"


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
        <Route  path="about" element={<About/>}/>
        <Route path="projects" element={<Project/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route />
      </Route>
    )
  )

  return (
    <main>
     <RouterProvider router={router}/>
     <Home />
    </main>
  )
}

export default App
