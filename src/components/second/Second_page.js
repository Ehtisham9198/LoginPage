import react from 'react';
import './Second_page.css';
const Second_page=(props)=>{

    return(
        <div>
            <div className='first'>
            <header className='heade'>
            <h2>You are logged in<button className='but'> User</button> <button className='but'>Admin</button> <button className='but' onClick={props.onLogout}>Log out</button></h2>
            
            </header>
            </div>
        <div className="welcome">
        <div className='wel'>
            <h1>Welcome back!</h1>
        </div>
        </div>
        </div>
    )

}

export default Second_page;