import React from 'react';
import {
  RouteProps as ReactRouteProps,
  Route as ReactRoute,
  Redirect,
} from 'react-router-dom';
import { auth } from 'firebase';

interface RouteProps extends ReactRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  return (
    <ReactRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!auth().currentUser?.uid ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/cliente',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
