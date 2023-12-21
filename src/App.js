import './App.css';
import { useState } from 'react';
import First_page from './components/First/First_page';
import Second_page from './components/second/Second_page';

function App() {
  const [isLoggedIn,setLoggedIn] = useState(false);

  const handlenLogin=()=>{
    setLoggedIn(true);
  }
  const handlelogout=()=>{
    setLoggedIn(false);
  }

    return(
      <div>
        {!isLoggedIn && <First_page onLogin ={handlenLogin}/>}
        {isLoggedIn && <Second_page onLogout={handlelogout}/>}
      </div>

    )
}

export default App;
