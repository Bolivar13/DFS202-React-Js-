import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <>
      <h1>THis page does not exist</h1>
      <Link to="/">Go To Home Page</Link>
    </>
  );
}

export default PageNotFound;
