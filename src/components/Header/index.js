import './index.css'
import {Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
const Header = () => (
  <>
    <Link to="/">
      <div className="header-bg">
        <img
          className="logo-img"
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
        />
        <button type="button">
          <IoMdClose />
        </button>
        <AiFillHome />
        <BsInfoCircleFill />
      </div>
    </Link>
  </>
)

export default Header
