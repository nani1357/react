import React from 'react'

const Hello = () =>{
    //With JSX
    // return (
    //     <div>
    //         <h1>
    //             Hello Manoj, How are you?
    //         </h1>
    //     </div>
    // )
    //Without JSX
    return React.createElement('div',null,React.createElement('h1',null,'Hello Manoj How are you?'))
}
export default Hello;