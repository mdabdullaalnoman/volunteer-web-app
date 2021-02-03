import React from 'react';
import voluntear from '../../FakeData/FakeData';
import Header from '../../Home/Header/Header';
import ListLeft from '../../RegisterLilst/listLeft/ListLeft';
import AddVoluntearRight from '../AddVoluntearRight/AddVoluntearRight';


const AddVoluntear = () => {

    // const handleAll = () => {
    //     fetch("https://guarded-cove-45357.herokuapp.com/volunteerCard", {
    //         method: "POST",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(voluntear),
    //       })     
    // }
    return (
        <div>
            <Header></Header>
            <div className="container my-2 my-md-5">
                <div className="row">
                    <div className="col-12 col-md-3"><ListLeft></ListLeft></div>
                    <div className="col-12 col-md-3"><AddVoluntearRight></AddVoluntearRight></div>
                </div>
            </div>
        </div>
    );
};

export default AddVoluntear;