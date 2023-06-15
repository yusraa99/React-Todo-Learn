import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    
    const client="Coding";
    // const title_program="Programming"
    // const title_design="Designing"
    const title={
      coding:"Programming",
      design:"Designing"
    }
    return (
      <div className='navbar bg-dark rounded'>
        <h2 className='text-white '>{client === "Coding" ? title.coding : title.design}</h2>
      </div>
    )
  }
}
