import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './Components/Header.jsx';
import Home from './Components/Home.jsx';
import Login from './Components/Login.jsx';
import Message from './Components/Message.jsx';
import Signup from './Components/Signup.jsx';
import Profile from './Components/Profile.jsx';
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/message' element={<Message/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </Router>
  );
}

export default App;
