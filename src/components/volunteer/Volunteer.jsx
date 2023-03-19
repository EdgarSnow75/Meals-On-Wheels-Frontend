import Hero from "images/Volunteer/Hero.jpg"
import Working from "images/Volunteer/Working.jpg"
import WellnessCheck from "images/Volunteer/WellnessCheck.jpg"
import WheelsDriver  from "images/Volunteer/WheelsDriver-3.jpg"
import FriendlyText from "images/Volunteer/FriendlyText.jpeg"
import Wish from "images/Volunteer/Wish.jpeg"

const Volunteer = () => {
    return(
        <div>
            <div className="hero min-h-screen" style={{
                backgroundImage: `url(${Hero})`,
            }}>
                <div className="hero-overlay bg-opacity-60">

                </div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">MAKE A DIFFERENCE TODAY </h1>
                        <button className="btn btn-primary">Register</button>
                    </div>
                </div>
            </div>
            <div className="card card-side bg-base-100  mt-20">
                <div className="card-body w-[40rem] pt-20 mt-10">
                    
                    <h3 className="text-xl justify-center">
                        Our volunteer are doing so much more than just delivering nutritious meals - they 
                        provide social interactions for who may be isolated or homebound. Our volunteers 
                        also conduct critical safety checks while dropping off meals.
                    </h3>
                    
                        <button className="btn btn-primary ">Register Now</button>
   
                </div>
                <figure className="w-[60rem]"><img src={Working} alt="Wheels Driver"/>
                </figure>
            </div>

            <div class="card card-side bg-base-100  mt-20">
                <div>
                    <figure className="w-80 h-50 p-2"><img src={WheelsDriver} alt="Wheels Driver"/>
                    </figure>
                    <div className="figure-content text-center text-content">
                        <div className="max-w-md">
                            <p className="mb-5 text-2xl font-bold">Wheels Driver </p>
                    
                        </div>
                    </div>
                </div>
                <div>
                    <figure className="w-80 h-50 p-2"><img src={WellnessCheck} alt="Wheels Driver"/>
                    </figure>
                    <div className="figure-content text-center text-content">
                        <div className="max-w-md">
                            <p className="mb-5 text-2xl font-bold">Wellness Check </p>
                    
                        </div>
                    </div>
                </div>
                <div>
                    <figure className="w-80 h-50  p-2"><img src={FriendlyText} alt="Friendly Chat"/>
                    </figure>
                    <div className="figure-content text-center text-content">
                        <div className="max-w-md">
                            <p className="mb-5 text-2xl font-bold">Friendly Chat</p>
                    
                        </div>
                    </div>
                </div>
                <div>
                    <figure className="w-80 h-50 p-2"><img src={Wish} alt="Wish Program"/>
                    </figure>
                    <div className="figure-content text-center text-content">
                        <div className="max-w-md">
                            <p className="mb-5 text-2xl font-bold">Wish Program</p>
                    
                        </div>
                    </div>
                </div>
                
            </div>
            
        
        </div>

    )
}

export default Volunteer