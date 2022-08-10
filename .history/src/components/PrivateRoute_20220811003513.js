import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  if (!currentUser) {
    return <Navigate to='/login' />;
  }
  return children;
};

export default PrivateRoute;
