import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import './ActivityRegister.css'


const ActivityRegister = () => {
  let history = useHistory();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const { register, handleSubmit, watch, errors } = useForm();

  const { eventTitle } = useParams();

  const onSubmit = data => {

    const selectedEvent = { ...data };
   

    fetch('https://immense-tor-77637.herokuapp.com/addUserActivity', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(selectedEvent)
    })
      .then(res => res.json())
      .then(data => {
        
        if (data) {
          history.replace("/activities");
        }
      })
  };
  return (
    <div>
      <div className="container">
        <form className="event-form" onSubmit={handleSubmit(onSubmit)}>
          <h1>Register as a volunteer</h1>

          <div className="form-group mt-2">
            <label htmlFor="firstName">Name</label>
            <input className="form-control" type="text" name="name" ref={register({ required: true })} defaultValue={loggedInUser.name} />

          </div>
          <div className="form-group">
            <label htmlFor="lastName">Eamil</label>
            <input className="form-control" type="text" name="email" ref={register({ required: true })} defaultValue={loggedInUser.email} />

          </div>
          <div className="form-group">
            <label htmlFor="email">Date</label>
            <input className="form-control" type="date" ref={register({ required: true })} name="date" />

          </div>
          <div className="form-group">
            <label htmlFor="password">Description</label>
            <input className="form-control" type="text" ref={register({ required: true })} name="description" />

          </div>
          <div className="form-group">
            <label htmlFor="password">organization books at the library</label>
            <input className="form-control" type="text" name="description" ref={register({ required: true })} defaultValue={eventTitle} />

          </div>

          <input type="submit" className='btn btn-warning signUpButton' value="Register" />

        </form>
      </div>
    </div>
  );
};

export default ActivityRegister;