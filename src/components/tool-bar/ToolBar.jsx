import { Link } from 'react-router-dom'
import home from '../../assets/home.png'
import play2 from '../../assets/play2.png'
import shop from '../../assets/shop.png'
import './ToolBar.css'
function ToolBar() {
  return (
    <div className="container-toolbar">
      <Link to={'/'}>
        <img src={home} alt="" />
      </Link>
      <Link to={'/Alltutorials'}>
        <img src={play2} alt="" />
      </Link>
      <Link to={'/shop'}>
        <img src={shop} alt="" />
      </Link>
    </div>
  )
}

export default ToolBar
