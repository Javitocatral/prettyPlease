import MusicPlayer from '../components/MusicaPlayer/MusicPlayer'

import CardMovlie from '../components/card-movile/CardMovlie'
import CardEvents from '../components/CardEvents/CardEvents'

function Home() {
  return (
    <div className="container">
      <CardMovlie />
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
