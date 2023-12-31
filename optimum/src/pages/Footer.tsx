import "../Footer.css";

const Footer = () => {
  function HandleInstagramClick() {
    window.open("https://www.instagram.com/optimum_outreach_/");
  }

  function HandleTwitterClick() {
    window.open("https://twitter.com/OOutreach1/", "_blank");
  }

  function HandleLinkedinClick() {
    window.open("https://www.instagram.com/optimum_outreach_/", "_blank");
  }
  return (
    <div className="bg-[#252525] h-[764px] w-full flex box-border font-DM-sans space-x-20 caret-transparent">
      <div className="p-14 text-[#fffef2] text-16px">
        <div className="border-b-[1.5px] border-[#fffef2]">
          <h2 className="font-[600]">
            Subscribe to Optimum Outreach Communications
          </h2>
        </div>
      </div>
      <div className="flex-col justify-center">
        <div className="gap-x-12 gap-y-14 text-[#fffef2] text-[16px] flex">
          <div>
            <div className="border-b-[1.5px] border-[#fffef2] mt-14 w-[102px]">
              <h2 className="font-[600]">Services</h2>
            </div>
          </div>
          <div>
            <div className="border-b-[1.5px] border-[#fffef2] mt-14 w-[102px]">
              <h2 className="font-[600]">About Us</h2>
            </div>
          </div>
          <div>
            <div className="border-b-[1.5px] border-[#fffef2] mt-14">
              <h2 className="font-[600]">Social Media</h2>
            </div>
            <div className="mt-4">
              <ul className="space-y-5">
                <li>
                  <a
                    onClick={HandleInstagramClick}
                    className="cursor-pointer flex"
                  >
                    Instagram
                    <span>
                      <img
                        src="/src/assets/arrow (1).png"
                        alt="right up arrow"
                        className="h-[28px] cursor-pointer filter invert"
                      />
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    onClick={HandleLinkedinClick}
                    className="flex cursor-pointer"
                  >
                    LinkedIn{" "}
                    <span>
                      <img
                        src="/src/assets/arrow (1).png"
                        alt="right up arrow"
                        className="h-[28px] cursor-pointer filter invert"
                      />
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    onClick={HandleTwitterClick}
                    className="flex cursor-pointer"
                  >
                    Twitter / X{" "}
                    <span>
                      <img
                        src="/src/assets/arrow (1).png"
                        alt="right up arrow"
                        className="h-[28px] cursor-pointer filter invert"
                      />
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
