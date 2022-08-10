import { useAuth } from '../Context/AuthContext';

const PrivateRoute = () => {
  const { currentUser } = useAuth();
  return <div>PrivateRoute</div>;
};

export default PrivateRoute;
