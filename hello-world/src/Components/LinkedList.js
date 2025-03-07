import React, { Component } from 'react'
import Buttons from './Buttons';
let lst=[],prev=[];
for(let i=1;i<=10;i++){
    lst.push({
        val:i,
        createdAt:new Date().toLocaleString(),
        data:''
    })
}
const theadcss={
    color:'red'
},tbodycss={color:'green'}
export default class LinkedList extends Component {
    constructor(props){
        super(props)
        this.state={
            rlst:[...lst],
            struct:false
        }
        this.updatelst = this.updatelst.bind(this);
        this.Reset = this.Reset.bind(this);
        this.Struct = this.Struct.bind(this);
        this.AddStart = this.AddStart.bind(this);
        this.AddEnd = this.AddEnd.bind(this);
        this.sortEarliest = this.sortEarliest.bind(this);
        this.sortLatest = this.sortLatest.bind(this);
    }
    updatelst(ind,val){
        prev=lst;
        lst[ind].data=val;
        this.setState({
            rlst:[...lst]
        })
    }
    Reset(){
        lst=prev;
        this.setState({
            rlst:[...lst]
        })
    }
    Struct(){
        this.setState({
            struct:!this.state.struct
        })
    }
    AddStart(){
        prev=[...lst]
        let value=parseInt(prompt("Enter a value:"))
        while(isNaN(value)){
            value=parseInt(prompt("Enter a proper Number:"))
        }
        console.log(lst)
        lst.unshift({val:(value),createdAt:new Date().toLocaleString(),data:""})
        console.log(lst)
        this.setState({
            rlst:[...lst]
        })
    }
    AddEnd(){
        prev=[...lst]
        let value=parseInt(prompt("Enter a value:"))
        while(isNaN(value)){
            value=parseInt(prompt("Enter a proper Number:"))
        }
        lst.push({val:(value),createdAt:new Date().toLocaleString(),data:""})
        this.setState({
            rlst:[...lst]
        })
    }
    sortEarliest(){
        prev=[...lst]
        lst=lst.sort((a,b)=>(new Date(a.createdAt)-new Date(b.createdAt)))
        this.setState({
            rlst:[...lst]
        })
    }
    sortLatest(){
        prev=[...lst]
        lst=lst.sort((a,b)=>(new Date(b.createdAt)-new Date(a.createdAt)))
        this.setState({
            rlst:[...lst]
        })
    }
  render() {
    return !this.state.struct ? (
      <div>key=index
        <Buttons AddStart={this.AddStart} AddEnd={this.AddEnd} sortEarliest={this.sortEarliest} sortLatest={this.sortLatest} Reset={this.Reset} Struct={this.Struct}/>
        <table>
            <thead style={theadcss}>
                <tr>
                    <th>Index</th>
                    <th>value</th>
                    <th>Item</th>
                    <th>createdAt</th>
                </tr>
            </thead>
            <tbody style={tbodycss}>
                {this.state.rlst.map(({val,createdAt,data},key)=>(
                    <tr key={key}>
                        <td>{key}</td>
                        <td>{val}</td>
                        <td><input value={data} onChange={(e)=>this.updatelst(key,e.target.value)}/></td>
                        <td>{createdAt}</td>
                    </tr>
    ))}
            </tbody>
        </table>
      </div>
    ): (<div>
        <Buttons AddStart={this.AddStart} AddEnd={this.AddEnd} sortEarliest={this.sortEarliest} sortLatest={this.sortLatest} Reset={this.Reset} Struct={this.Struct}/>
        <h3>[</h3><br></br>
        {this.state.rlst.map(({val,createdAt,data},i)=>(
            <div>
                <h6>[</h6><h6><b>index:</b>{i},</h6><h6><b>value:</b>{val},</h6><h6><b>data:</b>{data},</h6><h6><b>createdAt:</b>{createdAt}</h6>
                <h6>]</h6>
            </div>
        ))}
        <h3>]</h3><br></br>
        </div>)
  }
}