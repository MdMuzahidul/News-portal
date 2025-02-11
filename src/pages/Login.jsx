import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg p-10 rounded-none shrink-0">
        <h2 className="text-center font-semibold pb-6 text-lg">
          Login your account
        </h2>
        <div className=" text-[#E7E7E7]">
          <hr />
        </div>
        <form className="card-body">
          <div className="form-control flex flex-col">
            <label className="label">
              <span className="label-text text-lg mb-2 font-semibold">
                Email
              </span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control flex flex-col">
            <label className="label">
              <span className="label-text text-lg mb-2 font-semibold">
                Password
              </span>
            </label>
            <input
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
