import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="border-4 border-blue-500 border-solid rounded-full animate-spin h-10 w-10 mb-4"></div>
      <p className="text-blue-500 text-xl">Loading...</p>
    </div>
  );
};

export default Loading;
