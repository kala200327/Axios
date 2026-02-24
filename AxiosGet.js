import axios from 'axios';
import { useEffect, useState } from "react";

function AxiosGet() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => setUsers(res.data));
  }, []);

  return (
    <div>
      <h1 style={{margin:"10px"}}>Users List</h1>

      {users.map(user => (
        <p style={{margin:"10px"}} key={user.id}>{user.name}</p>
      ))}

    </div>
  );
}

export default AxiosGet;