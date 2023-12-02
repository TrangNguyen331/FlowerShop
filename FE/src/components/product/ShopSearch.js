import React from "react";

const ShopSearch = () => {
  return (
    <div className="sidebar-widget">
      <h4 className="pro-sidebar-title">Search </h4>
      <div className="pro-sidebar-search mb-50 mt-25">
        <form className="pro-sidebar-search-form" action="#">
          <input
            type="text"
            placeholder="Search here..."
            onFocus={() => console.log("search product")}
          />
          <button>
            <i className="pe-7s-search" disabled />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ShopSearch;
