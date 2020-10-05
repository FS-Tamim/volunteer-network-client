import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

const UserActivitySingle = (props) => {
    const {_id,name,email,date,description}=props.userActivity;
    return (
        
             <tr>
      
    <td>{name}</td>
    <td>{email}</td>
    <td>{date}</td>
    <td>{description}</td>
    <td style={{color:"red"}} ><DeleteIcon onClick={()=>{props.deleteActivity(_id)}} >    </DeleteIcon></td>
    </tr>
    
    );
};

export default UserActivitySingle;