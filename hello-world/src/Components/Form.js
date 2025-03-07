import React, { Component } from 'react'
let topics=['react','angular','vue']
export class Form extends Component {
    constructor(props){
        super(props)
        this.state={
            username:'',
            comments:'',
            topic:'react'
        }
    }
    unameHandle (e){
        this.setState({
            username:e.target.value
        })
    }
    cHandle (e){
        this.setState({
            comments:e.target.value
        })
    }
    tHandle(e){
        this.setState({
            topic:e.target.value
        })
    }
    sHandle(e){
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        e.preventDefault()
    }
  render() {
    return (
      <form onSubmit={(e)=>this.sHandle(e)}>
        <div>
            <label>Username</label>
            <input value={this.state.username} type='text' onChange={(e)=>this.unameHandle(e)}></input>
        </div>
        <div>
            <label>Comments</label>
            <textarea value={this.state.comments} onChange={(e)=>this.cHandle(e)}></textarea>
        </div>
        <div>
            <label>Topic</label>
            <select value={this.state.topic} onChange={(e)=>this.tHandle(e)}>
            {topics.map(({topic},i)=>(
                <option value={topic} key={i}>{topics[i]}</option>
            ))}
            </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default Form