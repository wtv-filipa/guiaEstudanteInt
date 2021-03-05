import React from "react";
import { useSelector } from "react-redux";
import { selectAuthUserIsLogged } from "../store/auth/selectors";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isLogged = useSelector((state) => selectAuthUserIsLogged(state));
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogged ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/nologin",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

const ProtectedPage = ({ component: Component, ...rest }) => {
  const isLogged = useSelector((state) => selectAuthUserIsLogged(state));
  return (
    <Route
      {...rest}
      render={(props) =>
        !isLogged ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export { ProtectedRoute, ProtectedPage };
