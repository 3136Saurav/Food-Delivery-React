import React, { useContext, useEffect } from "react";
import UserContext from "../utils/UserContext";

const About = () => {
  const { loggedInUser, setUserName } = useContext(UserContext);

  useEffect(() => {
    setUserName("Paul");
  }, []);

  return (
    <div>
      <h1>About</h1>
    </div>
  );
};

export default About;
