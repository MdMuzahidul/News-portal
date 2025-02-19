import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/Authprovider";

const Regestion = () => {
  const { createNewUser, setUser, updateProfile } = useContext(AuthContext);
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const handleSubmite = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    if (name.length < 5) {
      setError({ ...error, name: "name must be more the 5 charater" });
      return;
    }
    const photo = formData.get("photo-url");
    const email = formData.get("email");
    const password = formData.get("password");
    console.log({ name, photo, email, password });
    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        updateProfile({ displayName: name, photoURL: photo })
          .then(() => {
            navigate("/");
          })
          .catch((err) => {
            alert(err.message);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg p-10 rounded-none shrink-0">
        <h2 className="text-center font-semibold pb-6 text-lg">
          Register your account
        </h2>
        <div className=" text-[#E7E7E7]">
          <hr />
        </div>
        <form onSubmit={handleSubmite} className="card-body">
          <div className="form-control flex flex-col">
            <label className="label">
              <span className="label-text text-lg mb-2 font-semibold">
                Name
              </span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full"
              required
            />
          </div>
          {error.name && (
            <label className="label">
              <span className="label-text text-lg mb-2 font-semibold">
                {error.name}
              </span>
            </label>
          )}
          <div className="form-control flex flex-col">
            <label className="label">
              <span className="label-text text-lg mb-2 font-semibold">
                Photo URL
              </span>
            </label>
            <input
              type="text"
              name="photo-url"
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
              name="email"
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
              name="password"
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
              required
              pattern=".{6,}" // Pattern to ensure at least 6 characters
              title="Password must be at least 6 characters long"
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
