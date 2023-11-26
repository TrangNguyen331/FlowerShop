import React, { useEffect } from "react";


const BlogPagination = (props) => {
  const itemList = [];
  const selectedItem = props.selectedPage;
  for (let i = 0; i <= props.totalPage; i++) {
    itemList.push(i);
  }
  return (
    <div className="pro-pagination-style text-center mt-20">
      <ul>
        <li>
          <button className="prev" onClick={props.onPreviousEvent}>
            <i className="fa fa-angle-double-left" />
          </button>
        </li>
        {
          itemList.map((item) => {
            if (item === selectedItem) {
              return (
                <li key={item}>
                  <button className="active" onClick={() => props.onSelectPageEvent(item)}>{item}</button>
                </li>
              )
            } else {
              return (
                <li key={item}>
                  <button onClick={() => props.onSelectPageEvent(item)}>{item}</button>
                </li>
              )
            }
          })
        }
        <li>
          <button className="next" onClick={props.onNextEvent}>
            <i className="fa fa-angle-double-right" />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default BlogPagination;
