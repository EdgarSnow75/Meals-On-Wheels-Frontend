import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PathError = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/error", { replace: true });
  }, [navigate]);
  return (
    <div>
      <div>
        <p>There is no path for that URL!</p>
      </div>
    </div>
  );
};
export default PathError;
