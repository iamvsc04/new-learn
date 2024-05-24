import { Link, useNavigate } from "react-router-dom";
function Register() {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/login");
  };
  return (
    <form className="register space">
      <div className="reg-box">
        <h1 className="regHead">Registration Page</h1>
        <div className="inp-box">
          <input
            type="text"
            placeholder="Enter user name"
            className="reg uname"
          />
          <input
            type="text"
            placeholder="Enter your email address"
            className=" reg umail"
          />
          <input
            type="password"
            placeholder="Enter password"
            className="reg upass"
          />
          <input
            type="password"
            placeholder="Re-Enter password"
            className="reg urepass"
          />
        </div>
        <div className="button-box">
          <button
            type="submit"
            className="regRegisterBtn"
            onClick={handleSubmit}
          >
            Sign Up
          </button>
          <p className="bridge">
            Already have an account?
            <Link to="/login" className="loginPara">
              Login
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
}
export default Register;
