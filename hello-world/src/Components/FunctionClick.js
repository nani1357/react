 import React from 'react'

 function FunctionClick (){
    function clickHandle (){
        console.log("Fucntion Clicked")
    }
    return (
        <div>
            <button onClick={clickHandle}>
                FunctionClick
            </button>
        </div>
    )
 }
 export default FunctionClick;