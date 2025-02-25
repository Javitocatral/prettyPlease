import MusicPlayer from '../components/MusicaPlayer/MusicPlayer'
import logo from '../assets/logo.png'
import Carousel from '../components/carrousel/Carousel'
import CardMovlie from '../components/card-movile/CardMovlie'

function Home() {
  return (
    <div className="container">
      <CardMovlie />
      <MusicPlayer />
    </div>
  )
}

export default Home
