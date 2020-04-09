import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



const Home = () => {

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
          <h4 className="col-md-12 m-5 text-center">***User Database***</h4>
          <div className="list-item col-md-7 mx-auto">
            <ol>
              {users.map(user => (
                <>
                <li key={user.id} className="">{user.name}</li>
                <Link to={`/users/${user.id}`}>
                  <button>User Info</button>
                </Link>
                </>
              ))}
            </ol>
          </div>
        </div>
      </div>
    );
  

  
}



export default Home;