import Comp2 from "./comp2";
const Comp1=({user})=>{
    return(
      <>
      <h5>component-1</h5>
    
      <Comp2 user={user}/>
      </>
    )
  
  }
  export default Comp1;
