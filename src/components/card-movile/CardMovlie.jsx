import roller1 from '../../assets/roller1.jpg'
import play from '../../assets/play.png'
import './CardMovile.css'
function CardMovlie() {
  return (
    <div className="container-image">
      <img src={roller1} alt="" />
      <div className="container-play">
        <img style={{ width: '28px' }} src={play} alt="play icon" />
      </div>
      <div className="container-text">
        <h3>Basic step</h3>
      </div>
    </div>
  )
}

export default CardMovlie
