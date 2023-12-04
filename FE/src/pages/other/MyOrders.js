import React, { Fragment } from "react";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import MetaTags from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { Link } from "react-router-dom";

const MyOrders = ({ location, orderItems }) => {
  console.log("MyOrder page");
  const { pathname } = location;
  return (
    <Fragment>
      <MetaTags>
        <title>Orders</title>
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Orders
      </BreadcrumbsItem>

      <LayoutOne headerTop="visible">
        <Breadcrumb />
        <div className="cart-main-area pt-90 pb-100">
          <div className="container">
            {orderItems && orderItems.length >= 1 ? (
              <Fragment>
                <h3 className="cart-page-title">Your orders</h3>
                <div className="row">
                  <div className="col-12">
                    <div className="table-content table-responsive cart-table-content"></div>
                  </div>
                </div>
              </Fragment>
            ) : (
              <div className="row">
                <div className="col-lg-12">
                  <div className="item-empty-area text-center">
                    <div className="item-empty-area__icon mb-30">
                      <i class="fa fa-file-text-o"></i>
                    </div>
                    <div className="item-empty-area__text">
                      You dont't have any orders in history <br />
                      <Link to={process.env.PUBLIC_URL + "/cart"}>
                        Checkout Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default MyOrders;
