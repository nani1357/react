import React,{Component} from 'react'

class Counter extends Component{
    constructor(){
        super()
        this.state = {
            counter: 0
        }
    }
    incrementCounter(){
        if((this.state.counter+1)%5===0)
        this.setState({
            counter : this.state.counter+1
        })
        else this.state.counter=this.state.counter+1
    }
    resetCounter(){
        this.setState({
            counter : 0
        })
    }
    render(){
        return (
            <div>
                <button onClick={()=>this.incrementCounter()}>Clickme</button>
                <button onClick={()=>this.resetCounter()}>Reset</button>
                <h1>Button is Clicked {this.state.counter} times </h1>
            </div>
        )
    }
}
export default Counter;