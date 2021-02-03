import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { SingleData, UserContext } from '../../../App';
import './MainRegister.css';

const MainRegister = () => {
    const { logInfo, singleInfo } = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = logInfo;
    const [singleVolunteer, setSingleVolunteer] = singleInfo;
    const [selectedData , setSelectedData] = useState({});
    const { name, email } = loggedInUser;
    const history = useHistory();
    
    const handleSubmit = (e) => {
        fetch("https://guarded-cove-45357.herokuapp.com/addBooking", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(selectedData),
        })
          .then((res) => res.json())
          .then((data) => {
            
          });
          alert("data submited");
          history.push('/addedService')
          e.preventDefault();
    }

    const handleChange = (e) => {
        const newUserInfo = { ...loggedInUser, ...selectedData, ...singleVolunteer };
        newUserInfo[e.target.name] = e.target.value;
        setSelectedData(newUserInfo);
      };

    
    return (
        <div className="cai-bg">
            <div className="full-form ">
                <div className="register-img">
                    <img src="https://i.imgur.com/OR2myly.png" alt="icon" />
                </div>
                <div className="register-content">
                    < form action="" onSubmit={handleSubmit} className="register-form">
                        <label>Register as a voluntear</label> 
                        <input onBlur={handleChange} name="userName" type="text" defaultValue={name} required placeholder="name" />
                        <input onBlur={handleChange} name="inputEmail" type="text" defaultValue={email} required placeholder="email" />
                        <input onBlur={handleChange} name="date" type="date"  required placeholder="dd/mm/yyyy" />
                        <input onBlur={handleChange} name="description" type="text" required placeholder="description" />
                        <input onBlur={handleChange} name="organiaze" defaultValue={singleVolunteer?.volName}  type="text" required placeholder="organaize book at the libriy" /><br /><br />
                        <input type="submit" value="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MainRegister;

 // const [inputValue, setInputValue] = useState({
    //     userName: "",
    //     email: "",
    //     date: "",
    //     description: "",
    //     organiaze: ""
    // });
    // console.log(inputValue);

    // const handleInputValue = (e) => {
    //     const value = e.target.value;
    //     const inputName = e.target.name;

    //     setInputValue((previous) => {
    //         if (inputName === "userName") {
    //             return {
    //                 userName: value,
    //                 email: previous.email,
    //                 date: previous.date,
    //                 description: previous.description,
    //                 organiaze: previous.organiaze
    //             };
    //         }
    //         if (inputName === "email") {
    //             return {
    //                 userName:previous.userName, 
    //                 email: value ,
    //                 date: previous.date,
    //                 description: previous.description,
    //                 organiaze: previous.organiaze
    //             };
    //         }
    //         if (inputName === "date") {
    //             return {
    //                 userName: previous.userName,
    //                 email: previous.email,
    //                 date: value,
    //                 description: previous.description,
    //                 organiaze: previous.organiaze
    //             };
    //         }
    //         if (inputName === "description") {
    //             return {
    //                 userName: previous.userName,
    //                 email: previous.email,
    //                 date: previous.date,
    //                 description: value,
    //                 organiaze: previous.organiaze
    //             };
    //         }
    //         if (inputName === "organiaze") {
    //             return {
    //                 userName: previous.userName,
    //                 email: previous.email,
    //                 date: previous.date,
    //                 description: previous.description,
    //                 organiaze: value
    //             };
    //         }
           
    //     });
    // };

    // const handleSubmitFrom = (e) => {
    //     e.preventDefault();
    //     alert('success')
    // }