import React from "react";
import { Route, Navigate, RouteProps } from "react-router-dom";
import Home from "../pages/home";
import LoginPin from "../pages/loginPin";


interface PrivateRouteProps extends RouteProps {
  isAuthenticated: boolean;
  component: React.ComponentType<any>;
  path: string;
  exact?: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  isAuthenticated,
  component: Component,
  path: path,
  exact: exact,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props: any) =>
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Navigate to={{ pathname: "/login", state: { from: props.location } }} />
      )
    }
  />
);

interface PublicRouteProps extends RouteProps {
  isAuthenticated: boolean;
  component: React.ComponentType<any>;
  path: string;
  exact?: boolean;
}

const PublicRoute: React.FC<PublicRouteProps> = ({
  isAuthenticated,
  component: Component,
  path: path,
  exact: exact,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props:any) =>
      isAuthenticated ? <Navigate to="/" /> : <Component {...props} />
    }
  />
);

export const Routes = ({ isAuthenticated }: { isAuthenticated: boolean }) => (
  <>
    <PublicRoute
      path="/"
      component={Home}
      isAuthenticated={isAuthenticated}
      exact
    />
    <PrivateRoute
      path="/dashboard"
      component={LoginPin}
      isAuthenticated={isAuthenticated}
      exact
    />
  </>
);
