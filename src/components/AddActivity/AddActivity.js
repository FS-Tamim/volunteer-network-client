import React, { useContext } from 'react';
import './AddActivity.css'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link, useHistory } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';



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
  

const AddActivity = () => {
    const classes = useStyles();
    let history = useHistory();
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const onSubmit = data => {
        
        const eventDetails = {event:data};
  
        fetch('https://immense-tor-77637.herokuapp.com/addActivity', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(eventDetails)
        })
        .then(res => res.json())
        .then(data => {
           
          if(data){
            history.replace("/home");
          }
        })
      };
    return (
        <div className="addActivityContainer container">
        <Grid container spacing={3}>
      
      <Grid item xs={12} sm={6} md={5}>
      <Link to='/admin'><Button variant="contained" color="secondary"><PeopleOutlineIcon></PeopleOutlineIcon>
      Registerd Member
    </Button></Link>
      </Grid>
      
      <Grid item xs={12} sm={6} md={7}>
      <form className="event-form" onSubmit={handleSubmit(onSubmit)}>
                             <h1 className="mb-3">Add Activity</h1>
                            <label htmlFor="eventTitle">Event Title</label><br></br>
                            <input className="form-control" name="eventTitle" id="eventTitle" ref={register({ required: true })} />
                            {errors.name && <span className="error">Field is required</span>}
                           
                            <label htmlFor="eventDescription">Event Description</label><br></br>

                            <textarea className="form-control" name="eventDescription" id="eventDescription" ref={register({ required: true })} ></textarea>
                            {errors.email && <span className="error">Field is required</span>}
                            
                            <label htmlFor="eventDate">Event Date</label><br></br>
                            <input className="form-control" name="eventDate" id="eventDate" type="date" ref={register({ required: true })}/>
                            {errors.address && <span className="error">Field is required</span>}
                            
                            <label htmlFor="evenImage">Event Image</label><br></br>
                            <input className="form-control" name="eventImage" id="eventImage"  ref={register({ required: true })}/>
                            {errors.address && <span className="error">Field is required</span>}
                      
                            <input  className="btn btn-primary mt-3" type="submit" />
                        </form>
      </Grid>
      </Grid>
     </div>
    );
};

export default AddActivity;