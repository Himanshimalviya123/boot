// import { BrowserRouter,Routes,Route } from "react-router-dom";
// import Layout from "./layout";
// import Home from "./pages/home";
// import About from "./pages/about";
// import Services from "./pages/services";
// import Join from "./pages/join";
// import Contact from "./pages/contact";
// import Notfound from "./notfound";
// const App=()=>{
//   return(
//     <>
//     <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<Layout/>}>
//       <Route index element={<Home/>}/>
//        <Route path="home" element={<Home/>}/>
//       <Route path="about" element={<About/>}/>
//        <Route path="services" element={<Services/>}/>
//         <Route path="join" element={<Join/>}/>
//          <Route path="contact" element={<Contact/>}/>
//          <Route path="*" element={<Notfound/>}/>

//       </Route>
//     </Routes>
//     </BrowserRouter>
//     </>
//   )
// }
// export default App;

import { useState } from "react";
import axios from "axios";
 const App=()=>{
    const[input,setInput]=useState({})
const handleInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;

    setInput(values=>({...values,[name]:value}))
    console.log(input)
}
    const handleSubmit=async()=>{
        let api="http://localhost:3000/student";
        const response=await axios.post(api,input )
        alert("data inserted")
      
    }

  return(
    <>
    <h1>application form</h1>
    enter emp_num:<input type="text" name="emp_num" onChange={handleInput}/><br/><br/>
    enter emp_name:<input type="text" name="emp_name" onChange={handleInput}/><br/><br/>
    designation:<input type="text" name="designation" onChange={handleInput}/><br/><br/>
    city:<input type="text" name="city" onChange={handleInput}/><br/><br/>
    <button onClick={handleSubmit}>click here!!!</button><br/>
    </>
  )
}
export default App;