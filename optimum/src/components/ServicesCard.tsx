import React from "react";

interface ServiceCardProps {
  children?: React.ReactNode;
  className?: string;
}
const ServicesCard: React.FC<ServiceCardProps> = ({ children, className }) => {
  return (
    <div
      className={`h-[12rem] w-[14rem] rounded-tl-3xl rounded-br-3xl ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
};

export default ServicesCard;
