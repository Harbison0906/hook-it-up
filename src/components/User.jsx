import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

const User = (props) => {

  const [user, setUser] = useState('');


  const getUser = async () => {
    let res = await fetch('https://jsonplaceholder.typicode.com/users/' + props.match.params.id);
    let user = await res.json();
    setUser(user);
  }
  
  useEffect(() => {
    getUser();
  }, []);


  return (
    <main className="m-5">
        <h4>{user.name}</h4>
        <ul>
          <li>Username: {user.username}</li>
          <li>Email: {user.email}</li>
          <li>ADDRESS:</li>
          {user.address && <p>{user.address.street}</p>}
          {user.address && <p>{user.address.suite}</p>}
          {user.address && <p>{user.address.city}</p>}
          {user.address && <p>{user.address.zipcode}</p>}
          {user.address && user.address.geo && <p>{user.address.geo.lat}</p>}
          {user.address && user.address.geo && <p>{user.address.geo.lng}</p>}

          <li>Phone: {user.phone}</li>
          <li>Website: {user.website}</li>
          <li>Company:</li>
          {user.company && <p>{user.company.name}</p>}
          {user.company && <p>{user.company.catchPhrase}</p>}
          {user.company && <p>{user.company.bs}</p>}

        </ul>
       <Link to="/">
       <button>Back to User Database</button>
       </Link>

      </main>
  )
}

export default User;
