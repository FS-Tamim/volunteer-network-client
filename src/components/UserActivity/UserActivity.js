import React from 'react';
import './UserActivity.css';

const UserActivity = (props) => {

    const { _id, description, date } = props.userActivity;


    return (<div>
        <div className="col-md-6" >

            <div className="card "
                style={
                    { width: "15rem" }} >
                <div >
                    <img className="card-img-top"
                        src={require(`../../utilities/images/${description}.png`)}
                        alt="" />
                </div>
                <div className="card-body" >
                    <h5 className="card-title" > {description} </h5> <h6 > {date} </h6> <button class="btn btn-danger"
                        onClick={
                            () => { props.deleteActivity(_id) }} > Cancel </button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default UserActivity;