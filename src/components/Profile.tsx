import React from "react";

const Profile = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-1 bg-[#252A34] text-white p-5 h-[100vh] laptop:h-[100%] ">
      <div className="flex flex-wrap justify-center gap-3 ">
        <h1 className="font-bold text-8xl">Zheng</h1>
        <h1 className="font-bold text-8xl">Xuan</h1>
      </div>
      <h2 className="box-border pt-2 text-sm text-slate-400">
        journey to fullstack
      </h2>
    </div>
  );
};

export default Profile;
