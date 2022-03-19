import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">

      <Blog heading='Love Life' author='Mr.Jorder'  ></Blog>
      <Blog heading='Love coding' author='Mr.charm'  ></Blog>
      <Blog heading='Love starup' author='Mr.lovely'  ></Blog>
      <Mobile></Mobile>
      
    </div>
  );
}

function Blog(props){
  return(
    <div>
      <h1>
        Heading : {props.heading} , Author : {props.author}
      </h1>
      <article className='blog'>
        <p style={{backgroundColor:'yellow', border:'3px solid red'}}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, rem.
        </p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias ex cum, ipsum exercitationem facilis a?
      </article>
    </div>
  )
}

function Mobile(){

const [battery, setBattery]=useState(100)

function batteryDown(){

  if (battery<=0){
  const newBattery = 0

  setBattery(newBattery)
  }
  else{
    const newBattery = battery-10

  setBattery(newBattery)
  }

}
  

  return (
    <div>
      <h4>{battery}</h4>
      <button onClick={batteryDown} >Battery Down</button>
    </div>
  )



}

export default App;
