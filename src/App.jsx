import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Step from './pages/Step'
import Choreos from './pages/Choreos'
import Shop from './pages/Shop'
import Events from './pages/Events'
import About from './pages/About'
import Nav from './components/nav/Nav'
function App() {
  return (
    <>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/step" element={<Step />} />
          <Route path="/choreos" element={<Choreos />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  )
}

export default App
