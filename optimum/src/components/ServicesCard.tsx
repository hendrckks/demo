import React from "react";

interface ServiceCardProps {
  children?: React.ReactNode;
  className?: string;
}
const ServicesCard: React.FC<ServiceCardProps> = ({ children, className }) => {
  return (
    <div
      className={`h-[14rem] sm:mt-12 mt-6 w-[20rem] text-white text-[13px] font-medium rounded-tl-3xl rounded-br-3xl hover:bg-gradient-to-br from-[#4c1a57] to-[#00a8aa] shadow-lg hover:scale-110 transition-transform duration-200 ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
};

export default ServicesCard;
