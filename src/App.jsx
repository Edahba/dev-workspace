import {Routes,Route,Link} from "react-router-dom"
import Information from "./Information"
import Project from"./Project"
import Contact from "./Contact"

export default function App() {
  return (
    <>
      <nav className="d-flex justify-content-between align-items-center p-3 w-100" style={{ backgroundColor: '#fef7ee', position:"sticky",top: 0,left: 0,zIndex: 1030}}>
          <div className="px-3 py-1 rounded-pill" style={{ backgroundColor: '#f3e8ff', color: '#7c3aed', fontSize: '12px', fontWeight: '600' }}> EDAHBA.DEV</div>
            <div className="d-flex gap-4">
            <Link to="/" className="nav-link" style={{ color: '#7c3aed' }}>Accueil</Link>
            <Link to="/projets" className="nav-link" style={{ color: '#7c3aed' }}>Projets</Link>
            <Link to="/contact" className="nav-link" style={{ color: '#7c3aed' }}>Contact</Link>
          </div>
    
      </nav>
      <Routes>
        <Route path="/" element={<Information />} />
        <Route path="/projets" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>

    
    </>
  )
}

