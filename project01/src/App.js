import logo from './logo.svg';
import './App.css';
import React from 'react';
import { UserProfile, UserRole } from './component/UserProfile';
import Clock from './component/Clock';


function App() {
  
  const handleOnUpdateEvent=(message,age)=>{
    console.log(message,age);
  }

  const a = <h1>Hello</h1>
const [title,setTitle]=React.useState("Hello tite");

// React.useEffect(()=>{
//   setTimeout(()=>{
//     setTitle("This is my secound value title");
//   },5000)
// },[]);

  const Header = (props) => {


    let color = ""

    switch (props.type) {
      case 'SUBMIT':
        color = 'green'
        break;

      case '':
        color = 'red'
        break;

      case 'RESET':
        color = 'blue'
        break;
      default:
        color = ''
    }
    return(
      <button style={{ background:color}}>(props.text)</button>
    )
    // }
    // return(
    //   <button style={{
    //     background:color}}>(props.text)</button>


    // )
  }



  const [data, setData] = React.useState();
  const handleSubmit = (event) => {
    console.log(data);
    event.preventDefault();
  }

  const handleChange = (event) => {
    // console.log(event.target.name,event.target.value);
    // setData({[event.target.name]:event.target.value})

    console.log(event.target.type, event.target.name, event.target.checked);
    setData({
      ...data,
      [event.target.name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value
    })
  }

  return (

    <div className="App">
      <header className="App-header">
        <p>{a}</p>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to the Programming Kingdom</h1>


        <form onSubmit={handleSubmit}>
          <div>
            <input type="text" name="firsName" onChange={handleChange} />
          </div>
          <div>
            <input type="text" name="lastName" onChange={handleChange} />
          </div>
          <div>
            <input type="checkbox" name="isOK" onChange={handleChange} />
          </div>
          <div>
            {/* <button type="submit">Submit</button> */}
            <Header text='SUBMIT' type="SUBMIT"/>
          </div>
          <div>HI</div>
          <Clock/>
          {/* <UserProfile
          title={title}
          name="This is name"
          onUpdateClicked={handleOnUpdateEvent}
          /> */}
 
       {/* {UserRole.ADMIN}<br></br>
       {UserRole.USER} */}
          
        </form>

      </header>
    </div>

  );
}

export default App;
