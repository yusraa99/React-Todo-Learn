import React, { Component } from 'react'
import TeamMember from './TeamMember'
// import { Row } from 'react-bootstrap'


export default class Team extends Component {
    render() {
        return (
            <div className='list-group'>
                <div className='row'>
                    <TeamMember info={
                        {
                            img: 'https://picsum.photos/65',
                            name: 'Yusra',
                            position: 'Jeddah',
                            email: 'yusraalmousa@gmail.com',
                            phone: '057378649',
                            website: 'www.yusra.com',
                        }
                    } />

                    <TeamMember info={
                        {
                            img: 'https://picsum.photos/64',
                            name: 'Dania',
                            position: 'Jeddah',
                            email: 'dainaalmousa@gmail.com',
                            phone: '057378649',
                            // website: 'www.dania.com',
                        }
                    } />

                    <TeamMember info={
                        {
                            img: 'https://picsum.photos/63',
                            name: 'Sarah',
                            position: 'Jeddah',
                            email: 'sarah@gmail.com',
                            phone: '057378649',
                            website: 'www.sarah.com',
                        }
                    } />
                </div>
            </div >
        )
    }
}
