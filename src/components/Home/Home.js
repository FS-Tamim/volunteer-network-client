import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';

const Home = () => {
        const [events, setEvents] = useState([]);
        useEffect(() => {
            fetch('https://immense-tor-77637.herokuapp.com/events')
                .then(res => res.json())
                .then(data => setEvents(data))
        }, [])
      
        return ( 
        <div className = "container" >
            <div className = "row" >
                 {
                events.map(event => < Activity event = { event } key = { event._id } > </Activity>)
                } 
            </div>
         </div>
            );
        };

        export default Home;