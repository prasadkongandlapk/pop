import './index.css'
import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {Link} from 'react-router-dom'
import Header from '../Header'

const Home = () => (
  <div className="home-bg">
    <Header />
    <img
      className="about-img"
      src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png "
      alt="home"
    />
    <Popup
      model
      className="popup-content"
      trigger={
        <div className="button-style">
          <button data-testid="hamburgerIconButton" type="button">
            <GiHamburgerMenu />
          </button>
        </div>
      }
    >
      {close => (
        <div>
          <ul>
            <Link to="/">
              <li>
                <h1>Home</h1>
              </li>
            </Link>
            <Link to="/about">
              <li>
                <h1>About</h1>
              </li>
            </Link>
          </ul>

          <button
            data-testid="closeButton"
            type="button"
            onClick={() => close()}
          >
            <GiHamburgerMenu />
          </button>
        </div>
      )}
    </Popup>
  </div>
)

export default Home
