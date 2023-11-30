import { Link } from "react-router-dom";
import ServicesCard from "../components/ServicesCard";

function Services() {
  return (
    <div className="bg-black h-[100vh] font-DM-sans text-white">
      <div className="flex justify-center items-center py-12">
        <h1 className="text-[50px] font-semibold">
          Our Digital Marketing Services
        </h1>
      </div>
      <div className="flex justify-center items-center w-[auto]">
        <p className="w-[600px] text-[16px]">
          At Optimum Outreach, we are more than just marketers; we're architects
          of digital success. Our expertise extends across the vast landscape of
          marketing, and we add a touch of spice to every campaign. High-growth
          startups, in particular, are our sweet spots - where innovation,
          strategy, and rapid expansion converge.
        </p>
      </div>
      <div className="flex justify-center items-center mt-10">
        <div className="gap-x-grid col-span-full grid auto-rows-fr grid-cols-4 gap-y-8 lg:grid-cols-4 lg:gap-y-6 md:gap-y-4.5 sm:grid-cols-1 sm:gap-y-4 sm:gap-x-10">
          <Link to="/Service/Web-App-Development">
            <ServicesCard>
              <div className="p-5">
                <h1 className="font-semibold text-[18px]">
                  Web App Development
                </h1>
                <p className="mt-2">
                  At Optimum Outreach, we transform ideas into interactive
                  experiences through our Web App Development service. Craft a
                  digital masterpiece that captivates your audience, combining
                  cutting-edge technology with user-centric design.
                </p>
              </div>
            </ServicesCard>
          </Link>
          <Link to="/Service/Social-Media">
            <ServicesCard>
              <div className="p-5">
                <h1 className="font-semibold text-[18px]">Social Media</h1>
                <p className="mt-2">
                  Join the social revolution with Optimum Outreach's Social
                  Media service. Empower your brand to make waves across social
                  platforms, connecting with your audience in meaningful ways.
                  From strategic content creation to influencer partnerships, we
                  craft a social presence that not only builds awareness but
                  also fosters lasting connections.
                </p>
              </div>
            </ServicesCard>
          </Link>
          <Link to="/Service/Web-Design">
            <ServicesCard>
              <div className="p-5">
                <h1 className="font-semibold text-[18px]">Web Designing</h1>
                <p className="mt-2">
                  At Optimum Outreach, we believe in the power of visually
                  stunning and user-friendly websites. Elevate your online
                  presence with our Web Design service. Our design experts
                  ensure your website is not just a digital space but a
                  captivating experience that leaves a lasting impression on
                  your visitors.
                </p>
              </div>
            </ServicesCard>
          </Link>
          <Link to="/Service/Lead-Generation">
            <ServicesCard>
              <div className="p-5">
                <h1 className="font-semibold text-[18px]">Lead Generation</h1>
                <p className="mt-2">
                  Unlock the potential of your business with our Lead Generation
                  service at Optimum Outreach. Harness the power of dynamic
                  marketing strategies to invigorate your brand and propel it to
                  new heights. We cultivate opportunities that resonate with
                  your target audience, ensuring sustainable growth and success
                </p>
              </div>
            </ServicesCard>
          </Link>
          <Link to="/Service/Paid-Ads">
            <ServicesCard>
              <div className="p-5">
                <h1 className="font-semibold text-[18px]">Paid Advertisment</h1>
                <p className="mt-2">
                  Optimize your digital visibility with the Paid Ads service at
                  Optimum Outreach. Unleash targeted campaigns that drive
                  results. From precision ad targeting to impactful creatives,
                  we navigate the digital landscape to ensure your brand gets
                  the attention it deserves, reaching the right audience at the
                  right time.
                </p>
              </div>
            </ServicesCard>
          </Link>
          <Link to="/Service/SEO">
            <ServicesCard>
              <div className="p-5">
                <h1 className="font-semibold text-[18px]">
                  Search Engine Optimization
                </h1>
                <p className="mt-2">
                  Empower your online visibility and climb the ranks of search
                  engines with Optimum Outreach's SEO service. Our data-driven
                  approach ensures your brand stays ahead in the digital race.
                  From keyword optimization to content strategy, we meticulously
                  craft a path to the top, ensuring your business shines in the
                  online realm.
                </p>
              </div>
            </ServicesCard>
          </Link>
          <Link to="/Service/Content-creation">
            <ServicesCard>
              <div className="p-5">
                <h1 className="font-semibold text-[18px]">Content Creation</h1>
                <p className="mt-2">
                  Compelling Visuals: Elevate your brand aesthetics with
                  visually stunning content. From eye-catching graphics to
                  attention-grabbing videos, we bring your brand to life in the
                  digital realm.
                </p>
              </div>
            </ServicesCard>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Services;
