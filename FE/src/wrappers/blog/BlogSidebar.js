import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BlogSidebar = (props) => {
  const [formData, setFormData] = useState({
    searchValue: ''
  });

  useEffect(() => {
    setFormData({
      ...formData,
      searchValue: '',
    });
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSearch = (event) => {
    event.preventDefault();
    props.onSearchEvent(formData.searchValue);
  }
  return (
    <div className="sidebar-style">
      <div className="sidebar-widget">
        <h4 className="pro-sidebar-title">Search </h4>
        <div className="pro-sidebar-search mb-55 mt-25">
          <form className="pro-sidebar-search-form" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search here..."
              name="searchValue"
              value={formData.searchValue}
              onChange={handleInputChange}
            />
            <button>
              <i className="pe-7s-search" />
            </button>
          </form>
        </div>
      </div>
      <div className="sidebar-widget">
        <h4 className="pro-sidebar-title">Recent Projects </h4>
        <div className="sidebar-project-wrap mt-30">
          <div className="single-sidebar-blog">
            <div className="sidebar-blog-img">
              <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/img/blog/sidebar-1.jpg"
                  }
                  alt=""
                />
              </Link>
            </div>
            <div className="sidebar-blog-content">
              <span>Photography</span>
              <h4>
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                  T- Shart And Jeans
                </Link>
              </h4>
            </div>
          </div>
          <div className="single-sidebar-blog">
            <div className="sidebar-blog-img">
              <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/img/blog/sidebar-2.jpg"
                  }
                  alt=""
                />
              </Link>
            </div>
            <div className="sidebar-blog-content">
              <span>Branding</span>
              <h4>
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                  T- Shart And Jeans
                </Link>
              </h4>
            </div>
          </div>
          <div className="single-sidebar-blog">
            <div className="sidebar-blog-img">
              <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/img/blog/sidebar-3.jpg"
                  }
                  alt=""
                />
              </Link>
            </div>
            <div className="sidebar-blog-content">
              <span>Design</span>
              <h4>
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                  T- Shart And Jeans
                </Link>
              </h4>
            </div>
          </div>
          <div className="single-sidebar-blog">
            <div className="sidebar-blog-img">
              <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/img/blog/sidebar-2.jpg"
                  }
                  alt=""
                />
              </Link>
            </div>
            <div className="sidebar-blog-content">
              <span>Photography</span>
              <h4>
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                  T- Shart And Jeans
                </Link>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
