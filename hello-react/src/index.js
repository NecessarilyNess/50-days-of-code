import React, {useState, useEffect, useReducer} from 'react';
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

// useState

function App3() {
  const [year, setYear] = useState("2050")
  const [manager, setManager] = useState("Alex")
  const [status, setStatus] = useState("Open") //returns the state when the app is opened and a function to update the state.
  return(
    <>
    <div>
      <h1>{year}</h1> 
      <button onClick ={() => setYear(parseInt(year) + 1)}>
        New Year!
      </button>
    </div>
    <div>
      <h1>Manager on duty: {manager}</h1>
      <button onClick ={() => setManager("Vanessa")}>
        New Manager
      </button>
    </div>
    <div>
      <h1>Status: {status}</h1>
      <button onClick ={() => setStatus("Open")}>
        Open
      </button>
      <button onClick ={() => setStatus("Back in 5")}>
        Break
      </button>
      <button onClick ={() => setStatus("Closed")}>
        Closed
      </button>
    </div>
    </>
  );
}

ReactDOM.render(
  <App3 />,
  document.getElementById("root")
); 


//useEffect

//Fetch data 
function GitHubUser({login}) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
    .then(res => res.json())
    .then(setData)
    .catch(console.error)
  }, []);

  if (data) {
    return <div>
      <h1 id = "heading">{data.login} 
        <img src = {data.avatar_url} width={40} /> 
      </h1>
    </div>;
  }
  return null;
}


function App5() {
  return <GitHubUser login = "NecessarilyNess" />
}

ReactDOM.render(
  <App5 />,
  document.getElementById("root")
)


function App4() {
  const [val, setVal] = useState(""); //this is a state variable
  const [val2, setVal2] = useState("");

  useEffect(() => {
    console.log(`field 1: ${val}`)
  }, [val])
  useEffect(() => {
    console.log(`field 2: ${val2}`)
  }, [val2])
  return(
    <>
    <label>
      Favourite Phrase:
      <input value = {val} onChange= {e => setVal(e.target.value)}/>
    </label>
    <br/>
    <label>
      Second Favourite Phrase:
      <input value = {val2} onChange= {e => setVal2(e.target.value)}/>
    </label>
    </>
  )
}

ReactDOM.render(
  <App4 />,
  document.getElementById("root")
);

/*function Checkbox() {
  const [checked, setChecked] = useState(false)
  useEffect(() => {
    alert(`checked: ${checked.toString()}`)
  });
  return(
    <>
      <input type = "checkbox" value = {checked} onChange= {() => setChecked(checked => !checked)}/>
      {checked ? "checked" : "not checked"}
    </>
  )
}

ReactDOM.render(
  <Checkbox />,
  document.getElementById("root")
);
*/

//useReducer

function Checkbox2() {
  const [checked, toggle] = useReducer(checked => !checked, false);

  return(
    <>
      <input type = "checkbox" value = {checked} onChange= {toggle}/>
      {checked ? "checked" : "not checked"}
    </>
  )
}

ReactDOM.render(
  <Checkbox2 />,
  document.getElementById("root")
);
