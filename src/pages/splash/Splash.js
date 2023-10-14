import React, { useState } from "react";
import "./Splash.css";
import { Navigate } from "react-router";

function AnimatedSplash(props) {
  return (
    <div className="logo_wrapper">
      <div className="loading">
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
      </div>
    </div>
  );
}

function Splash(props) {
  const [redirect, setRedirect] = useState(false);
  setTimeout(() => setRedirect(true), 2000);

  return redirect ? <Navigate to="/home" /> : <AnimatedSplash theme={props.theme} />;
}

export default Splash;

// export const Splash = (props) => {
//   return(
//     <p>hii</p>
//   )
// };
