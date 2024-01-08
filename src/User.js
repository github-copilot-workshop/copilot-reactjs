import React, { useEffect, useState } from 'react';
import './User.css';

function User() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');

    fetch(`https://api.github.com/users/${name}`)
      .then(response => response.json())
      .then(data => setUser(data));
  }, []);

  return (
    <div>
      {user && (
        <>
          <h2>{user.name}</h2>
          <p>{user.bio}</p>
          <img className="rounded-image" src={user.avatar_url} alt="User Avatar" />
        </>
      )}
    </div>
  );
}

export default User;