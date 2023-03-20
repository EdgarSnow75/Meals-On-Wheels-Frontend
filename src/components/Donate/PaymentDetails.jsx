import { useState } from "react";

const PaymentDetails = ( ) => {
    
    const [payment, setPayment ] = useState({
        cardFirstName: "",
        cardLastName: "",
        cardNumber: "",
        expMonth: "",
        expYear: "",
        CVV: "",
    
      
      });
      const ChangeHandler = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.type === "radio" ? target.checked : target.value;

        setPayment({
            ...payment,
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
        <div className="Grid Grid-cols -2 mx-20 my-10 container flex">
            <div className="flex-block mx-20 my-10">        
                <div className=" max-w-screen justify-center items-center ">
                    <h1 className="text-4xl ml-10">
                        Payment Details
                    </h1>
                        <form 
                        onSubmit={submitHandler}
                        className="
                        rounded-md w-[35rem] 
                        shadow-md 
                        p-10 
                        pt-5
                        my-4 
                        ring-[1px] 
                        ring-black 
                        bg- 
                        mt-8 
                        gap-6"
                        
                        >
                            <div className="flex flex-col ">
                                <label className="mr-4">First Name</label>
                                <input
                                type="text"
                                name="cardFirstName"
                                className="w-[30rem] input                  
                                shadow-sm 
                                bg-gray-50 
                                border border-gray-300 
                                text-gray-900 text-sm 
                                rounded-lg 
                                focus:ring-blue-500 focus:border-blue-500 
                                block p-2.5 
                                dark:bg-gray-700 
                                dark:border-gray-600 
                                dark:placeholder-gray-400 
                                dark:text-white 
                                dark:focus:ring-blue-500 
                                dark:focus:border-blue-500 
                                dark:shadow-sm-light
                                "
                                placeholder="Card Holder's First Name"
                                required
                                value ={payment.cardFirstName}
                                onChange={ChangeHandler}
                             
                                />
                            </div>
                            <div className="flex flex-col pt-5">
                                <label className="mr-4 pt-3">Last Name</label>
                                <input
                                type="text"
                                name="cardLastName"
                                className="w-[30rem] input
                                shadow-sm 
                                bg-gray-50 
                                border border-gray-300 
                                text-gray-900 text-sm 
                                rounded-lg 
                                focus:ring-blue-500 focus:border-blue-500 
                                block p-2.5 
                                dark:bg-gray-700 
                                dark:border-gray-600 
                                dark:placeholder-gray-400 
                                dark:text-white 
                                dark:focus:ring-blue-500 
                                dark:focus:border-blue-500 
                                dark:shadow-sm-light
                                "
                                placeholder="Card Holder's Last Name "
                                required
                                value ={payment.cardLastName}
                                onChange={ChangeHandler}
                                />
                            </div>
                            <div className="flex flex-col pt-5">
                                <label className="mr-4 pt-3">Card Number</label>
                                <input
                                type="text"
                                name="cardNumber"
                                className="w-[30rem] input
                                shadow-sm 
                                bg-gray-50 
                                border border-gray-300 
                                text-gray-900 text-sm 
                                rounded-lg 
                                focus:ring-blue-500 focus:border-blue-500 
                                block p-2.5 
                                dark:bg-gray-700 
                                dark:border-gray-600 
                                dark:placeholder-gray-400 
                                dark:text-white 
                                dark:focus:ring-blue-500 
                                dark:focus:border-blue-500 
                                dark:shadow-sm-light"
                                placeholder="Card Number"
                                required
                                value ={payment.cardNumber}
                                onChange={ChangeHandler}
                                />
                            
                            </div>
                            
                            <div className="flex flex-col pt-5">
                                <label className="mr-4 pt-3">Expiry Date</label>
                                <span>
                                <input type="text" 
                                name="expMonth" 
                                placeholder="MM" 
                                maxlength="2" 
                                size="2" 
                                className="w-[5rem] input
                                shadow-sm 
                                bg-gray-50 
                                border border-gray-300 
                                text-gray-900 text-sm 
                                rounded-lg 
                                focus:ring-blue-500 focus:border-blue-500 
                                
                                dark:bg-gray-700 
                                dark:border-gray-600 
                                dark:placeholder-gray-400 
                                dark:text-white 
                                dark:focus:ring-blue-500 
                                dark:focus:border-blue-500 
                                dark:shadow-sm-light
                                "
                                value ={payment.expMonth}
                                onChange={ChangeHandler}
                                />
                                <span>/</span>
                                <input 
                                type="text" 
                                name="expYear" 
                                placeholder="YY" 
                                maxlength="2" 
                                size="2" 
                                className="w-[5rem] input
                                shadow-sm 
                                bg-gray-50 
                                border border-gray-300 
                                text-gray-900 text-sm 
                                rounded-lg 
                                focus:ring-blue-500 focus:border-blue-500 
                               
                                dark:bg-gray-700 
                                dark:border-gray-600 
                                dark:placeholder-gray-400 
                                dark:text-white 
                                dark:focus:ring-blue-500 
                                dark:focus:border-blue-500 
                                dark:shadow-sm-light"
                                
                                value ={payment.expYear}
                                onChange={ChangeHandler}/>
                                </span>
                                
                            </div>
                        
                            <div className="flex flex-col pt-5">
                                <label className="mr-4 pt-3">CVV</label>
                                <input
                                type="text"
                                name="CVV"
                                className="w-[10rem] input
                                shadow-sm 
                                bg-gray-50 
                                border border-gray-300 
                                text-gray-900 text-sm 
                                rounded-lg 
                                focus:ring-blue-500 focus:border-blue-500 
                                block p-2.5 
                                dark:bg-gray-700 
                                dark:border-gray-600 
                                dark:placeholder-gray-400 
                                dark:text-white 
                                dark:focus:ring-blue-500 
                                dark:focus:border-blue-500 
                                dark:shadow-sm-light
                                "
                                placeholder="CVV"
                                maxlength="3" size="3"
                                required
                                value ={payment.CVV}
                                onChange={ChangeHandler}
                                />
                            </div>

                            <div className="flex justify-end pt-10 ">
                                <button type="submit" className="btn  w-60 btn">
                                    Pay
                                </button>
                            </div>


                            
                        </form>
                    </div>
            </div >   
            <div className=" mx-20 my-10">
                <h1 className="text-4xl pb-5">
                    Manage Your Payment
                </h1>
                <h3 className="text-xl p-5 py-10">
                    Edit Payment Details
                </h3>
                <h3 className="text-xl p-5 py-10">
                    SMS Notifications
                </h3>
                <h3 className="text-xl p-5 py-10">
                    Download Payment Receipt 
                </h3>
                </div>                
        </div>
    )
}

export default PaymentDetails