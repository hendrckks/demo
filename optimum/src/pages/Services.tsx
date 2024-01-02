import { Link } from "react-router-dom";
import ServicesCard from "../components/ServicesCard";
import "../Services.css";

function Services() {
  return (
    <div id="service" className="sm:h-[100vh] h-[full] background font-DM-sans">
      <div className="flex justify-center items-center py-10">
        <h1 className="sm:text-[60px] text-[40px] font-semibold text-[#877bae] tracking-wide">
          Our Digital Marketing Services
        </h1>
      </div>
      <div className="flex justify-center items-center w-[auto]">
        <p className="w-[600px] sm:text-[16px] text-[12px] text-[#e0dcf1] font-semibold">
          At Optimum Outreach, we are more than just marketers; we're architects
          of digital success. Our expertise extends across the vast landscape of
          marketing, and we add a touch of spice to every campaign. High-growth
          startups, in particular, are our sweet spots - where innovation,
          strategy, and rapid expansion converge.
        </p>
      </div>
      <div className="flex justify-center items-center mt-10">
        <div className="gap-x-grid col-span-full sm:grid flex-col auto-rows-fr grid-cols-4 gap-y-8 lg:grid-cols-3 lg:gap-y-6 md:gap-y-4.5 sm:grid-cols-1 sm:gap-y-4 sm:gap-x-10">
          <Link to="/Services/Web-App-Development">
            <ServicesCard>
              <div className="p-5">
                <h1 className="font-bold text-[18px]">Web App Development</h1>
                <p className="mt-2 font-medium">
                  Think of us as your digital architects, building custom web
                  apps that are as impressive as your grandma's apple pie (but
                  without the heartburn). Forget the coding headaches and let us
                  build your digital masterpiece. We'll obsess over every pixel,
                  ensuring your app is not just functional, but a work of art
                </p>
              </div>
            </ServicesCard>
          </Link>

          <Link to="/Services/Lead-Generation">
            <ServicesCard>
              <div className="p-5">
                <h1 className="font-bold text-[18px]">Lead Generation</h1>
                <p className="mt-2 font-medium">
                  Tired of crickets chirping on your website? We're the Pied
                  Pipers of leads, luring them in with irresistible content and
                  converting them like magic.Think blog posts that make people
                  forget to eat, social media campaigns that spark
                  conversations, and landing pages that convert like a
                  well-oiled funnel
                </p>
              </div>
            </ServicesCard>
          </Link>
          <Link to="/Services/Paid-Ads">
            <ServicesCard>
              <div className="p-5">
                <h1 className="font-bold text-[18px]">Paid Advertisment</h1>
                <p className="mt-2 font-medium">
                  Paid ads? More like paid applause for your awesome brand!
                  We'll target the right audience and make your marketing
                  dollars sing.We're not just ad slingers, we're digital
                  sharpshooters, targeting your ideal audience with laser
                  precision.
                </p>
              </div>
            </ServicesCard>
          </Link>
          <Link to="/Services/SEO">
            <ServicesCard>
              <div className="p-5">
                <h1 className="font-bold text-[18px]">
                  Search Engine Optimization
                </h1>
                <p className="mt-2 font-medium">
                  Want to reach the top of the search engine food chain? We'll
                  climb the Google mountain with you, one keyword at a
                  time.Forget black hat tricks and shady tactics. We do SEO the
                  ethical way, with organic love and a sprinkle of
                  Google-approved pixie dust
                </p>
              </div>
            </ServicesCard>
          </Link>
          <Link to="/Services/Content-creation">
            <ServicesCard>
              <div className="p-5">
                <h1 className="font-bold text-[18px]">Content Creation</h1>
                <p className="mt-2 text-[13px] font-medium">
                  Compelling Visuals: Elevate your brand aesthetics with
                  visually stunning content. From eye-catching graphics to
                  attention-grabbing videos, we bring your brand to life in the
                  digital realm.
                </p>
              </div>
            </ServicesCard>
          </Link>
          <Link to="/Services/WebDesign">
            <ServicesCard>
              <div className="p-5">
                <h1 className="font-bold text-[18px]">Web Design</h1>
                <p className="mt-2 text-[13px] font-medium">
                  Your website is your digital storefront. Don't settle for a
                  dusty, outdated shack! We're the web design alchemists,
                  transforming bland pages into user-friendly masterpieces.
                  Imagine a website so beautiful, it makes Van Gogh weep (tears
                  of joy, of course)
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
