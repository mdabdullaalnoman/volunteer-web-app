import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import './AddedServiceCard.css';

const AddedServiceCard = () => {
    const { logInfo } = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = logInfo;
    const [email, setEmail] = useState(loggedInUser.email);
    const [addedService, setAddedService] = useState([]);

    useEffect(() => {
        if (email) {
            fetch('https://guarded-cove-45357.herokuapp.com/singleVolunteer?email=' + email)
                .then(result => result.json())
                .then(data => setAddedService(data))
        }
    }, [email]);

    useEffect(() => {
        const email = JSON.parse(sessionStorage.getItem('info'));
        setEmail(email);
    }, []);

    const handleDelete = (id) => {
        console.log(id);
        fetch(`https://guarded-cove-45357.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert('Delete Successfully')
                }
            });
    };
    return (
        <div>
            <div className="container">
                <h4 className="text-center my-3">YOUR ADDED SERVICE</h4>
                <div className="row">
                    {
                        addedService.map(data => (
                            <div className="col-12 col-md-6" key={data.volName}>
                                <div className="row align-items-center singleCards">
                                    <div className=" col-4 singleCardImage ">
                                        <img src={data.img} alt="img" />
                                    </div>
                                    <div className=" col-8 single-card-description">
                                        <h6>{data.volName}</h6>
                                        <p>{data.date}</p>
                                        <button onClick={() => handleDelete(data._id)} className="btn btn-outline-dark">Cancel</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default AddedServiceCard;