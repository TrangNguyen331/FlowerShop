import PropTypes from "prop-types";
import React, { Fragment, useEffect, useState } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import BlogSidebar from "../../wrappers/blog/BlogSidebar";
// import BlogComment from "../../wrappers/blog/BlogComment";
import BlogPost from "../../wrappers/blog/BlogPost";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import NotFound from "../other/NotFound";
import axiosInstance from "../../axiosInstance";

const BlogDetailsStandard = ({ location }) => {
  const { pathname } = location;
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(
          "/api/v1/blogs/" + id
        );
        setData(response.data);
      } catch (error) {
        return (
          <Fragment>
            <NotFound path={"/blog-details-standard/" + id}></NotFound>
          </Fragment>
        )
      } finally {
        setLoading(false); // Set loading to false regardless of success or error
      }
    };
    fetchData();
  }, []);
  return (
    <Fragment>
      <MetaTags>
        <title>Floravibe | Blog Post</title>
        <meta
          name="description"
          content="Blog post page of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Blog Post
      </BreadcrumbsItem>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <LayoutOne>
          {/* breadcrumb */}
          <Breadcrumb />
          <div className="blog-area pt-100 pb-100">
            <div className="container">
              <div className="row flex-row-reverse">
                <div className="col-lg-9">
                  <div className="blog-details-wrapper ml-20">
                    {/* blog post */}
                    <BlogPost blogData={data} />

                    {/* blog post comment */}
                    {/* <BlogComment /> */}
                  </div>
                </div>
                <div className="col-lg-3">
                  {/* blog sidebar */}
                  <BlogSidebar />
                </div>
              </div>
            </div>
          </div>
        </LayoutOne>
      )}
    </Fragment>
  );
};

BlogDetailsStandard.propTypes = {
  location: PropTypes.object,
};

export default BlogDetailsStandard;
