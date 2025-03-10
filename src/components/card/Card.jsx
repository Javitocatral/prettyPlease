import './Card.css'
import { Link } from 'react-router-dom'
import ruedas from '../../assets/ruedas.jpg'

function Card() {
  return (
    <div className="card-mantenance">
      <Link to={`/maintenance/change-wheels`}>
        <h3>Change Wheels</h3>
        <img src={ruedas} alt="" />
        <p>
          To change quad skate wheels, first use a wrench to Loosen and remove
          the old wheels. Then remove the bearings if you are going to reuse
          them and place them on the new wheels. After, Mount the new wheels on
          the axles and tighten the nuts without tighten them too much. Finally,
          check that the wheels turn. freely before using the skates. And that's
          it! 🚀
        </p>
      </Link>
    </div>
  )
}

export default Card
