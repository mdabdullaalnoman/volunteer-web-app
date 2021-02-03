import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './AddVoluntearRight.css';

const AddVoluntearRight = () => {
    // const {logInfo} = useContext(UserContext);
    // const [loggedInUser , setLoggedInUser ] = logInfo;
  
    const history = useHistory();
    const [data , setData] = useState({});
    console.log(data);

    const handleSubmits = (e) => {
        fetch("http://localhost:5000/volunteerCards", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {

            });
        alert("data submited");
    }

    const handleChanges = (e) => {
        const newUserInfos = {...data};
        console.log(newUserInfos);
        newUserInfos[e.target.name] = e.target.value;
        setData(newUserInfos);
    };

    return (
        <div>
            <form action="" onSubmit={handleSubmits} className="add">
                <input onChange={handleChanges} name="id" type="text" placeholder="id" /><br /><br />
                <input onChange={handleChanges} name="volName" type="text" placeholder="vol name" /><br /><br />
                <input onChange={handleChanges} name="img" type="text" placeholder="image" /><br /><br />
                {/* <input type="file" /><br/><br/> */}
                <input type="submit" placeholder="event tittle" />
            </form>
        </div>
    );
};

export default AddVoluntearRight;