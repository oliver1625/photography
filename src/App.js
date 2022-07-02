import Tutorial from './components/Tutorials/Tutorial';
import './styles/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

// import { useQueryClient, QueryClient, QueryClientProvider, useQuery } from 'react-query'
import Login from './components/Login';
import SignIn from './components/SignIn';
import Gallery from './components/Gallery';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import UserProfile from './components/User/UserProfile';
// const queryClient = new QueryClient()

function App() {

  return (
    // <QueryClientProvider client={queryClient}>
    
        <div className="App">
          
          <Router>
          <NavBar />
            <Routes>
              <Route path='/' exact element={<Home />} />
              <Route path='/signin' exact element={<SignIn />} />
              <Route path='/login' exact element={<Login />} />
              <Route path='/tutorial' exact element={<Tutorial />} />
              <Route path='/gallery' exact element={<Gallery />} />
              <Route path='/user-profile' exact element={<UserProfile />} />
            </Routes>   
          </Router>
        </div>
    // </QueryClientProvider>

  );
}

export default App;
