import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useEffect } from 'react';

function App() {
  const [user,setUser]=React.useState({

    firstName:'Uvindu',
    lastName:'Perera'
  })
  useEffect(()=>{
    console.log('Your First Name is :'+user.firstName);

    // console.log('Your Name is : ${user.firstName}');
    // alert('Your Name is : ${(user.firstName)}')

  },[user.lastName])



  const handleOnSubmit=()=>{
    setUser({
     ...user,
      lastName:Math.random()

    })

    
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

{user.lastName}


<button onClick={handleOnSubmit}>Submit</button>

      </header>
    </div>
  );
}

export default App;
