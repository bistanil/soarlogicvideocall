import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';

// import Message from '../elements/Message';
// import Error from '../elements/Error';
import {
  COMMON_FIELDS,
  REGISTRATION_FIELDS,
  LOGIN_FIELDS,
  LOGIN_MESSAGE,
  ERROR_IN_LOGIN,
} from './MessageBundle';
import Axios from 'axios';

const Login =(props) => {
  
    const[name,setName]=useState('')
    const[password,setPassword]=useState('')
    const[error,setError]=useState(false)
    const[loginSuccess,setLoginSuccess]=useState(false)

    const handleOnChangeUserName = (value) => {
        setName(value)
    };

    const handleOnChangePassword = (value) => {
       setPassword(value)
    };

    const onSubmit = async () => {
        const data = {
            user_name: name,
            password: password,
        };
        console.log("DATA",data)
        Axios.post('http://192.168.225.127:4000/api//login', data)
		.then(res =>{
            console.log("STATUS",res)
            console.log("PROPS",props)
            props.history.push('callingScreen',{user:res.data})
        }).catch(function(error) {
            console.log("ERROR",error);
        });


        // if (loginResult !== 200) {
        //     setError(true)
        //     setLoginSuccess(false)
        // } else{
        //     setError(false)
        //     setLoginSuccess(true)
        // }
        
    };

    return (
      <div className="Login">
        <h1> {LOGIN_FIELDS.LOGIN_HEADING} </h1> {' '}
          <div>
            <div className="fields">
              <p> {COMMON_FIELDS.USER_NAME} </p>    {' '}
              <input
                type="text"
                name="Username"
                style={{color:"black"}}
                onChange={(event)=>handleOnChangeUserName(event.target.value)}
                autoComplete="Username"
                required
              />
            </div>{' '}
            {' '}
            <div className="fields">
              {' '}
              <p> {COMMON_FIELDS.PASSWORD} </p>    {' '}
              <input
                type="password"
                name="Password"
                style={{color:"black"}}
                onChange={(event)=>handleOnChangePassword(event.target.value)}
                autoComplete="Password"
                required
              />{' '}
                  {' '}
            </div>{' '}
            {' '}
            <div className="buttons">
              {' '}
              <button
                type="button"
                onClick={()=>onSubmit()}
                className="btn btn-primary"
              >
                {' '}
                  {LOGIN_FIELDS.LOGIN}    {' '}
              </button>{' '}
                  <Link to="/register">
                     {REGISTRATION_FIELDS.REGISTER} </Link>  {' '}
               {' '}
            </div>{' '}
               {' '}
          </div>{' '}
           {/* {' '}
            {loginSuccess && <Message message={LOGIN_MESSAGE} />}    {' '}
            {error && <Error message={ERROR_IN_LOGIN} />}    {' '} */}
      </div>
    );
}

export default Login