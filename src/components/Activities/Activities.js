import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import UserActivity from '../UserActivity/UserActivity';

const Activities = () => {

    const [userActivities, setUserActivities] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(() => {
        fetch('https://immense-tor-77637.herokuapp.com/activities?email=' + loggedInUser.email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setUserActivities(data))
    }, [])
    const deleteActivity = (id) => {
        fetch(`https://immense-tor-77637.herokuapp.com/activities/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    const remainingActivities = userActivities.filter(activity => activity._id !== id);
                    setUserActivities(remainingActivities);
                }
            })
    }
    return (

        <div className="container">
            <h1>You have {userActivities.length} activities in upcoming days</h1>
            <div className="row">

                {
                    userActivities.map(userActivity => <UserActivity deleteActivity={deleteActivity} userActivity={userActivity}></UserActivity>)
                }
            </div>
        </div>

    );
};

export default Activities;