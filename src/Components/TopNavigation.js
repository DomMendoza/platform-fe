import React from "react";

function TopNavigation() {
  return (
    <div className="bg-red-200 h-[4rem] flex flex-row-reverse sticky top-0 right-0 left-0">
      <div className="flex justify-center items-center gap-2 px-5 border-2 border-red-600">
        <div>login</div>
        <div>register</div>
      </div>
    </div>
  );
}

export default TopNavigation;
