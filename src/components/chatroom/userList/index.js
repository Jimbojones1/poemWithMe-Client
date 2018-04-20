 import React from 'react';


const UserList = ({users, openChat}) => {

  const usernames = users.map((user, i) => {
    return  <li key={i} onClick={openChat}>{user}</li>
  })

  return (

        <div className="container" id="userList">
            <div className="row">
              <div  className="twelve columns">
                <header className="twelve columns UserListHeader"><h5>Poets</h5></header>
                <ul>{usernames}</ul>
              </div>
            </div>
          </div>

    )
}

export default UserList;
