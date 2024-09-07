import './Navbar.css'
import { assets } from "../../assets/assets"

export const Navbar = () => {
  return (
    <div className="navbar">
      <img src={assets.logo} alt="" className="logo" />
      <img src={assets.profile_image} alt="" className="profile" />
    </div>
  )
}
