import logo from './logo.svg';
import './App.css';
import { UserProfile } from './UserProfile';
import React from 'react';

function App() {

const [userLoggedIn,setUserLoggedIn]=React.useState('false');
const [users,setUsers]=React.useState(['user1','user2','user3'])
const handleLogin=()=>{
  setUserLoggedIn(!userLoggedIn)
}
  // const handleOkClick= () =>{
  //   console.log("Pressed Ok Button")
  // }
  // const handleCancelClick= () =>{
  //   console.log("Pressed Cancel Button")
  // }
  // const handleInputChanger=(event,name,age,obj)=>{
  //   // console.log("input value changed")
  //   console.log(event.target.value,name,age,obj)
  // }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}

{/* <button onClick={()=>{
  console.log("click ok")
}}>OK</button> */}
{/* <button onClick={handleCancelClick}>Cacnel</button> */}

{/* <input type="text" onChange={(event)=>handleInputChanger(event,"Uvindu",24,{})}/> */}
{users.map(user=> <p>{user}</p>)}

{userLoggedIn && <p>Welcome</p>}
<button onClick={handleLogin}>{userLoggedIn ? 'Logout':'Login'}</button>
      </header>
    </div>
  );
}

export default App;
