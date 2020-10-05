import React from 'react';
import './Activity.css';
import { Link } from 'react-router-dom';

const Activity = ({ event }) => {

  return (
    <div>
      <div className="col-md-3">
        <Link to={'/activityRegister/' + event.event.eventTitle}>
          <div className="card" style={{ width: "15rem" }}>
            <img className="card-img-top" src={require(`../../utilities/images/${event.event.eventImage}`)} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">{event.event.eventTitle}</h5>
            </div>
          </div></Link>
      </div>
    </div>
  );
};

export default Activity;