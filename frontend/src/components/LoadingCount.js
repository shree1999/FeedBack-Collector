import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export const LoadingCount = () => {
  const [count, setCount] = useState(10);

  const history = useHistory();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevState) => --prevState);
    }, 1000);

    if (count === 0) {
      history.push("/");
    }

    return () => clearInterval(interval);
  }, [count, history]);

  return (
    <div className="container p-5 text-center">
      <p className="lead">You will be redirected in {count}</p>
    </div>
  );
};
