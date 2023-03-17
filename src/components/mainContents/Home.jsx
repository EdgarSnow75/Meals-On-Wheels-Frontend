import HeroImg from "images/hero3.jpg";
import Service1 from "images/her4.jpg";
import Service2 from "images/Hero1.jpg";
import Service3 from "images/hero2.jpg";
import Service4 from "images/hero9.jpg";
import Donate1 from "images/donate 1.jpg";

const Home = () => {
  return (
    <div>
      <div>
        <div
          className="hero min-h-screen rounded-md mb-20"
          style={{
            backgroundImage: `url(${HeroImg})`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-6xl font-bold">
                Welcome to our website!
              </h1>
              <p className="mb-5 text-3xl">
                We provide a healthy meal to those who cannot get a meal due to
                a wide variety of circumstances. We believe that everyone should
                get a meal that is fit for their nutritional needs everyday.
                Sign Up and get meals delivered to your doorstep!
                <br />
              </p>
              <button className="btn btn-primary pt-1 text-lg">
                Get Started
              </button>
            </div>
          </div>
        </div>
        <div className="card lg:card-side bg-accent shadow-xl text-base-100">
          <figure>
            <div className="carousel w-[60rem]">
              <div id="slide1" className="carousel-item relative w-[60rem]">
                <img src={Service1} className="w-[60rem]" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide4" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide2" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide2" className="carousel-item relative w-[60rem]">
                <img src={Service2} className="w-[60rem]" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide1" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide3" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide3" className="carousel-item relative w-[60rem]">
                <img src={Service3} className="w-[60rem]" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide2" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide4" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide4" className="carousel-item relative w-[60rem]">
                <img src={Service4} className="w-[60rem]" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide3" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide1" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
            </div>
          </figure>
          <div className="card-body flex-col items-center justify-center align-middle py-20 w-[40rem]">
            <h2 className="card-title text-6xl mb-6">Serving our community</h2>
            <p className="flex-grow-0 text-3xl text-center mb-6">
              We deliver hot and healthy meals to eligible members 10km within
              our outsourced kitchens Monday through Friday. If you live more
              than 10km away or want to enjoy our meals on the weekdays? Worry
              not! We deliver frozen meals as well to ensure freshness and
              longevity. Want to learn more about what we do?
            </p>
            <div className="card-actions">
              <button className="btn btn-primary pt-1">
                Learn more about us
              </button>
            </div>
          </div>
        </div>
        <div className="my-20">
          <div className="flex flex-col items-center">
            <p className="text-6xl mb-4">
              Need help with your nutritional needs?
            </p>
            <button className="btn btn-secondary pt-1">Register Now</button>
          </div>
        </div>
        <div className="card lg:card-side bg-secondary shadow-xl text-base-100 ring-[0.5px] ring-[rgba(0,0,0,0.2)]">
          <figure>
            <img
              src={Donate1}
              alt="Donation Img"
              className="w-[100rem] h-[70rem] object-fill"
            />
          </figure>
          <div className="card-body flex-col items-center justify-center align-middle py-20 w-[40rem]">
            <h2 className="card-title text-6xl mb-6">Join the cause!</h2>
            <p className="flex-grow-0 text-3xl text-center mb-6">
              Be part of the community that gives to the people truly in need of
              our help. Any and all contribution matters! You can donate funds
              for our organization to expand and maintain its operations or you
              could volunteer to help our in meal deliverys and preparation!
            </p>
            <div className="card-actions">
              <button className="btn btn-primary pt-1">Donate</button>
              <div className="divider">OR</div>
              <button className="btn btn-outline btn-primary pt-1">
                Volunteer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
