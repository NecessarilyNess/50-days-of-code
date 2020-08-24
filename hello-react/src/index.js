import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(
  React.createElement(
    "h1", 
    {style: {color : "green"}}, 
    "Hello!"
    ),
  document.getElementById('root')
);

let city = {
  name: "Madrid",
  country: "Spain"
};

//Let's play :)

function Hello(props) {
  console.log(Object.keys(props));
  return (
    <div>
      <h2> Welcome to {props.library}!</h2>
      <p> {props.message}</p>
      <p> and I am {props.age} years old</p>
    </div>
  )
}

ReactDOM.render(
  <div>
    <h1 id = "heading">Hello!</h1>
    <p>My name is Vanessa and I would like to tell you my favourite food!</p> 
    <ul className = "cool-text">
      <li>Hamburgers</li>
      <li>Sushi</li>
      <li>Pizza</li>
    </ul>
    <p> And fun fact {city.name} is in {city.country}!</p>

    <Hello library = "React" message = "Have Fun!" age = {20}></Hello>
  </div>
  ,
  document.getElementById('root')
);

// COMPOSING COMPONENTS

function Lake(props) {
  return(
    <h1>{props.name}</h1>
  )
}

const lakeList = [
  "Echo Lake",
  "Maud Lake",
  "Cascade Lake"
];

/*function App({lakes}) {
  return <div>
    <Lake name = "Lake Winnetka"></Lake>
    <Lake name = "Lake Tahoe"></Lake>
    <Lake name = "Shirley Lake"></Lake>

    <p> or </p>

    <ul>
      {lakes.map(lake =>
        <li>{lake}</li>)}
    </ul>
  </div>
}

ReactDOM.render(
  <App lakes = {lakeList}/>,
  document.getElementById("root")
);
*/

//Rendering lists of Objects

/*const lakeList2 = [
  { id: "1", name: "Echo", trailhead: "Echo"},
  { id: "2", name: "Maud", trailhead: "Wrights"},
  { id: "3", name: "Velma", trailhead: "Bayview"}
];

function App({lakes}) {
  return (
    <div>
      {lakes.map(lake => (
        <div key = {lake.id}>
          <h2>{lake.name}</h2>
          <p>Accessed by: {lake.trailhead}</p>
        </div>  
      ))}
    </div>
  )
}

ReactDOM.render(
  <App lakes = {lakeList2} />,
  document.getElementById("root")
);
*/
//Conditional rendering

function Lake2(props) {
  return (
    <div>
      <h1>Visit {props.name}!</h1>
    </div>
  );
}

function SkiResort(props) {
  return (
    <div>
      <h1> Visit {props.name}!</h1>
    </div>
  )
}

function App2(props) {
  if(props.season == "summer") {
    return <Lake2 name = "Jenny Lake" />
  } else if(props.season == "winter") {
    return <SkiResort name = "JHMR" />
  }
  return <h1>Come back in the winter or summer!</h1>
}

ReactDOM.render(
  <App2 season = "autumn" />,
  document.getElementById("root")
);