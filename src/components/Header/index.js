// Write your JS code here

import './index.css'

const Header = () => (
  <div className="nav-page">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      alt="website logo"
      className="nav-logo"
    />
    <ul className="nav-links">
      <li className="link">
        <p>Home</p>
      </li>
      <li className="link">
        <p>Products</p>
      </li>
      <li className="link">
        <p>Cart</p>
      </li>
      <li className="link">
        <button type="button" className="link-btn">
          Logout
        </button>
      </li>
    </ul>
  </div>
)

export default Header
