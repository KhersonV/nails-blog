import logo from "../../images/Logo.jpg"
import "./Logo.scss"
type Props = {}
const Logo = (props: Props) => {

  return (
<div><img className="logo" src={logo} alt="logo" /></div>
  )
}
export default Logo