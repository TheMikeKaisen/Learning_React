
import { useNavigate } from "react-router-dom"
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"


function Home() {
  return (
    <div>
      <h1>
        Home Page
      </h1>
    </div>
  )
}
function About() {
  return (
    <div>
      <h1>
        About Page
      </h1>
    </div>
  )
}
function Contacts() {
  return (
    <div>
      <h1>
        Contacts Page
      </h1>
    </div>
  )
}

// METHOD1: using useNavigate Hook
function Navigation() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button onClick={() => navigate("/home")}>Home</button>
      <button onClick={() => navigate("/about")}>About</button>
      <button onClick={() => navigate("/contacts")}>Contacts</button>
    </div>
  );
}

// METHOD2: using Link from react-router-dom
function GoToPage(){
  return (
    <>
     <nav>
          <Link to="/home">Home</Link>{" "}
          <Link to="/about">About</Link>{" "}
          <Link to="/contacts">Contacts</Link>
      </nav>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <GoToPage />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;