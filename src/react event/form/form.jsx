import { useState } from "react";
const App=()=>{
  const[name,setName]=useState("")
  const[city,setCity]=useState("")
  const handleSubmit=()=>{
    console.log({name:name,city:city});
    
  }
  return(
    <>
    <h1>application form</h1>
    enter name:<input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} /><br/>
    enter city:<input type="text" value={city} onChange={(e)=>{setCity(e.target.value)}}/><br/>
    <button onClick={handleSubmit}>click here!!!</button>
    </>
  )
}
export default App;
