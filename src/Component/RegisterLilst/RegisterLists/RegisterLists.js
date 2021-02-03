import React, { useEffect, useState } from 'react';
import ListLeft from '../listLeft/ListLeft';
import './Registerlist.css';
import { MdDelete } from "@react-icons/all-files/md/MdDelete";
import { useHistory } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import Header from '../../Home/Header/Header';


const RegisterLists = () => {

    const deleteItem = useHistory();
    const handleDelete = (id) => {
        console.log(id);
        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert('Delete Successfully')
                    deleteItem.go(0);
                }
            });
    };

    const [allVolunteer, setAllVolunteer] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allVolunteers')
            .then(result => result.json())
            .then(data => setAllVolunteer(data))
    }, [allVolunteer._id]);

    return (
        <div>
            <Header></Header>
            <div className="mx-5 mt-5">
                <div className="row">
                    <div className="col-12 col-md-3"><ListLeft></ListLeft></div>
                    <div className="col-12 col-md-9">
                        <div className="list-tittle"  >
                            <h3>Volunteer Register list</h3>
                            <div className="cai-bg warper ">
                                <div className="warper-bottom">
                                    <table className="table">
                                        <thead>
                                            <th>name</th>
                                            <th>Email Id</th>
                                            <th> Register Date</th>
                                            <th>Volunteer list</th>
                                            <th>Action</th>
                                        </thead>
                                        <tbody>
                                            {
                                                allVolunteer.length === 0 && <p className="text-center mt-5"><Spinner animation="grow" variant="danger" /></p>
                                            }
                                            {
                                                allVolunteer.map(data => (
                                                    <tr>
                                                        <td data-label="Name"> {data.userName}</td>
                                                        <td data-label="Email Id"> {data.inputEmail}</td>
                                                        <td data-label="Register Date"> {data.date}</td>
                                                        <td data-label="Volunteer List"> {data.volName}</td>
                                                        <td data-label="Action"><button onClick={() => handleDelete(data._id)} className="deleteIcon"><MdDelete /></button></td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterLists;