import { Link } from 'react-router-dom'
import play from '../../assets/play.png'
import './CardMovile.css'

function CardMovlie({ title, image }) {
  return (
    <Link to={`/maintenance/change-wheels`}>
      <div className="container-image">
        <img src={image} alt="" />
        <div className="container-play">
          <img style={{ width: '28px' }} src={play} alt="play icon" />
        </div>
        <div className="container-text">
          <h3>{title}</h3>
        </div>
      </div>
    </Link>
  )
}

export default CardMovlie
