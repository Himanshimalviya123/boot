// import { useState } from "react";

// const App=()=>{
//   const [name,setName]=useState("himanshi")
//   return(
//     <>
//     <h1>welcome to react app :{name}</h1>
//     <button onClick={()=>{setName("sakshi")}}>click here</button>
//     </>
//   )
// }
// export default App;
////////////////////////////////////////////////////////////
// import { useState } from "react";

// const App=()=>{
//   const [color,setColor]=useState("red")
//   return(
//     <>
//     <h1>welcome to react app</h1>
//     <h2 style={{color:color}}>my favrouite color is:{color}</h2>
//     <button onClick={()=>{setColor("blue")}}>change color</button>
//     </>
//   )
// }
// export default App;
//////////////////////////////////////////////////////////////////////
// import { useState } from "react";

// const App=()=>{
//   const [color,setColor]=useState("red")
//   return(
//     <>
//     <h1>welcome to react app</h1>
//     <h2 style={{color:color}}>my favrouite color is:   {color}</h2>
//     <button onClick={()=>{setColor("yellow")}}>yellow</button>
//     <button onClick={()=>{setColor("blue")}}>blue</button>
//     <button onClick={()=>{setColor("green")}}>green</button>
//     </>
//   )
// }
// export default App;
////////////////////////////////////////
// import { useState } from "react";

// const App=()=>{
//   const [color,setColor]=useState("red")
//   return(
//     <>
//     <h1>welcome to react app</h1>
//     <h2 style={{color:color}}>my favrouite color is:   {color}</h2>
//     <button style={{backgroundColor:"yellow",color:"white" }} onClick={()=>{setColor("yellow")}}>yellow</button>
//     <button style={{backgroundColor:"yellow",color:"white" }} onClick={()=>{setColor("blue")}}>blue</button>
//     <button style={{backgroundColor:"yellow",color:"white" }} onClick={()=>{setColor("green")}}>green</button>
//     </>
//   )
// }
// export default App;
////////////////////////(counter app)////////////////////
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
//////////////////////////////////////////////////
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
// import { useState,useEffect } from "react";
// const App=()=>{
//   const [myval,setMyval]=useState(0)
//   useEffect(()=>{
//     setTimeout(()=>{
// setMyval(myval+1);
//     },5000)
//   })
  
//   return(
//     <>
//     <h1>welcome to my  app :{myval}</h1>
//  </>
//   )
//   }
// export default App;