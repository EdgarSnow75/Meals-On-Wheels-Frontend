const UserLogin = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="text-center">
          <h2 className="text-6xl my-4">Login In</h2>
        </div>
        <div className="rounded-md w-[30rem] shadow-md p-10 pt-6 my-4 ring-[0.5px] ring-[rgba(0,0,0,0.2) bg-accent text-white">
          <h3 className="text-center mb-4 text-xl">
            Login using your existing account
          </h3>
          <form>
            <div className="flex flex-col mb-4">
              <label className="mr-4">Your Email</label>
              <input
                type="email"
                name="email"
                className="w-90 input"
                placeholder="Email"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="mr-4">Password</label>
              <input
                type="password"
                name="password"
                className="w-90 input"
                placeholder="Password"
                required
              />
            </div>
            <div className="flex justify-center items-center">
              <button type="submit" className="btn w-32 btn-primary mt-6">
                Login
              </button>
            </div>
            <div>
              <a
                onClick={() => handleLink("/forgetPassword")}
                className="link link-primary ml-1"
              >
                Forgot your password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
