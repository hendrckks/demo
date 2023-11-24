import { Link } from "react-router-dom";
import ServicesCard from "../components/ServicesCard";

function Services() {
  return (
    <div className="bg-white h-[100vh] font-DM-sans ">
      <div className="flex justify-center items-center py-12">
        <h1 className="text-[35px] font-semibold">
          Our Digital Marketing Services
        </h1>
      </div>
      <div className="flex justify-center items-center w-[auto]">
        <p className="w-[600px] text-[15px] font-medium">
          At Optimum Outreach, we are more than just marketers; we're architects
          of digital success. Our expertise extends across the vast landscape of
          marketing, and we add a touch of spice to every campaign. High-growth
          startups, in particular, are our sweet spots - where innovation,
          strategy, and rapid expansion converge.
        </p>
      </div>
      <div className="flex justify-center items-center mt-10">
        <div className="font-Oswald-sans gap-x-grid col-span-full grid auto-rows-fr grid-cols-4 gap-y-8 lg:grid-cols-3 lg:gap-y-6 md:gap-y-4.5 sm:grid-cols-1 sm:gap-y-4 sm:gap-x-6">
          <Link to="/Service/Web-App-Development">
            <ServicesCard className="bg-gradient-to-br from-[#f8b698] to-opacity-80 hover:scale-110 transition-transform duration-200"></ServicesCard>
          </Link>
          <Link to="/Service/Social-Media">
            <ServicesCard className="bg-gradient-to-br from-[#f8b698] to-opacity-80 hover:scale-110 transition-transform duration-200"></ServicesCard>
          </Link>
          <Link to="/Service/Web-Design">
            <ServicesCard className="bg-gradient-to-br from-[#f8b698] to-opacity-80 hover:scale-110 transition-transform duration-200"></ServicesCard>
          </Link>
          <Link to="/Service/Lead-Generation">
            <ServicesCard className="bg-gradient-to-br from-[#f8b698] to-opacity-80 hover:scale-110 transition-transform duration-3200">
              <div className="p-5">
                <h1 className="">Lead Generation</h1>
              </div>
            </ServicesCard>
          </Link>
          <Link to="/Service/Paid-Ads">
            <ServicesCard className="bg-gradient-to-br from-[#f8b698] to-opacity-80 hover:scale-110 transition-transform duration-200"></ServicesCard>
          </Link>
          <Link to="/Service/SEO">
            <ServicesCard className="bg-gradient-to-br from-[#f8b698] to-opacity-80 hover:scale-110 transition-transform duration-200"></ServicesCard>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Services;
