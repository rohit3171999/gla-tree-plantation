import {Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/Navbar';
import RegisterPage from './pages/Register';
import LoginPage from './pages/Login';
import ListingPage from './pages/List';
import HomePage from './pages/Home';
import BookDetailpage from './pages/Details';
import HomeUIPage from './pages/HomeUI';
import './App.css';

function App() {
  return (
    <div>
      <MyNavbar/>
    <Routes>
      <Route path='/' element={<HomeUIPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/login' element={<LoginPage />}/>
      <Route path='/book/list' element={<ListingPage />}/>
      <Route path='/show/details' element={<HomePage />}/>
      <Route path='/book/view/:bookId' element={<BookDetailpage />}/>
    </Routes>
    </div>
  );
}

export default App;
