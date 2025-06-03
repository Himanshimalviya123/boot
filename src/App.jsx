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
// import { useState } from "react";
// const App=()=>{
//   const [count,setCount]=useState(0)
//   const myinc=()=>{
//     setCount(count+1)
//   }
//   const mydec=()=>{
//     if(count==0)
//     {
//       alert("no decrement")
//     }
//     else{
// setCount(count-1)
//   }
// }
//   return(
//     <>
//     <h1>counter app</h1>
//    <button onClick={myinc}>increment</button>
//     <h1>{count}</h1>
//      <button onClick={mydec}>decrement</button>
//     </>
//   )
//   }
// export default App;
//////////////////////////////////////////
// import { useState,useEffect } from "react";
// const App=()=>{
//   const [myval,setMyval]=useState(0)
//   useEffect(()=>{
//     setMyval(myval+1)
//   })
  
//   return(
//     <>
//     <h1>welcome to my  app :{myval}</h1>
//  </>
//   )
//   }
// export default App;
//////////////( with settimeeout)//////////////
import { useState,useEffect } from "react";
const App=()=>{
  const [myval,setMyval]=useState(0)
  useEffect(()=>{
    setTimeout(()=>{
setMyval(myval+1);
    },5000)
  })
  
  return(
    <>
    <h1>welcome to my  app :{myval}</h1>
 </>
  )
  }
export default App;