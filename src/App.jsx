import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Tutorials from './pages/Tutorials'
import Choreos from './pages/Choreos'
import Shop from './pages/Shop'
import Events from './pages/Events'
import About from './pages/About'
import Maintenance from './pages/matenace'
import Nav from './components/nav/Nav'
import PageVideo from './components/videomaintenance/PageVideo'
import ToolBar from './components/tool-bar/ToolBar'

function App() {
  return (
    <>
      <div className="main">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/choreos" element={<Choreos />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/events" element={<Events />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/maintenance/change-wheels" element={<PageVideo />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <ToolBar />
      </div>
    </>
  )
}

export default App
