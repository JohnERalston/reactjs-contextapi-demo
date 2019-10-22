import React, { useContext } from "react";
import { UserContext } from "../Context";

function UserInfo() {
  const userName = useContext(UserContext).name;

  return (
    <div>
      <div className="card text-white bg-primary mb-3">
        <div className="card-header">Stateless Context</div>
        <div className="card-body">

          <div className="lvp">
            <div className="card-title">Name</div>
            <div className="card-text">{userName}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
