import React, { useState } from 'react';
import axios from 'axios';

function AxiosPost() {
  const [name, setName] = useState('');

  const handleSubmit = () => {
    axios.post('https://jsonplaceholder.typicode.com/users', {
      name: name
    })
    .then(res => {
      alert('User Added');
      console.log(res.data);
    });
  };

  return (
    <div>
       <h1>Add User</h1>
      <input
        type="text"
        placeholder="Enter name"
        onChange={e => setName(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default AxiosPost;
