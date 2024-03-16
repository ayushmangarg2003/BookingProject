import './Profile.css'
import ProfileNavbar from '../../components/ProfileNavbar/ProfileNavbar';
import profilePic from "../../assets/profilePic.png"
import { useUserContext } from '../../hooks/useUserContext';
import { useLogout } from '../../hooks/useLogout'
const Profile = () => {
  const {user}  = useUserContext()
  const { logout } = useLogout()

  const handleLogout = () => {
    logout()
  }

  return (
    <div className='profile'>
      <div className='profile-nav-parent'>
        <ProfileNavbar />
      </div>
      <div className="profile-parent">
        <img src={profilePic} alt="" />
        <h1>Your Profile</h1>
        <p>Email: {user.email}</p>
        <div onClick={handleLogout} className="logout-btn">Logout</div>
      </div>
    </div>
  )
}

export default Profile