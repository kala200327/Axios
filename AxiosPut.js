import React, { useState } from 'react';
import axios from 'axios';

function AxiosPost() {
  const [name, setName] = useState('');

  const handleSubmit = () => {
    axios.put('https://jsonplaceholder.typicode.com/users/1', {
  name: 'Updated Name'
    })

    .then(res => {
      alert('User Updated');
      console.log(res.data);
    });
  };

  return (
    <div>
       <h1>Update User</h1>
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
