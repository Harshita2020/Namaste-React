import React from "react";

const Shimmer = () => {
  return (
    <>
          <div className="shimmer-search">
        {/* <button className="filter-btn" onClick={handleFilter}>
          {" "}
          Top Rated Restaurants{" "}
        </button> */}
      </div>

    <div className="shimmer-container">
      <div className="m-4 p-4 w-[300px] h-[200px] flex flex-wrap bg-gray-100 rounded-lg hover:bg-gray-200"></div>
      <div className="m-4 p-4 w-[300px] h-[200px] flex flex-wrap bg-gray-100 rounded-lg hover:bg-gray-200"></div>
      <div className="m-4 p-4 w-[300px] h-[200px] flex flex-wrap bg-gray-100 rounded-lg hover:bg-gray-200"></div>
      <div className="m-4 p-4 w-[300px] h-[200px] flex flex-wrap bg-gray-100 rounded-lg hover:bg-gray-200"></div>
      <div className="m-4 p-4 w-[300px] h-[200px] flex flex-wrap bg-gray-100 rounded-lg hover:bg-gray-200"></div>
    </div>
    </>
  );
};

export default Shimmer;
