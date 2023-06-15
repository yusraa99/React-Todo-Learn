import React, { Component } from 'react'

export default class SocialItem extends Component {
  render() {
    return (
      <div>
        <li className='list-group-item'>
            <img src={this.props.p.img} alt={`icon of ${this.props.p.media}`} />
                <input type='checkbox' id={this.props.p.id}/>
                <label htmlFor={this.props.p.id}>{this.props.p.media}</label>
            </li>
      </div>
    )
  }
}
