import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App()  { 
  const nayoks = ["Anwar",'jafor','Salman', 'Sakib Khan', 'Hridoy']
const products = [
  {name: "photoshop", price: "$60.25"},
  {name: "Illustrator", price: "$64.25"},
  {name: "PDF Reader", price: "$6.25"}, 
  {name: "premier El", price: '$20.23'}
]

  return (
    <div className="App">
    
      <header className="App-header">
        <p>i am a react person</p>
         <Counter></Counter>
        
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
      
       </ul>
       <User></User>
       {
        products.map(product => <Product product={product}></Product>)
       }
       
        <Person name= 'imran Hossen' job= 'Web Developer' ></Person>
        <Person name= 'Sabitur Rahman' job= 'programer' ></Person>
        <Person name= 'Saiful Islam' job= 'Web Developer' ></Person>
        <Person name= 'Mujahidul Islam' job= 'programer' ></Person>
        
      </header>
    </div>
  );
}


function User(){
  const [user, setUser] = useState([]);
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUser(data));
  },[])
  return(
    <div>
      <h3>Dynamic User:{user.length}</h3>
      <ul>
      {
        user.map(user => <li>{user.name}:{user.phone}:{user.email}</li>)
      }
      
      </ul>

    </div>
  )
}

function Counter (props){
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);

   
  return(
    <div>
      <h1>Count:{count}</h1>
      <button onMouseMove={() => setCount(count + 1)}>Increase</button>
      <button onClick={ () => setCount(count-1)}>Decrease</button>
    </div>
  )
}



 function Product(props){
  const productStyle={
    border:"1px solid gray",
    borderRadius:"5px",
    backgroundColor:"lightgray",
    height:"200px",
    width:"200px",
    float:"left"

  }
  const {name, price} = props.product;
  console.log(name, price)
  
  return(
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy now</button>
    </div>
  )
 }

function Person (props){
  return(
    <div style= {{border: '2px solid gray', margin: '12px', width: '350px'}}>
      <h1>My Name:{props.name} </h1>
      <h3>My profession:{props.job}</h3>
    </div>

  )
}
 

export default App;
