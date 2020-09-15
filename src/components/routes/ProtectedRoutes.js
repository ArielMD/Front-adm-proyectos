import React, { useContext, useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import authContext from "../../context/auth/authContext";

const ProtectedRoute = ({ component: Component, ...props }) => {
  const { auth, authenticatedUser, loading } = useContext(authContext);

  useEffect(() => {
    authenticatedUser();
  }, []);

  return (
    <Route
      {...props}
      render={(props) =>
        !auth ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

export default ProtectedRoute;
