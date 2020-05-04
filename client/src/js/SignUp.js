import React, {Component, useState} from 'react';
import {Link} from 'react-router-dom';
// import classNames from 'classnames';
// import {
//   UserRegistration,
//   UsernameValidation,
// } from '../services/RegistrationService';
// import Message from '../elements/Message';
// import Error from '../elements/Error';
import {
  REGISTRATION_FIELDS,
  REGISTRATION_MESSAGE,
  COMMON_FIELDS,
  ERROR_IN_REGISTRATION,
} from './MessageBundle';
import Axios from 'axios';

const Signup = (props)=> {

    const[fName,setFName]=useState('')
    const[lName,setLName]=useState('')
    const[uName,setUName]=useState('')
    const[password,setPassword]=useState('')
    const[error,setError]=useState(false)
    const[register,setRegister]=useState(false)

    const handleOnChangeFirstName = (value) => {
        console.log("EVENT",value)
        setFName(value)
    };

    const handleOnChangeLastName = (value) => {
        setLName(value)
    };

    const handleOnChangeUserName = (value) => {
        setUName(value)
    };

    const handleOnChangePassword = (value) => {
        setPassword(value)
    };

    const onSubmit = async () => {
        // e.preventDefault ();
        const data = {
        first_name: fName,
        last_name: lName,
        user_name: uName,
        password: password,
        };
        console.log("DATA",data)
        Axios.post('http://192.168.225.127:4000/api/register', data)
        .then(res => {
            console.log("STATUS",res)
            
        }).catch(function(error) {
            console.log("ERROR",error);
        });
    };
        
        


    return(
        <div>
          <h1> {REGISTRATION_FIELDS.REGISTRATION_HEADING} </h1> 
            <div>
              <div className="fields">
                <p > {REGISTRATION_FIELDS.FIRST_NAME} </p>
                <input
                style={{color:"black"}}
                  type="text"
                  value={fName}
                  name="FirstName"
                  onChange={(event)=>handleOnChangeFirstName(event.target.value)}
                />
              </div> <div className="fields">
                <p> {REGISTRATION_FIELDS.LAST_NAME} </p>
               
                <input
                  type="text"
                  style={{color:"black"}}
                  value={lName}
                  name="LastName"
                  onChange={(event)=>handleOnChangeLastName(event.target.value)}
                />
              </div> <div className="fields">
                <p> {COMMON_FIELDS.USER_NAME} </p>
               
                <input
                  type="text"
                  value={uName}
                  style={{color:"black"}}
                  name="Username"
                  onChange={(event)=>handleOnChangeUserName(event.target.value)}
                  autoComplete="Username"
                  required
                />
              </div> <div className="fields">
                <p> {COMMON_FIELDS.PASSWORD} </p>
               
                <input
                  type="password"
                  value={password}
                  style={{color:"black"}}
                  name="Password"
                  onChange={(event)=>handleOnChangePassword(event.target.value)}
                  autoComplete="password"
                  required
                />
              </div> <div className="buttons">
                <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={()=>onSubmit()}
                >
                  {REGISTRATION_FIELDS.REGISTER}
                </button>
                <Link to="/login"></Link>
              </div>
            </div>
         
        </div>
      );
}

export default Signup
