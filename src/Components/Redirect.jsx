import React, { useEffect } from 'react';
import { useHistory } from 'react-router'

const RedirectComponent = () => {
  const history = useHistory();

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      history.push('/Bar'); // Replace '/another-route' with your desired route path
    }, 8000); // 8000 milliseconds = 8 seconds

    return () => {
      clearTimeout(redirectTimeout);
    };
  }, [history]);

  return (
    <div>
      <h1>Redirecting...</h1>
    </div>
  );
};

export default RedirectComponent;
