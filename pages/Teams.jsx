import React, { useEffect, useState } from "react";
import axios from "axios";

const Teams = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users")
      .then((response) => {
        // The users array is located in response.data.data
        setUsers(response.data.data);
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div className="flex flex-wrap gap-4 p-4 justify-center h-full">
      {users.map((user) => (
        <div key={user.id} className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src={user.avatar}
              alt={`${user.first_name} ${user.last_name}`}
            />
          </figure>
          <div className="card-body text-center ">
            <h2 className="card-title">
              {user.first_name} {user.last_name}
            </h2>
            <p>{user.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Teams;
