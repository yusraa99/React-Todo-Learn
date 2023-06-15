import React, { Component } from 'react'
import SocialItem from './SocialItem'
export default class Social extends Component {
  render() {
    return (
      <div>
        <ul className='list-group'>

          <SocialItem
            p={{
              media: 'Facebook',
              id: 'facebook',
              img: 'https://picsum.photos/60'
            }}
          />
          <SocialItem
            p={{
              media: 'Snapchat',
              id: 'snapchat',
              img: 'https://picsum.photos/61'
            }}
          />
          <SocialItem
            p={{
              media: 'Instagram',
              id: 'instagram',
              img: 'https://picsum.photos/62'
            }}
          />

        </ul>
      </div>
    )
  }
}
