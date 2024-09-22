import React from "react";

const Sort = () => {
  return (
    <div className="categories-sort py-3 d-flex justify-content-between align-items-center">
      <div className="number-of-categories">
        <span className="pre-title">1 services available</span>
      </div>
      <div className="sort-by">
        <span className="pre-title">Sort by</span>
        <select>
          <option>Relevance</option>
          <option value="bestselling">Best Selling</option>
          <option value="newarrival">New Arrivals</option>
        </select>
      </div>
    </div>
  );
};

export default Sort;
