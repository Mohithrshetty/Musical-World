


import { Routes, Route, BrowserRouter } from 'react-router-dom';


import Login from './components/Login/Login'


import Navbar from './components/Navbar/Navbar';
import Signup from './components/Signup/Signup';
import  Favorite  from './components/Favourites/Favourite'
import Songs from './components/Songs/Songs'
import SongList from './components/Songdisplay/Songdisplay';
import Home from './components/Home/Home';



function App() {


  return (
    
    <div>
    <BrowserRouter>
    <Navbar/>
 

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Songs" element={<SongList/>}/>
        
        <Route path="/Favorites" element={<Favorite/>}/>
        <Route path="/upload" element={<Songs/>}/>

        
        
        
      
      </Routes>
    </BrowserRouter>
  </div>
 
      
  );
}

export default App;
