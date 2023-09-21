import { useState } from "react";
import LogIn from "../Login/Login";
import SignUp from "../SignUp/SignUp";
const AuthPage = () => {
    const [index, setIndex] = useState(false);
    const toggleIndex = () => {
      setIndex((prevState) => !prevState);
    };
    return (
      <div className="container">
        {!index ? <LogIn /> : <SignUp />}
        <p onClick={toggleIndex}>
          {!index ? "New user? Click here " : "Already have an acount?"}
        </p>
      </div>
    );
  };
  
  export default AuthPage;