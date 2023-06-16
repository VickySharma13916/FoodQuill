import React, { useEffect, useState } from "react";

const User = ({ name, address }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("useeffect called");
  }, []);
  return (
    <>
      <h2>{name}</h2>
      <h3>Profession:- Software Engineer</h3>
      <h3>Contact:- 7678410858</h3>
      <h3>Email Id:- VickySharma13916@gmail.com</h3>
      <h3>Address:- {address}</h3>
      <h3>Count :- {count}</h3>
      <button onClick={() => setCount(count + 1)}>Update count</button>
    </>
  );
};

export default User;
