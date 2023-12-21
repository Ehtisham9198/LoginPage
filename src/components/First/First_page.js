import {react,useRef,useState} from 'react';
import './First_page.css';
import Second_page from '../second/Second_page';

const First_page = (props) => {
    const Username = useRef();
    const Password = useRef();
    const [Id,SetId] = useState([]);

const submitHandler =(event)=>{
    event.preventDefault();
    let User = Username.current.value;
    let Pass = Password.current.value;
    if(User.trim().lenght<=6 || Pass.trim().lenght===0 )
    {
        return;
    }

    else{
        SetId((prevList) => [...prevList, User,Pass]);
    // props.onLogin();
    Username.current.value ="";
    Password.current.value="";
    }

   }

    return (
        <div>
            <div className='login'>
                <h1>Login page</h1>
               
            </div>
            <br />

            <form onSubmit={props.onLogin}>
                <div className='dabba'>
                <div className='container'>
                    <label htmlFor="email">E-Mail  </label>
                    <input type="email" id="email" className='inp' ref = {Username} required={true}/>
                    <br />
                    <label htmlFor="password">Password</label>
                    <input type="text" className='inp' ref={Password} required={true} minLength={6}/>
                </div>
                <br />
                <div>
                    <button className='button'>Login</button>
                </div>
                </div>
            </form>
           
             

            <ul>
           {Id.map((e)=>{ 
            return <li>{e}</li>
          
             })}
    
    </ul> 
    <footer className='foot'>All right deserved</footer>
        </div>
    );

}

export default First_page;