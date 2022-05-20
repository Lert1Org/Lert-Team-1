import { useLocation, Navigate, Outlet } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const RequireAuth = ({ allowedRole }) => {
  const { auth } = useAuth()
  const location = useLocation()
  console.log(auth)
  console.log(allowedRole)

  return auth.role === allowedRole
      ? <Outlet />
      : <Navigate to={'/login'} state={{ from: location }} replace />

}

export default RequireAuth
