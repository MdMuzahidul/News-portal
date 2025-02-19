import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/Authprovider";

const Login = () => {
  const { logIn, setUser } = useContext(AuthContext);
  const [error, setError] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log({ email, password });
    logIn(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        setError({ ...error, login: err.code });
      });
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg p-10 rounded-none shrink-0">
        <h2 className="text-center font-semibold pb-6 text-lg">
          Login your account
        </h2>
        <div className=" text-[#E7E7E7]">
          <hr />
        </div>
        <form onSubmit={handleLogIn} className="card-body">
          <div className="form-control flex flex-col">
            <label className="label">
              <span className="label-text text-lg mb-2 font-semibold">
                Email
              </span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered w-full"
              required
            />
          </div>
          {error.login && (
            <label className="label">
              <span className="label-text text-lg mb-2 font-semibold">
                {error.login}
              </span>
            </label>
          )}
          <div className="form-control flex flex-col">
            <label className="label">
              <span className="label-text text-lg mb-2 font-semibold">
                Password
              </span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none w-full">
              Login
            </button>
          </div>
        </form>
        <p className="text-center">
          Dont’t Have An Account ?
          <Link to="/auth/registation" className="text-red-500 font-semibold">
            {" "}
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
