import React, { useState, useEffect } from 'react';

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
    <main>
        <h4>{user.name}</h4>
        <> 
            <h2>Email: {user.email}</h2>
        </>

      </main>
  )
}

export default User;
