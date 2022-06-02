
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Feeds from './pages/Feeds';
import Login from './pages/Login';
import Home from './pages/Home';
import Posts from './pages/Posts';
import RequireAuth from './hoc/RequireAuth';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <Routes>
       <Route path='' element={<Home />}></Route>
       <Route path='/login' element={<Login/>}></Route> 
       <Route path='/feeds' element={
       <RequireAuth> <Feeds/></RequireAuth>
      }>
      </Route>
      <Route path='/posts' element={
       <RequireAuth> <Posts /></RequireAuth>
      }>
      </Route>
     
     </Routes>
    
    </div>
  );
}

export default App;
