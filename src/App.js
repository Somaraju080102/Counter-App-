import React,{useState} from "react"

import "./App.css"


function App(){
  const [count,setcount]=useState(0)

  return(
    <div>
      <h1>Counter Application using ReactJs</h1>
      <h2>Current Value of count is {count}</h2>
      <button onClick={()=>setcount(0)}>ResetCounter</button>
      <button onClick={()=>setcount(count>=10?"Sorry Not greater than 10":count+1)}>IncreaseCounter</button>
      <button onClick={()=>setcount(count>0?count-1:"Negative Values are not allowed")}>DecreaseCounter</button>
    </div>
  )
}

export default App;