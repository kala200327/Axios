import React from "react";
import axios from "axios";

function AxiosDelete() {

  const handleDelete = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/1`)
      .then(res => {
        alert("User Deleted");
        console.log(res.data);
      });
  };

  return (
    <div>
      <h1>Delete User</h1>

      <button onClick={() => handleDelete(1)}>
        Delete User 1
      </button>
    </div>
  );
}

export default AxiosDelete;