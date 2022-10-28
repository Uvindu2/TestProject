import logo from './logo.svg';
import './App.css';
import { useRef } from 'react';
import { forwardRef } from 'react';
import { useImperativeHandle } from 'react';

function App() {

  //  const inputRef=useRef(null)
  const parentRef=useRef(null)

  const handleClick=()=>{
    parentRef.current.clickMe();
    // inputRef.current.focus();

  }


let MyInput=(props,ref)=>{
  const inputRef=useRef()

 useImperativeHandle(ref,()=>({
clickMe:()=>{
  // console.log('click me');
  inputRef.current.focus();
}

 }))

  return <input ref={inputRef}/>
}
MyInput=forwardRef(MyInput);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

{/* <input ref={inputRef}/> <br/> */}
<MyInput ref={parentRef}/>

<button onClick={handleClick}>Click</button>

      </header>
    </div>
  );
}

export default App;
