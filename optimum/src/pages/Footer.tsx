import "../Footer.css";

const Footer = () => {
  return (
    <div className="bg-[#252525] h-[764px] w-full flex box-border font-DM-sans">
      <div className="p-10 py-14 grid grid-rows-2 text-[#fffef2] text-16px">
        <div className="border-b-[1.5px] border-[#fffef2]">
          <h2 className="font-[600]">
            Subscribe to Optimum Outreach Communications
          </h2>
        </div>
        <div className="border-b-[1.5px] border-[#fffef2] mt-4">
          <h2 className="font-[600]">Another Section Title</h2>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <div className="grid grid-cols-3 gap-x-12 gap-y-14 text-[#fffef2] text-[16px]">
          <div className="border-b-[1.5px] border-[#fffef2] p-2">
            <h2 className="font-[600]">Services</h2>
          </div>
          <div className="border-b-[1.5px] border-[#fffef2] p-2">
            <h2 className="font-[600]">Social Media</h2>
          </div>
          <div>
            <div className="border-b-[1.5px] border-[#fffef2] p-2">
              <h2 className="font-[600]">About Us</h2>
            </div>
            <div className="mt-4">
              <ul className="space-y-5">
                <li>Instagram</li>
                <li>LinkedIn</li>
                <li>Twitter / X</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
