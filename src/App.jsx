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
//////////////////////////////////////////////////////////////////////////
// const App=()=>{
//   const Display=()=>{
//     alert("welcome to react event")
//   }
//   return(
//     <>
//     <h1>welcome to app</h1>
//     <button onClick={Display}>click me</button>
//     </>
//   )
// }
// export default App;
////////////////////////////////////////////////////
// const App=()=>{
//   const Myname=(nm)=>{
//     alert("hello i am "+ nm +"from bhopal")
//   }
//   return(
//     <>
//     <h1>welcome to app</h1>
//     <button onClick={()=>{Myname("himanshi")}}>click me</button>
//     </>
//   )
// }
// export default App;
////////////////////////////////////////////
// const App=()=>{
//   const Myname=(fnm,snm)=>{
//     alert(`welcome ${fnm} ${snm}! we are from bhopal`)
//   }
//   return(
//     <>
//     <h1>welcome to app</h1>
//     <button onClick={()=>{Myname("himanshi","malviya")}}>click me</button>
//     </>
//   )
// }
// export default App;
//////////////////////////////////////////////////
// const App=()=>{
//   const Display=(e)=>{
//     // alert(`welcome`)
//     console.log(e.type);
    
//   }
//   return(
//     <>
//     <h1>welcome to app</h1>
//     <button onClick={Display}>click me</button>
//     </>
//   )
// }
// export default App;
//////////////////////////////////////////////////
// const App=()=>{
//   const Myname=(nm,e)=>{
//     alert(`myname:${nm} type :${e.type}`)

    
//   }
//   return(
//     <>
//     <h1>welcome to app</h1>
//     <button onClick={(e)=>{Myname("sachin",e)}}>click me</button>
//     </>
//   )
// }
// export default App;
/////////////////////////////////////////////////////////////////
// const App=()=>{
//   const Myname=(e)=>{
//     let nm=e.target.name;
   
//     let val=e.target.value;
//     alert(`Name ${nm} value ${val}`)
   
    
//   }
//   return(
//     <>
//     <h1>welcome to app</h1>
//     <button name="mybtn1" value="btnwal" onClick={Myname}>click me</button>
//     </>
//   )
// }
// export default App;
/////////////////////////////////////////
const App=()=>{
  const handleinput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    // console.log({name:value});              //{key ,value}
        console.log({[name]:value});             //another type
  }
  return(
    <>
    <h1>welcome to app</h1>
    enter city :<input type="text" name="mycity" value="bhopal"
    onChange={handleinput}/>
     </>
  )
}
export default App;