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
          <div className="border rounded p-4" key={item?.id}>
            <img
              src={item?.avatar_url}
              alt="user"
              loading="lazy"
              className="rounded"
            />
            <div className="h-36">
              <h2 className="font-semibold text-2xl">{item?.name}</h2>
              <div>
                Github Id:-
                <a className="no-underline" href={item?.html_url}>
                  <span className="text-blue-600 font-medium">
                    {item?.html_url}
                  </span>
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
