import MusicPlayer from '../components/MusicaPlayer/MusicPlayer'
import CardEvents from '../components/CardEvents/CardEvents'
import CarouselMovile from '../components/carrouselMovil/CarouselMovile'
import cards from '../data/data'

function Home() {
  return (
    <div className="container">
      <div className="container-box">
        <div className="container-title">
          <h4>Recent tutorials</h4>
          <p>Show all</p>
        </div>
        <CarouselMovile cards={cards} />
      </div>
      <div className="container-box">
        <div className="container-title">
          <h4>Events</h4>
          <p>Show all</p>
        </div>
        <CardEvents />
        <CardEvents />
        <CardEvents />
        <CardEvents />
      </div>

      <MusicPlayer />
    </div>
  )
}

export default Home
