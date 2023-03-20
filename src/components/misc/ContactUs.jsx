const ContactUs = () => {
  return (
    <div>
      <div className="hero min-h-[10rem] bg-violet-700">
        <div className="hero-content text-center">
          <div className="max-w-md ">
            <h1 className="text-5xl font-bold text-white">Contact Us</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h3 className="block col-span-1 font-bold text-4xl p-2 text-center my-6">
          Ways to contact
        </h3>
        <h5 className=" block  text-2xl p-2 text-center">
          Email Us - support@merrymeal.com
        </h5>
        <h5 className="divider mx-20 text-2xl">or</h5>
        <button className="bg-black w-60 h-20">
          <h5 className="text-white text-3xl ">Call Us</h5>
        </button>
        <p className="pt-1">*rates may apply</p>
        <p className="">*Available 9 a.m to 5 p.m Mon - Fri</p>
      </div>
    </div>
  );
};

export default ContactUs;
