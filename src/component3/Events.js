import React, { Component } from 'react'

export default class Events extends Component {
    constructor(){
        super();
        this.state={
            number : 0
        }
        this.eventHandler=this.eventHandler.bind(this)
    }

    eventHandler(){
        this.setState(prevstate =>{
                return{
                    number: prevstate.number+1
                }
            }
       )
    }
  render() {
    return (
      <div>
        <h1>{this.state.number}</h1>
        <button className='btn btn-primary' onClick={this.eventHandler}>Click ME !!</button>
      </div>
    )
  }
}
