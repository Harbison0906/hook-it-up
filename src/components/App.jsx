import React, { useState, useEffect } from 'react';
// import 'isomorphic-fetch';
// import 'es6-promise';
// import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';


const App = () => {

  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    let res = await fetch('https://jsonplaceholder.typicode.com/users');
    let users = await res.json();
    setUsers(users);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container">
      <div className="row jutify-content-center">
      <h4 className="col-md-12 m-5">***User Database***</h4>
        <div className="list-item col-md-7 mx-auto">
          <ol className="">
            {users.map(user => (
              <li key={user.id} className="">{user.name}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}



export default App;