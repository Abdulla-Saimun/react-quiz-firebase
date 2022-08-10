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
function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/quiz' element={<Quiz />} />
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
