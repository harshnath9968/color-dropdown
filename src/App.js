// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import{Multiselect} from 'multiselect-react-dropdown'

function App() {

  const data = [
    {Color: 'red', id:1},
    {Color: 'yellow', id:2},
    {Color: 'green', id:3},
    {Color: 'blue', id:4},
    {Color: 'white', id:5},
  ]
  const[options]= useState(data);
  return (
    <div>
      <div style={{width:"90%",justifyContent:"center",display:"flex"}}>
        <h3 style={{color:"red"}}>Multiselect Dropdown</h3>
        <Multiselect options={options} displayValue="Color"/>
      </div>
    </div>
  );
}

export default App;
