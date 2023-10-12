import React from 'react'
import { useSelector } from 'react-redux';

const profile = () => {
  const email= useSelector((state) => state.login.email);
  const firstName= useSelector((state) => state.login.firstName);
  const lastName= useSelector((state) => state.login.lastName);
  const username= useSelector((state) => state.login.username);
  const image= useSelector((state) => state.login.image);

  return (
    <>
      <div className="myProfile">
      <h1>User Profile</h1>
      <hr></hr>
        <p>
          <b>Email: </b> {email}
        </p>
        <p>
          <b>FirstName: </b> {firstName}
        </p>
        <p>
          <b>LastName: </b>  {lastName}
        </p>
        <p>
          <b>UserName: </b> {username}
        </p>
          <img src ={image} />
      </div>
    </>
  );
};

export default profile