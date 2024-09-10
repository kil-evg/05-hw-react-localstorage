import React from 'react'
import friend1 from '../assets/friend1.jpg'
import friend2 from '../assets/friend2.jpg'
import friend3 from '../assets/friend3.jpg'
import friend4 from '../assets/friend4.jpg'
import friend5 from '../assets/friend5.jpg'
import friend6 from '../assets/friend6.jpg'
import friend7 from '../assets/friend7.jpg'
import friend8 from '../assets/friend8.jpg'
import friend9 from '../assets/friend9.jpg'
import { friends } from '../utils/constants'
import Friend from './Friend'

const DreamTeam = () => {
    return (
        <section className="float-end w-50 row border rounded-bottom-4 mx-2">
            <h2 className="col-12 text-center">Dream Team</h2>
            {friends.map((friend, index) => <Friend key={index} pos={index + 1} picture={friend}/>)}
        </section>
    )
}

export default DreamTeam