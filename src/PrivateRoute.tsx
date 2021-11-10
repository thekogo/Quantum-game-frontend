import React, { useEffect, useState } from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { getUser } from "./services/auth";

interface Props extends RouteProps {
  component: any;
}

const PrivateRoute: React.FC<Props> = (props) => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { component: Component, ...rest } = props;

  useEffect(() => {
    const fetchData = async () => {
      const userData = await getUser();
      console.log("user Data", userData);
      setUser(userData);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoading ? null : user ? (
          <Component user={user} />
        ) : (
          <Redirect to={{ pathname: "/login" }} />
        )
      }
    />
  );
};
export default PrivateRoute;
