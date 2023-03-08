import { Link } from 'react-router-dom'
import App from '../../App'

const NavBar = ({ user, handleLogout }) => {
  return (
    <nav>
      {user ?
        <ul>
          <li>Welcome, {user.name}</li>
          <li><Link to="/profiles">Profiles</Link></li>
          <li><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
          <li><Link to="/change-password">Change Password</Link></li>
        </ul>
      :
        <div className='navbar-container'>
          <div className='navbar-message'>
            <h4 className='welcome-title'>Hello, Friend</h4>
            <p className='welcome-p'>Get various community updates for Mental Wealth Academy.</p>
          </div>
          <ul>
            <li><Link to="/login">Log In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </ul>
        </div>
      }
    </nav>
  )
}

export default NavBar
