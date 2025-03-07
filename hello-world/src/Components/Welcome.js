import React,{Component} from 'react';

class Welcome extends Component{
    render(){
        const {name}=this.props
        return (
            <div>
                <h1>Hello {name} from class Comp!</h1>
                {this.props.children}
            </div>
        )
    }
} 
export default Welcome; 