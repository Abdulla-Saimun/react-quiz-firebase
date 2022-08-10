import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from '../Context/AuthContext';
import '../styles/App.css';
import Layout from './Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import Signup from './pages/Signup';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRouter';
function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route
              path='/login'
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path='/signup'
              element={
                <PrivateRoute>
                  <Signup />
                </PrivateRoute>
              }
            />
            <Route
              path='/quiz'
              element={
                <PrivateRoute>
                  <Quiz />
                </PrivateRoute>
              }
            />
            <Route
              path='/result'
              element={
                <PrivateRoute>
                  <Result />
                </PrivateRoute>
              }
            />
            <Route path='*' />
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
