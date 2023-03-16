const UserLogin = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="text-center">
          <h2>Login In</h2>
          <p>Login into our site your email and password!</p>
        </div>
        <div className="rounded-md w-[30rem] shadow-md p-10 pt-2 my-4 ring-[0.5px] ring-[rgba(0,0,0,0.2) bg-accent">
          <h3 className="text-center">Login using your existing account</h3>
          <form>
            <div className="flex flex-col">
              <label className="mr-4">Your Email</label>
              <input
                type="email"
                name="email"
                className="w-90"
                placeholder="Email"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="mr-4">Password</label>
              <input
                type="password"
                name="password"
                className="w-90"
                placeholder="Password"
                required
              />
            </div>
            <div className="flex justify-center items-center">
              <button type="submit" className="btn ml-8 w-32 btn-primary">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
