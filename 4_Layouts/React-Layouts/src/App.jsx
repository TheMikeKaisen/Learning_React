
import {BrowserRouter, Routes, Route, useNavigate, Outlet} from "react-router-dom"


function Home (){
  return (
    <h1>
      Home Page
    </h1>
  )
}

function About (){
  return (
    <h1>
      About Page
    </h1>
  )
}

function Contacts (){
  return (
    <h1>
      Contacts Page
    </h1>
  )
}

function Navigation(){
  let navigate = useNavigate();
  return(
    <>
      <button onClick={() => navigate("/home")}>Home</button>
      <button onClick={() => navigate("/about")}>About</button>
      <button onClick={() => navigate("/contacts")}>Contact</button>
    </>
  )
}

function Layout(){
  return(
    <>
      <Navigation />
      <Outlet />
      <h2>Footer</h2>
    </>
  )
}

function App(){
  return (
    <>
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
    
  )
}

export default App