import React from 'react'
import Login from '../features/auth/Pages/Login'
import { AuthContext } from '../features/auth/auth.context';
import { registerUser, loginUser } from '../features/auth/services/auth.api';

const Home = () => {
  const context = React.useContext(AuthContext);
  const { user } = context;

  return (
    <>
      {/* name of the user in wellcome */}
      <h1>Welcome {user?.name || 'Guest'}!</h1>
      {/* if user is not logged in, show login page */}
      {!user && <Login />}

    </>
  )
}

export default Home