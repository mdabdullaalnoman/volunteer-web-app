import React, { useContext, useEffect, useState } from 'react';
import './CardSection.css';
import randomColor from 'randomcolor';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import { Spinner } from 'react-bootstrap';




const CardSection = () => {
    const [volunteer, setVolunteer] = useState([]);
    const { singleInfo } = useContext(UserContext);
    const [singleVolunteer, setSingleVolunteer] = singleInfo;
    const [loading, setLodding] = useState(true);


    useEffect(() => {
        fetch('https://guarded-cove-45357.herokuapp.com/volunteerCards')
            .then(res => res.json())
            .then(data => setVolunteer(data))
            setLodding(false);
    }, []);

    const handleSingleVolunteer = (data) => {
        setSingleVolunteer(data);
    };

    return (

        <div className="container">
           {
               volunteer.length === 0 && <p className=" text-center mt-5" > <Spinner animation="border" variant="danger" /></p>
           }
            <div className="row">
                {loading ? <p>loading</p> :
                    volunteer.map(data => (
                        <div key={data._id} className="card-containers">
                            <Link to={'/mainRegister'}>
                                <div className="cards" >
                                    <img onClick={() => handleSingleVolunteer(data)} className="img-style" src={data.img} alt="card-image" />
                                    <div className="paragraph">
                                        <p style={{ background: randomColor() }}>{data.volName}</p>
                                    </div>
                                </div>

                            </Link>
                        </div>
                    )) 
                }
            </div>

        </div>

    );
};

export default CardSection;