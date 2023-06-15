import React, { Component } from 'react'
import TeamMember from './TeamMember'
// import { Row } from 'react-bootstrap'
import memberInfo from './memberInfo'

export default class Team extends Component {

    constructor() {
        super()
        this.state = { 
            memberInfo : memberInfo,
            members:[],
            counter:0,
         }
         this.clickEvent=this.clickEvent.bind(this)
      }
      clickEvent(){
        this.state.members.push(this.state.memberInfo[this.state.counter])
        this.setState(prevState=>{
            return {counter:prevState.counter+1 }
        })
        this.newMembers = this.state.members.map(member=>{
            return <TeamMember
            key={member.id}
            img={member.img}
            name={member.name}
            position={member.position}
            phone={member.phone}
            email={member.email}
            website={member.website}
        />
        })

      }
    //   mapping(x){
    //     const members = this.state.memberInfo.map(member =><TeamMember
    //         key={member.id}
    //         img={member.img}
    //         name={member.name}
    //         position={member.position}
    //         phone={member.phone}
    //         email={member.email}
    //         website={member.website}
    //     />)
    //     return members

    //   }
      
      

    render() {
         
        return (
            <div className='list-group'>
                <div className='row'>
                    <button className='btn btn-primary' onClick={this.clickEvent}>View Our Team</button>
                    {/* {this.mapping(this.state.memberInfo)} */}
                </div>
            </div >
        )
    }
}
