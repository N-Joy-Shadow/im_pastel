import React from "react";

interface ILayoutProps {
  children: React.ReactNode;
}


const TalentLayout = ({ children }: ILayoutProps) => {
  return (
    <div className="m-auto z-10 w-[400px] xl:w-[1400px] 2xl:w-[1600px] text-center
min-h-[1000px] rounded-2xl bg-white relative mt-[4.5rem]
    " style={{ boxShadow: "gray 0px 3px 6px 0px" }}> 
        {children}
    </div>
  );
};

export default TalentLayout;
