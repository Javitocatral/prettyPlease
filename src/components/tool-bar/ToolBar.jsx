import home from '../../assets/home.png'
import play2 from '../../assets/play2.png'
import shop from '../../assets/shop.png'
import './ToolBar.css'
function ToolBar() {
  return (
    <div className="container-toolbar">
      <img src={home} alt="" />
      <img src={play2} alt="" />
      <img src={shop} alt="" />
    </div>
  )
}

export default ToolBar
