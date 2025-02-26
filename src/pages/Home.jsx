import MusicPlayer from '../components/MusicaPlayer/MusicPlayer'
import CardEvents from '../components/CardEvents/CardEvents'
import CarouselMovile from '../components/carrouselMovil/CarouselMovile'
import cards from '../data/data'

function Home() {
  return (
    <div className="container">
      <CarouselMovile cards={cards} />
      <div style={{ width: '100%', margin: '10px' }}>
        <div></div>
        <CardEvents />
        <CardEvents />
        <CardEvents />
      </div>
      <MusicPlayer />
    </div>
  )
}

export default Home
