import './index.css'
import Popup from 'reactjs-popup'

import Header from '../Header'

const Home = () => (
  <div className="home-bg">
    <Header />
    <Popup trigger={<button type="button">click</button>}>
      {close => (
        <div className="home">
          <img
            className="home-img"
            src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png "
            alt="about"
          />
          <button type="button" onClick={() => close()}>
            *
          </button>
        </div>
      )}
    </Popup>
  </div>
)

export default Home
