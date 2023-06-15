import React, { Component } from 'react'

export default class TeamMember extends Component {

  
  render() {
    return (
      <div className='col-md-4 col-sm-6 '>
        <div className='card'>
          <div className='card-header'>
            <img style={{ maxWidth: '100%' }} src={this.props.img} alt={this.props.name} />
          </div>

          <div className='card-body'>
            <h3>{this.props.name}</h3>
            <h5>{this.props.position}</h5>
            <div>{this.props.email}</div>
            <div>{this.props.phone}</div>
            <div>{this.props.website ? `${this.props.website}` : 'There are no website'}</div>

          </div>
        </div>
      </div>
    )
  }
}
