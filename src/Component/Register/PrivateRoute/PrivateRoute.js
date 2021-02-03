import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../../App';


const PrivateRoute = ({ children, ...rest }) => {
    const {logInfo} = useContext(UserContext);
    const [loggedInUser,setLoggedInUser] = logInfo;
    const getEmail = JSON.parse(sessionStorage.getItem('info'));


    return (
        <Route
            {...rest}
            render={({ location }) =>
                loggedInUser.email || getEmail ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
};

export default PrivateRoute;