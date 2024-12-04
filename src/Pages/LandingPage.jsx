import React from "react";
import Navbar from "../Components/Navbar.jsx";
import Iron from "../assets/tmt.jpg";
import Live from "../assets/live.png";
import Nego from "../assets/nego.png";
import Order from "../assets/order.png";
import Building from "../assets/building.jpg";
import Person from "../assets/person.png";
import Bricks from "../assets/bricks.jpg";
import Equipment from "../assets/equipment.jpg";
import Quality from "../assets/quality.jpg";
import Rice from "../assets/rice.jpg";
import Pulses from "../assets/pulses.jpg";
import Cotton from "../assets/cottonyarn-y.jpg"
import Banner from "../assets/banner.jpg"
import App from "../assets/playstore.png";
import Android from "../assets/android.jpg";
import Steel2 from "../assets/steel2.jpg";
import App2 from "../assets/android.jpg"
import Footer from "../Components/Footer.jsx";

const LandingPage = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>

      <section className="h-[80vh] w-full">
        <div className="h-[40vh] w-full border-2">
          <img src={Steel2} alt="Iron" className="h-[60vh] w-[100%]" />
        </div>

        <div className="h-20 w-[50%] mt-48 ml-[20%] bg-[#0b2c3d]">
          <p className="ml-40 text-3xl py-3 text-white">
            Buy Or Sell india with a Phone Call or AN Email
          </p>
         
        </div>
        

        <div className="h-28 w-[95%] ml-10 flex justify-between">
          <div className="border-2 h-36 w-[30%] relative">
            <p className="px-6  ml-16 font-semibold">
              <img src={Live} alt="Live" className="absolute right-[90%]" />
              Registered Agri Buyers
            </p>
            <p className="px-8 text-3xl font-bold absolute left-10 top-14">9,55,235</p>
          </div>
          <div className="border-2 h-36 w-[30%]">
            <p className="px-2 w-[100%] ml-28 font-semibold relative">
              <img src={Nego} alt="Nego" className="absolute right-[99%]" />
              Registered Construction Buyers
            </p>
            <p className="px-8 text-3xl font-bold ml-20 mt-8">23,11,165</p>
          </div>
          <div className="border-2 h-36 w-[30%]">
            <p className="font-semibold ml-14 relative">
              <img src={Order} alt="Order" className="absolute right-[99%]" />
              Registered
             
              Sellers
            </p>
            <p className="px-8 text-3xl font-bold ml-8 mt-8">80,18,335</p>
          </div>
        </div>
      </section>

      <section className="h-[100vh] w-full mt-20 flex flex-col items-center bg-[#0b2c3d]">
        <h2 className="text-4xl font-bold text-center mt-8 mr-[60%] text-white">About Our Company</h2>
        <div className="flex flex-wrap mt-8 w-[80%]">
          <div className="w-full md:w-[50%] mb-4 md:mb-0">
            <img
              src={Building}
              alt="About Us"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-[50%] md:ml-8 text-white relative">
            <p className="text-lg text-white mb-4">
              We are a global leader in facilitating seamless trade between buyers and sellers across various industries. Our mission is to simplify transactions, ensuring safe and secure processes that eliminate the need for traditional communication methods like phone calls and emails.
            </p>
            <p className="text-lg text-white-700 mb-4">
              With our platform, users can experience verified and trusted transactions while accessing a variety of services that enhance their trade experience. We value transparency, innovation, and customer satisfaction above all.
            </p>
            <ul className="mt-4">
              <li className="text-lg text-white-600">- Comprehensive Global Marketplace</li>
              <li className="text-lg text-white-600">- Advanced Verification Processes</li>
              <li className="text-lg text-white-600">- Personalized Customer Support</li>
              <li className="text-lg text-white-600">- Easy and Secure Payment Solutions</li>
            </ul>
          </div>
          <div className="h-[100vh] w-[20%]">
          <img src={Person} alt="" className="absolute  top-[99%] right-0"/>
        </div>
        </div>
        
      </section>


      <section className="h-auto w-full mt-20 flex flex-col items-center bg-[#0b2c3d] py-10">
  <h2 className="text-4xl font-bold mt-8 mb-10 text-white">Our Services</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-[90%]">
    
    <div className="flex flex-col items-center text-center bg-white p-4 rounded-lg shadow-lg">
      <img
        src={Bricks}
        alt="Material Supply"
        className="h-32 w-32 mb-4 rounded-full border-4 border-gray-300"
      />
      <h3 className="text-xl font-semibold mb-2 text-gray-800">Material Supply</h3>
      <p className="text-gray-600">
        We provide high-quality construction materials including cement, steel, and bricks to ensure your projects stand strong.
      </p>
    </div>

    {/* Service 2 */}
    <div className="flex flex-col items-center text-center bg-white p-4 rounded-lg shadow-lg">
      <img
        src={Equipment}
        alt="Equipment Rental"
        className="h-32 w-32 mb-4 rounded-full border-4 border-gray-300"
      />
      <h3 className="text-xl font-semibold mb-2 text-gray-800">Equipment Rental</h3>
      <p className="text-gray-600">
        Rent the latest construction equipment, including cranes, excavators, and bulldozers, at competitive rates.
      </p>
    </div>

    {/* Service 3 */}
    <div className="flex flex-col items-center text-center bg-white p-4 rounded-lg shadow-lg">
      <img
        src={Nego}
        alt="Project Management"
        className="h-32 w-32 mb-4 rounded-full border-4 border-gray-300"
      />
      <h3 className="text-xl font-semibold mb-2 text-gray-800">Project Management</h3>
      <p className="text-gray-600">
        Our experts offer comprehensive project management services to ensure timely and efficient project delivery.
      </p>
    </div>

    {/* Service 4 */}
    <div className="flex flex-col items-center text-center bg-white p-4 rounded-lg shadow-lg">
      <img
        src={Building}
        alt="Architectural Design"
        className="h-32 w-32 mb-4 rounded-full border-4 border-gray-300"
      />
      <h3 className="text-xl font-semibold mb-2 text-gray-800">Architectural Design</h3>
      <p className="text-gray-600">
        Work with our skilled architects to create modern and sustainable designs for residential and commercial buildings.
      </p>
    </div>

    {/* Service 5 */}
    <div className="flex flex-col items-center text-center bg-white p-4 rounded-lg shadow-lg">
      <img
        src={Person}
        alt="Labor Supply"
        className="h-32 w-32 mb-4 rounded-full border-4 border-gray-300"
      />
      <h3 className="text-xl font-semibold mb-2 text-gray-800">Labor Supply</h3>
      <p className="text-gray-600">
        We connect you with skilled laborers, engineers, and supervisors for your construction projects.
      </p>
    </div>

    {/* Service 6 */}
    <div className="flex flex-col items-center text-center bg-white p-4 rounded-lg shadow-lg">
      <img
        src={Iron}
        alt="Waste Management"
        className="h-32 w-32 mb-4 rounded-full border-4 border-gray-300"
      />
      <h3 className="text-xl font-semibold mb-2 text-gray-800">Waste Management</h3>
      <p className="text-gray-600">
        Eco-friendly construction waste disposal services to maintain a clean and green environment.
      </p>
    </div>

    {/* Service 7 */}
    <div className="flex flex-col items-center text-center bg-white p-4 rounded-lg shadow-lg">
      <img
        src={Quality}
        alt="Quality Assurance"
        className="h-32 w-32 mb-4 rounded-full border-4 border-gray-300"
      />
      <h3 className="text-xl font-semibold mb-2 text-gray-800">Quality Assurance</h3>
      <p className="text-gray-600">
        Ensure your projects meet industry standards with our rigorous quality assurance processes.
      </p>
    </div>
  </div>
</section>


      
    
      {/* Products Section */}
      <section className="h-auto w-full mt-20 flex flex-col items-center bg-gray-100 py-10">
  <h2 className="text-4xl font-bold mt-8 mb-10 ">Trending Products</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 w-[90%]">
    {/* Product 1 */}
    <div className="flex flex-col items-center text-center bg-white p-4 rounded-lg shadow-lg">
      <img
        src={Rice}
        alt="Iron"
        className="h-40 w-72 mb-4 rounded-lg border-4 border-gray-300 object-cover"
      />
      <h3 className="text-xl font-semibold mb-2 text-gray-800">Rice</h3>
      <button className="h-10 w-36  bg-[#191246] text-white border-2">View Details</button>
    </div>

    {/* Product 2 */}
    <div className="flex flex-col items-center text-center bg-white p-4 rounded-lg shadow-lg">
    <img
        src={Iron}
        alt="Iron"
        className="h-40 w-72 mb-4 rounded-lg border-4 border-gray-300 object-cover"
      />
      <h3 className="text-xl font-semibold mb-2 text-gray-800">TMT Saria</h3>
      <button className="h-10 w-36  bg-[#191246] text-white border-2">View Details</button>
    </div>

    {/* Product 3 */}
    <div className="flex flex-col items-center text-center bg-white p-4 rounded-lg shadow-lg">
    <img
        src={Pulses}
        alt="Iron"
        className="h-40 w-72 mb-4 rounded-lg border-4 border-gray-300 object-cover"
      />
      <h3 className="text-xl font-semibold mb-2 text-gray-800">Pulses</h3>
      <button className="h-10 w-36  bg-[#191246] text-white border-2">View Details</button>
    </div>

    {/* Product 4 */}
    <div className="flex flex-col items-center text-center bg-white p-4 rounded-lg shadow-lg">
    <img
        src={Cotton}
        alt="Iron"
        className="h-40 w-72 mb-4 rounded-lg border-4 border-gray-300 object-cover"
      />
      <h3 className="text-xl font-semibold mb-2 text-gray-800">International Logistics / Yarn</h3>
      <button className="h-10 w-36  bg-[#191246] text-white border-2">View Details</button>
    </div>

    {/* Product 5 */}
    <div className="flex flex-col items-center text-center bg-white p-4 rounded-lg shadow-lg">
    <img
        src={Banner}
        alt="Iron"
        className="h-40 w-72 mb-4 rounded-lg border-4 border-gray-300 object-cover"
      />
      <h3 className="text-xl font-semibold mb-2 text-gray-800">Other Products</h3>
      <button className="h-10 w-36  bg-[#191246] text-white border-2">View Details</button>
    </div>
  </div>
</section>

<section className="flex flex-col md:flex-row items-center justify-center bg-gray-200 p-6 md:p-12">
      {/* Mobile Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img 
          src={App} 
          alt="Mobile App Preview" 
          className="w-3/4 md:w-full max-w-md"
        />
      </div>

      {/* Content */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 text-center md:text-left">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
          URSBID is <br/>Coming Soon!
        </h2>
        <p className="mt-4 text-gray-600 text-lg md:text-xl">
          We’re working hard to bring you an amazing experience. Stay tuned for updates and be the first to explore it!
        </p>
        <button className="mt-6   text-white py-3 px-6 rounded-lg text-lg">
          <img src={App2} alt="" className="h-10" />
        </button>
      </div>
    </section>

<section className="bg-[#191246] from-blue-500 to-teal-500 py-16">
      <div className="max-w-5xl mx-auto px-6 sm:px-12 lg:px-16">
        <h2 className="text-4xl font-bold text-white text-center mb-8">
          Contact Us
        </h2>
        <p className="text-center text-white text-lg mb-10">
          We'd love to hear from you! Please fill out the form below, and we'll get in touch with you as soon as possible.
        </p>

        <form className="bg-white rounded-lg shadow-lg p-8 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
          </div>

          {/* Subject Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Subject
            </label>
            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              rows="5"
              placeholder="Your message"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-teal-500 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-md hover:from-blue-700 hover:to-teal-600 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
     
    </section>
    <div className="">
      <Footer/>
      </div>

    </>
  );
};

export default LandingPage;
