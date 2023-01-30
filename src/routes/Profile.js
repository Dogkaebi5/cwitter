import { authService } from "../fbase";

function Profile() {
  const onLogOutClick = () => {authService.signOut();}

  return (
    <>
      <h2>Profile</h2>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  )
}

export default Profile;