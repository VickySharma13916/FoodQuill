import React, { useEffect, useState } from "react";

const User = ({ name }) => {
  const [userInfo, setUserInfo] = useState(null);
  const fetchUser = async () => {
    const data = await fetch(`https://api.github.com/users/${name}`);
    const json = await data.json();
    setUserInfo([json]);
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <>
      {userInfo &&
        userInfo?.map((item) => (
          <div className="card" key={item?.id}>
            <img src={item?.avatar_url} alt="user" loading="lazy" className="img-fluid" />
            <div
              className="card-body card-height"
              style={{ minHeight: "200px" }}
            >
              <h2>{item?.name}</h2>
              <div>
                Github Id:-
                <a style={{ textDecoration: "none" }} href={item?.html_url}>
                  {item?.html_url}
                </a>
              </div>
              <div>Followers:- {item?.followers}</div>
              <div>Following:- {item?.following}</div>
              <div>Repositories:- {item?.public_repos}</div>
            </div>
          </div>
        ))}
    </>
  );
};

export default User;
