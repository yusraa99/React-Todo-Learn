import React, { Component } from 'react'

export default class TeamMember extends Component {
  render() {
    return (
      <div className='col-md-4 col-sm-6 '>
        <div className='card'>
            <div className='card-header'>
                <img style={{maxWidth:'100%'}} src={this.props.info.img} alt={this.props.info.name}/>
            </div>

            <div className='card-body'>
                <h3>{this.props.info.name}</h3>
                <h5>{this.props.info.position}</h5>
                <div>{this.props.info.email}</div>
                <div>{this.props.info.phone}</div>
                <div>{this.props.info.website ? `${this.props.info.website}` : 'There are no website'}</div>

            </div>
        </div>
      </div>
    )
  }
}
