import React, { useState } from 'react'





const Counter = () => {
     const [a,setA]=useState(0)
  return (
   <>
   <div id='counter'>
   <h1  >Counter</h1>
   <h1  >{a}</h1>
   <button onClick={()=>setA(a+1)}>Increment</button>
   <button onClick={()=>setA(a-1)}>Decrement</button>
   
   </div>
   </>
  )
}

export default Counter