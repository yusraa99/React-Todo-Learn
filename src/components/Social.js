import React, { Component } from 'react'

export default class Social extends Component {
  render() {
    return (
      <div>
        <ul className='list-group'>
            <li className='list-group-item'>
                <input type='checkbox' id='facebook'/>
                <label for='facebook'>Facebook</label>
            </li>

            <li className='list-group-item'>
                <input type='checkbox' id='snapchat'/>
                <label for='snapchat'>Snapchat</label>
            </li>

            <li className='list-group-item'>
                <input type='checkbox' id='instagram'/>
                <label for='instagram'>Instagram</label>
            </li>
        </ul>
      </div>
    )
  }
}
