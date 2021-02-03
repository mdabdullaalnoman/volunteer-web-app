import React from 'react';
import './ListLeft.css';
// import {AiOutlineUserAdd} from 'react-icons/fa';
import { FiUsers } from "@react-icons/all-files/fi/FiUsers";
import { GrAdd } from "@react-icons/all-files/gr/GrAdd";
import { Link } from 'react-router-dom';
const ListLeft = () => {
    return (
        <div>
            <div className="registered-img">
                <img src="https://i.imgur.com/OR2myly.png" alt="" />
                <div className="side-manu">
                    <p> <FiUsers /> Volunteer Register List</p>   
                    <Link to="/addVoluntear"><p> <GrAdd /> Add Volunteer</p></Link>
                </div>
            </div>
        </div>
    );
};

export default ListLeft;