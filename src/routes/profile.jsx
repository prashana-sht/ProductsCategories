import React from 'react'
import { useEffect, useState } from "react";

const profile = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    fetch("https://dummyjson.com/users/1")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUser(data);
      });
  }, []);
  return (
    <>
      <div className="myProfile">
      <h1>User Information</h1>
      <hr></hr>
        <p>
          <b>ID: </b> {user.id}
        </p>
        <p>
          <b>FirstName: </b> {user.firstName}
        </p>
        <p>
          <b>LastName: </b>  {user.lastName}
        </p>
        <p>
          <b>MaidenName: </b> {user.maidenName}
        </p>
        <p>
          <b>Age: </b> {user.age}
        </p>
        <p>
          <b>Gender:</b> {user.gender}
        </p>
        <p>
          <b>Email: </b> {user.email}
        </p>
        <p>
          <b>Phone No:</b> {user.phone}
        </p>
        <p>
          <b>UserName: </b> {user.username}
        </p>
          <img src ={user.image} />
      </div>
    </>
  );
};

export default profile