interface CaseCardProps {
  children: React.ReactNode;
  className?: string;
}

const CaseCard: React.FC<CaseCardProps> = ({ children, className }) => {
  return (
    <div
      className={`w-[550px] h-[450px] text-black rounded-[40px] flex-col
     ${className || ""}`}
    >
      {children}
    </div>
  );
};

export default CaseCard;
