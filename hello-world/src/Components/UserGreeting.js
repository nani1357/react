import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedin : true
      }
    }
  render() {
    return (this.state.isLoggedin && <div>Welcome Manoj</div>)
    // return (this.state.isLoggedin?<div>Welcome Manoj</div>:<div>Welocme Guest</div>)
    // let msg 
    // if (this.state.isLoggedin) msg=<div>Welcome Manoj</div>
    // else msg=<div>Welcome Guest</div>
    // return (<div>{msg}</div>)
    // if (this.state.isLoggedin) return (
    //     <div>
    //         Welcome Manoj
    //     </div>
    // )
    // else return (
    //     <div>
    //         Welcome Guest
    //     </div>
    // )
    // return (
    //   <div>
    //     <div>Welcome Manoj</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // )
  }
}

export default UserGreeting