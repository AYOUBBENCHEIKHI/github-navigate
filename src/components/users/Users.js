import React, { useEffect, useState } from "react";
import SearchUser from "../SearchUser";
import User from "./User";
import axios from "axios";
const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("https://api.github.com/users").then((response) => {
      //console.log(response.data)
      setUsers(response.data);
    });
  }, []);
  const searchUsersFromGit=(data)=>{
    if(data !== ''){
      axios.get(`https://api.github.com/search/users?q=${data}`)
      .then(response=>{
            setUsers(response.data.items)
      })
      
    }
  }
  return (
    <div>
      <SearchUser getUserSearch={searchUsersFromGit} />
      <div className="grid grid-cols-1 tablet:grid-cols-2  laptop:grid-cols-3 gap-4 mt-3">
      {users.map((user) => (
          <User key={user.id} user={user} />
      ))}
      </div>
    </div>
  );
};

export default Users;
