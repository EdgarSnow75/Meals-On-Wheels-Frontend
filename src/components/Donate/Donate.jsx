import { useState } from "react";


import donateimg from "images/Donate/donateimg.jpg"

const Donate = () => {

    const [donator, setDonator ] = useState({
        fullName: "",
        email: "",
        amount: "",
        type: "",
        methods: "",
        anonymously: "",
        comment: "",
      
      });
      const ChangeHandler = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.type === "radio" ? target.checked : target.value;

        setDonator({
            ...donator,
            [name]: value,
          });
      }

      const submitHandler = () => {
        console.log("");
        alert("Thank you for your donation");
      };
    
      const handleLink = (path) => {
        navigate(path);
      };
    


    return (
        <div>
            <div className="hero" style={{
                backgroundImage: `url(${donateimg})`,
            }}>
                <div className="hero-overlay min-h-[20rem] bg-opacity-60">

                </div>
                <div className="hero-content text-start text-neutral-content">
                    <div className="max-w-md">
               
                        <h2 className="text-7xl font-bold text-center pb-60">Donate Now</h2>
                 
                    </div>
                </div>           
            </div>
            <div className=" max-w-screen flex justify-center items-center ">
                <form 
                onSubmit={submitHandler}
                className="
                rounded-md w-[35rem] 
                shadow-md 
                p-10 
                pt-5
                my-4 
                ring-[0.5px] 
                ring-[rgba(0,0,0,0.2) 
                bg-accent 
                mt-8 
                gap-6">
                    <div className="flex flex-col ">
                        <label className="mr-4">Full Name</label>
                        <input
                        type="text"
                        name="fullName"
                        className="w-[30rem] input"
                        placeholder="Full Name"
                         
                        value ={donator.fullName}
                        onChange={ChangeHandler}
                        
                        />
                    </div>
                    <div className="flex flex-col pt-5">
                        <label className="mr-4 pt-3">Email</label>
                        <input
                        type="email"
                        name="email"
                        className="w-[30rem] input"
                        placeholder="Email"
                        required
                        value ={donator.email}
                        onChange={ChangeHandler}
                        />
                    </div>
                    <div className="flex flex-col pt-5">
                        <label className="mr-4 pt-3">Donation Amount</label>
                        <input
                        type="number"
                        name="amount"
                        className="w-[30rem] input"
                        placeholder="Donation Amount"
                        required
                        value ={donator.amount}
                        onChange={ChangeHandler}
                        />
                       
                    </div>
                    <div className="flex flex-col pt-5">
                        <label className="mr-4 pt-3">Donation Type</label>
                     
                        
                         <ul className="grid grid-cols-3 ">
                            <li>
                                <div className="flex ">
                                    <input type="radio" 
                                    value={donator.type}
                                    onChange={ChangeHandler}
                                    id="One" 
                                    name="donationType"/>
                                    <label for="One">One Time </label>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <input type="radio" 
                                    value={donator.type}
                                    id="Month" 
                                    name="donationType"
                                    />
                                    <label for="Month">Monthly</label>
                                </div>
                            </li>
                            <li>    
                                <div>
                                    <input type="radio" 
                                    value={donator.type}
                                    id="Year" 
                                    name="donationType"/>
                                    <label for="Year">Yearly</label>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col pt-5">
                        <label className="mr-4 pt-3">Payment Method</label>
                        <input
                        type="text"
                        name="method"
                        className="w-[30rem] input"
                        placeholder="Payment Method"
                        required
                        value ={donator.methods}
                        onChange={ChangeHandler} 
                        />
                    </div>
                    <div className="flex flex-col pt-5">
                        <label className="mr-4 pt-3">Would You like to donate Anonymously</label>
                     
                        
                         <ul className="grid grid-cols-3">
                            <li>
                                <div>
                                    <input type="radio" 
                                    value={donator.type} 
                                    onChange={ChangeHandler}
                                    id="yes" 
                                    name="anonymously"/>
                                    <label for="yes">Yes </label>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <input type="radio" 
                                    value={donator.type}   
                                    onChange={ChangeHandler}
                                    id="no" 
                                    name="anonymously"
                                    
                                    />
                                    <label for="no">No</label>
                                </div>
                            </li>
                         </ul>
                    </div>   

                    <div className="flex flex-col pt-5">
                        <label className="mr-4 pt-3">Additional Comment</label>
                        <input
                        type="text"
                        name="comment"
                        className="w-[30rem] input"
                        placeholder="Additional Comment"
                        required
                        value ={donator.comment}
                        onChange={ChangeHandler} 
                        />
                    </div>

                    <div className="flex justify-center items-center pt-10">
                        <button type="submit" className="btn  w-40 btn-primary">
                             Donate
                        </button>
                    </div>


                    
                </form>
             </div>

        </div>
    )
}

export default Donate