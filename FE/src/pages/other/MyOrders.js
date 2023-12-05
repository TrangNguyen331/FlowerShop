import React, { Fragment } from "react";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import MetaTags from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Tab from "react-bootstrap/Tab";

const MyOrders = ({ location, orderItems, order }) => {
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
        <div className="order-main-area pt-90 pb-100">
          <div className="container">
            <Fragment>
              <h3 className="order-page-title">Your order history</h3>
              <div className="row">
                <div className="col-12">
                  <Tab.Container defaultActiveKey="all">
                    <Nav
                      variant="pills"
                      className="order-tab-list-5 pt-30 pb-55 text-center"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="all">
                          <h4>All Orders</h4>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="inRequest">
                          <h4>In Request</h4>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="processing">
                          <h4>Processing</h4>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="completed">
                          <h4>Completed</h4>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="all">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="order-wrap">
                              <div className="order-product-info">
                                <div className="order-top">
                                  <ul>
                                    <li>
                                      <div className="order-id-date">
                                        <p>Order ID: 123456</p>
                                        <p className="order-datetime">
                                          Order Date: 04.12.2022, 14:02
                                        </p>
                                      </div>
                                    </li>
                                    <li className="order-status">Processing</li>
                                  </ul>
                                </div>
                                <div className="order-middle">
                                  <ul>
                                    <li>
                                      <span className="order-middle-left">
                                        White Baby Flower X 2
                                      </span>
                                      <span className="order-price">
                                        100.000đ
                                      </span>
                                    </li>
                                    <li>
                                      <span className="order-middle-left">
                                        Blue Baby Flower X 1
                                      </span>
                                      <span className="order-price">
                                        200.000đ
                                      </span>
                                    </li>
                                  </ul>
                                </div>

                                <div className="order-total-wrap">
                                  <ul>
                                    <li className="order-total">Total</li>
                                    <li>100.000đ</li>
                                  </ul>
                                </div>
                              </div>
                              <div className="order-details-link">
                                <Link>
                                  View Details{" "}
                                  <i class="fa fa-long-arrow-right"></i>
                                </Link>
                              </div>

                              <div className="payment-method"></div>
                            </div>
                            <div className="order-wrap">
                              <p>all</p>
                            </div>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="inRequest">
                        <div className="row">
                          <div className="col-lg-12">
                            <p>in request</p>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="processing">
                        <div className="row">
                          <div className="col-lg-12">
                            <p>Processing</p>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="completed">
                        <div className="row">
                          <div className="col-lg-12">
                            <p>Completed</p>
                          </div>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              </div>
            </Fragment>
            {/* {orderItems && orderItems.length >= 1 ? (
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
            )} */}
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default MyOrders;
