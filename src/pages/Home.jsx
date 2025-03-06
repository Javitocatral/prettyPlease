import MusicPlayer from '../components/MusicaPlayer/MusicPlayer'
import CardEvents from '../components/CardEvents/CardEvents'
import CarouselMovile from '../components/carrouselMovil/CarouselMovile'
import cards from '../data/data'
import CardSkaters from '../components/card-skaters/CardSkaters'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="container">
      <div className="container-box">
        <div className="container-title">
          <h4>Recent tutorials</h4>
          <Link to={'/Alltutorials'}>
            <p>Show all</p>
          </Link>
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
      <div className="container-box">
        <div className="container-title">
          <h4>Rollerskaters</h4>
        </div>
        <div className="container-skaters">
          <CardSkaters />
          <CardSkaters />
          <CardSkaters />
          <CardSkaters />
          <CardSkaters />
          <CardSkaters />
          <CardSkaters />
          <CardSkaters />
          <CardSkaters />
          <CardSkaters />
        </div>
      </div>
    </div>
  )
}

export default Home
