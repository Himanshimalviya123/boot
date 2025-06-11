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
import Comp1 from "./propsdelay/comp1";
import { useState } from "react";

const Appp=()=>{
  const[user,setUser]=useState("muskan");
  return(
    <>
    <h1>welcome:{user}!!!</h1>
    <Comp1 user={user}/>
    </>
  )
}
export default Appp;
