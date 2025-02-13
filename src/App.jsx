import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Step from './pages/Step'
import Choreos from './pages/Choreos'
import Shop from './pages/Shop'
import Events from './pages/Events'
import About from './pages/About'
import Maintenance from './pages/Maintenance'
import Nav from './components/nav/Nav'
import PageVideo from './components/videomaintenance/PageVideo'

function App() {
  return (
    <>
      <div className="main">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/step" element={<Step />} />
          <Route path="/choreos" element={<Choreos />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/events" element={<Events />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/maintenance/change-wheels" element={<PageVideo />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  )
}

export default App
