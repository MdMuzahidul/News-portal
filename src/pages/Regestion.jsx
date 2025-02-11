import { Link } from "react-router-dom";

const Regestion = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg p-10 rounded-none shrink-0">
        <h2 className="text-center font-semibold pb-6 text-lg">
          Register your account
        </h2>
        <div className=" text-[#E7E7E7]">
          <hr />
        </div>
        <form className="card-body">
          <div className="form-control flex flex-col">
            <label className="label">
              <span className="label-text text-lg mb-2 font-semibold">
                Name
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control flex flex-col">
            <label className="label">
              <span className="label-text text-lg mb-2 font-semibold">
                Photo URL
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter your photo url"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control flex flex-col">
            <label className="label">
              <span className="label-text text-lg mb-2 font-semibold">
                Email
              </span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
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
              placeholder="Enter your password"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control mt-4">
            <label className="cursor-pointer label">
              <input type="checkbox" className="checkbox checkbox-warning" />
              <span className="label-text">Accept Term & Conditions</span>
            </label>
            <button className="btn btn-neutral rounded-none w-full mt-4">
              Register
            </button>
          </div>
        </form>
        <p className="text-center">
          Already Have An Account ?
          <Link to="/auth/login" className="text-red-500 font-semibold">
            {" "}
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Regestion;
