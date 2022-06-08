import Tutorial from './components/Tutorials/Tutorial';
import './styles/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { useQueryClient, QueryClient, QueryClientProvider, useQuery } from 'react-query'
import Login from './components/Login';
import SignIn from './components/SignIn';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
// const queryClient = new QueryClient()

function App() {

  return (
    // <QueryClientProvider client={queryClient}>
    
        <div className="App">
          <Router>
            <Routes>
              <Route path='/' exact element={<Home />} />
              <Route path='/signin' exact element={<SignIn />} />
              <Route path='/login' exact element={<Login />} />
              <Route path='/tutorial' exact element={<Tutorial />} />
            </Routes>   
          </Router>
        </div>
    // </QueryClientProvider>

  );
}

export default App;
