import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {

const [data,setData]=React.useState();
  const handleSubmit=(event)=>{
    console.log(data);
    event.preventDefault();
  }

  const handleChange=(event)=>{
    // console.log(event.target.name,event.target.value);
    // setData({[event.target.name]:event.target.value})

   console.log(event.target.type,event.target.name,event.target.checked);
   setData({
    ...data,
  [event.target.name]:event.target.type==='checkbox' ? event.target.checked:event.target.value
  })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
     <h1>Welcome to the Programming Kingdom</h1>
     <form onSubmit={handleSubmit}>
      <div>
        <input type="text" name="firsName" onChange={handleChange}/>
     </div>
     <div>
     <input type="text" name="lastName" onChange={handleChange} />
     </div>
     <div>
     <input type="checkbox" name="isOK" onChange={handleChange} />
     </div>
     <div>
     <button type="submit">Submit</button>
     </div>
     </form>

      </header>
    </div>
  );
}

export default App;
