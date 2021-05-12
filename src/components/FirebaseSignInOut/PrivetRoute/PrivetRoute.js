import React ,{useAuth, useContext} from 'react';
import { Redirect, Route } from 'react-router';
import { UserContext } from '../../../App';

const PrivetRoute = ({children, ...rest}) => {
   const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <Route
      {...rest}
      render={({ location }) =>
        loggedInUser.email || loggedInUser.name ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
        </div>
    );
};

export default PrivetRoute;