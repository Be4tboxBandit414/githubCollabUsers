import React from "react";
import UserCard from "./UserCard";
function Landing(props) {
  const { data } = props;
  return (
    <>
      <ul type="none">
        {data.map((user) => (
          <UserCard
            userId={user.id}
            avatar={user.avatar_url}
            login={user.login}
            contributions={user.contributions}
            key={user.id}
          />
        ))}
      </ul>
    </>
  );
}

export default Landing;
