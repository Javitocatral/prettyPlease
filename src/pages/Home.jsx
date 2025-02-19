import MusicPlayer from '../components/MusicaPlayer/MusicPlayer'
import logo from '../assets/logo.png'
import Carousel from '../components/carrousel/Carousel'

function Home() {
  return (
    <div className="container">
      <img src={logo} alt="Logo pone PrettyPlease" />
      <Carousel />
      <MusicPlayer />
    </div>
  )
}

export default Home
