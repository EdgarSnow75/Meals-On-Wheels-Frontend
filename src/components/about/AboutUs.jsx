import Logo from "images/Logo.png"
import Approach from "images/About/Approach3.jpg"
import History from "images/About/History.jpg"
import Organization from "images/About/Teams.jpg"

const AboutUs = () => {

    return(
        <div>
            <div className="hero" style={{
                backgroundImage: `url(${Logo})`,
            }}>
                <div className="hero-overlay bg-opacity-60">

                </div>
                <div className="hero-content text-start text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">About Us </h1>
                        <h2 className="text-2xl font-bold ">We Deliver Love </h2>
                 
                    </div>
                </div>

                
            </div>

            <div className="card card-side bg-indigo-100  mt-20 p-10">

                
                <div className="card-body w-[30rem] pt-20 mt-10 pr-10">
                    
                    <h1 className="m-2 text-5xl text-center font-bold">
                        Our Mission

                    </h1>
                    <h3 className="mt-3 text-xl justify-center">
                        we believe that delivering love means providing more than just hot, nutritious meals.
                        Our mission is to deliver love to qualified adults living at home who are unable to cook 
                        for themselves or maintain their nutritional status due to age, disease, or disability.
                        We are committed to providing not only the sustenance our members need, but also the 
                        care, compassion, and love they deserve.
                    </h3>
                    
                        
   
                </div>
                <figure className="w-[60rem]"><img src={Logo} alt="Mission"/>
                </figure>
            </div>

           

            <div className="card card-side bg  mt-20 p-10">

                <figure className="w-[60rem]"><img src={Organization} alt="organization"/>
                </figure>
                <div className="card-body w-[30rem] pt-20 mt-10 pr-10">
                    
                    <h1 className="m-2 text-5xl text-center font-bold">
                        Our Organization 

                    </h1>
                    <h3 className="mt-3 text-xl justify-center">
                    MerryMeal is a charitable organization that partners with food service providers
                    across the country to deliver love in the form of hot meals to those in need. 
                    Our team of dedicated volunteers works tirelessly to prepare and deliver meals to 
                    our members every day, making sure they receive not only the nourishment they need 
                    but also the warmth and kindness they deserve
                    </h3>
                    
                        
   
                </div>
              
            </div>

            <div className="card card-side bg-indigo-100  mt-20 p-10">
                
                   
                <div className="card-body w-[30rem] pt-20 mt-10 pr-10">
                    
                    <h1 className="m-2 text-5xl text-center font-bold">
                        Our Approach

                    </h1>
                    <h3 className="mt-3 text-xl justify-center">
                    At MerryMeal, we take a personal approach to delivering love. 
                    We work with our partners to develop menus that are both nutritious and delicious, 
                    and we use only the highest quality ingredients to prepare our meals. Our volunteers 
                    go above and beyond to make sure our members receive their meals with a smile and a kind word, 
                    brightening their day and lifting their spirits.
                    </h3>                      
   
                </div>
                <figure className="w-[40rem] max-h-screen "><img src={Approach} alt="Wheels Driver"/>
                </figure>
                
            </div>

            <div className="card card-side bg  mt-20 p-10">
                
                <figure className="w-[60rem]"><img src={History} alt="Wheels Driver"/>
                </figure>
            <div className="card-body w-[30rem] pt-20 mt-10 pr-10">
                
                <h1 className="m-2 text-5xl text-center font-bold">
                    Our History

                </h1>
                <h3 className="mt-3 text-xl justify-center">
                MerryMeal was founded with the simple idea that everyone deserves access to healthy, 
                nutritious meals. Over the years, we have grown and expanded our services to reach more people 
                in more communities across the country. We are proud of the work that we do, and we are committed
                 to continuing to deliver love to those in need, one meal at a time.
                </h3>
                
                    

            </div>
            
        </div>

        </div>


    )
}

export default AboutUs