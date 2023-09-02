import React, { useState } from 'react'

const Statemanagement = () => {

    let count = 0;

    const [likes, setLikes] = useState(0);

  return (
    <div className='container'>
        <h1 className='text-center'>State management</h1>
        <hr/>

        <button className='btn btn-danger' onClick={()=>{count++; console.log(count);}}>Click Here </button>

        <h1>{count}</h1>                            {/* it is printing the initial value 0 and not the updated count */}

        {/* state management wo hota hai jisme real-time update karna hota hai jaise fb pr like karte hain toh update hota hai turant */}

        <button className='btn btn-success mt-4' onClick={ () => {setLikes(likes+1)} }>{likes} Likes</button>                                   {/* likes++ nahi work karega kyunki wo assignment operator hai */}
        </div>
  )
}

export default Statemanagement