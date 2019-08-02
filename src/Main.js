import React,{Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css'
import {BrowserRouter as Router, Route, NavLink, Redirect,Link} from "react-router-dom";
import View from "./View"



class Main extends React.Component {
        constructor(props) {
        super(props);
        this.state = {
          Name:"",
          Email:"",
          Address:"",
          Phone:"",
          estimate:[],
          id:1,
          openbutton:true,
          Index:0,
          openview:true,
          indexprops:Number
        };
      }

updatestate=(e)=>{
  this.setState({
    [e.target.name]:e.target.value
  })
}

UpdateSubmit=()=>{
  const {id,Name,Email,Address,Phone,Index}=this.state
  if(Name){
  this.setState({
    estimate:[ ...this.state.estimate,{"id":id,"name":Name,"email":Email,"address":Address,"phone":Phone,"index":Index}],
    Name:"",
    Email:"",
    Address:"",
    Phone:"",
    id:this.state.id+1,
    Index:this.state.Index+1
  })
}
}

editupdate=(e)=>{
  const {id,Name,Email,Address,Phone}=this.state
    this.setState({
      Index:e.index,
      Name:e.name,
      Email:e.email,
      Address:e.address,
      Phone:e.phone,
      openbutton:false

    })
}

updatedata=()=>{
  const {id,Name,Email,Address,Phone,Index}=this.state
this.state.estimate[Index]={id:"[Edited]","name":Name,"email":Email,"address":Address,"phone":Phone,"index":Index}
  this.setState({
    openbutton:true,
    estimate:this.state.estimate,
    Name:"",
    Email:"",
    Address:"",
    Phone:"",
  })
}

viewupdate=(e)=>{
  this.setState({openview:false,indexprops:e.index})
}

  render(){
    const {id,Name,Email,Address,Phone}=this.state
    console.log(JSON.stringify(this.state.estimate))

  return (
    <div>
    {this.state.openview?
    <div className="headingmargin ">
    <form className="">
    <div className="label ">Name :
    <input className="is-relative moverightname" type="text" onChange={this.updatestate} name="Name" value={this.state.Name} placeholder="name" required></input>
    </div>
    <div className="label">Email :
    <input className="is-relative moverightemail" type="text" onChange={this.updatestate} name="Email" value={this.state.Email} placeholder="email" required></input>
    </div>
    <div className="label">Address :
    <input type="text" onChange={this.updatestate} name="Address" value={this.state.Address} placeholder="address" required></input>
    </div>
    <div className="label">Phone :
    <input className="is-relative moverightphone" type="text" onChange={this.updatestate} name="Phone" value={this.state.Phone} placeholder="phone" required></input>
    </div>
    {this.state.openbutton?
    <button onClick={this.UpdateSubmit} type="submit">Create</button>:
    <button onClick={this.updatedata} type="submit">update</button>}
    </form>
    <table className="table is-fullwidth">
            <thead>
            <tr>
            <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {this.state.estimate.map(e => {
                return (
                    <tr>
                    <td>{e.id}</td>
                        <td>{e.name}</td>
                        <td>{e.email}</td>
                        <td>{e.address}</td>
                        <td>{e.phone}</td>
                        <td><div className="dropdown is-hoverable">
                                <div className="dropdown-trigger">
                                    <button className="button" aria-haspopup="true" aria-controls="dropdown-menu2">
                                        <span>Actions</span>
                                    </button>
                                </div>
                                <div class="dropdown-menu" id="dropdown-menu" role="menu">
                                <div class="dropdown-content">
                                <a onClick={() => this.editupdate(e)} className="dropdown-item"
                                >edit</a>
                                <a onClick={() => this.viewupdate(e)} className="dropdown-item"
                                >view</a>
                                    </div>
                                </div>
                            </div>
                            </td>
                    </tr>
                    )
                })}
                </tbody>
            </table>

    </div>:<View title={this.state.estimate} indexvalue={this.state.indexprops}/>}
    </div>
  )
}
}

export default Main;
// <a href={`/View/${e.name}`}>view</a>

// <div className="dropdown is-hoverable">
//         <div className="dropdown-trigger">
//             <button className="button" aria-haspopup="true" aria-controls="dropdown-menu2">
//                 <span>Actions</span>
//             </button>
//         </div>
//         <div class="dropdown-menu" id="dropdown-menu" role="menu">
//         <div class="dropdown-content">
//                 <buttton  class="dropdown-item" >
//                     Edit
//                 </button>
//                 <a class="dropdown-item"  href={`/View/${e.name}`}>View</a>
//             </div>
//         </div>
//     </div>
