import { Route, useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
const PrivateRoute = ({ path, element }) => {
  console.log(path);
  console.log(element);
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  return currentUser ? <Route path={path} element={element} /> : navigate('/');
};

export default PrivateRoute;
