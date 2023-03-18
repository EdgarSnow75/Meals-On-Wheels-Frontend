const ContactUs = () => { 
    return (
        <div>
            <div class="hero min-h-[10rem] bg-violet-700">
                <div class="hero-content text-center">
                    <div class="max-w-md ">
                        <h1 class="text-5xl font-bold text-white">Contact Us</h1>
                    </div>
                </div>
            </div>
            <div className="container grid flex  justify-center">
                <h3 className=" block col-span-1 text-3xl p-2 text-center m-10">Ways to contact </h3>
                <h5 className=" block  text-2xl p-2 text-center" > Email Us - support@merrymeal.com</h5>
                <h5 className="block text-xl p-2 pb-5 text-center" >or</h5>
                <button className="bg-black w-60 h-20 ml-20  " > 
                     <h5 className="text-white text-3xl ">Call Us</h5> 
                </button>
                <p className= "ml-20 pt-1">*rates may apply</p>
                <p className= "ml-20 ">*Available 9 a.m to 5 p.m Mon - Fri</p>

            </div>
           



        </div>

    )

}

export default ContactUs