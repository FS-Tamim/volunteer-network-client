import React, { useEffect, useState } from 'react';
import './Admin.css'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';

import UserActivitySingle from '../UserActivitySingle/UserActivitySingle';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


const Admin = () => {
  const classes = useStyles();


  const [userActivities, setUserActivities] = useState([]);

  useEffect(() => {
    fetch('https://immense-tor-77637.herokuapp.com/usersActivities')
      .then(res => res.json())
      .then(data => setUserActivities(data))
  }, [])

  const deleteActivity = (id) => {
    fetch(`https://immense-tor-77637.herokuapp.com/usersActivities/delete/${id}`, {
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
    <div className="adminContainer container">
      <h1 className="adminTitle">Admin panel</h1>
      <Grid container spacing={3}>

        <Grid item xs={12} sm={6} md={4}>
          <Link to='/addActivity'><Button variant="contained" color="secondary"><AddIcon></AddIcon>
        Add Event
      </Button></Link>
        </Grid>

        <Grid item xs={12} sm={6} md={8}>
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email_ID</th>
                <th scope="col">Registating Date</th>
                <th scope="col">Volunteer List</th>
                <th scope="col">Action</th>

              </tr>
            </thead>
            <tbody>
              {
                userActivities.map(userActivity => <UserActivitySingle deleteActivity={deleteActivity} userActivity={userActivity}></UserActivitySingle>)
              }
            </tbody>
          </table>
        </Grid>

      </Grid>
    </div>
  );
};

export default Admin;