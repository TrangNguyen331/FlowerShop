import React, { Fragment } from "react";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import MetaTags from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";

const Order = ({ location }) => {
  console.log("Order details page");
  const { pathname } = location;
  return (
    <Fragment>
      <MetaTags>
        <title>Orders</title>
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/my-order"}>
        Back to list
      </BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Order Details
      </BreadcrumbsItem>

      <LayoutOne headerTop="visible">
        <Breadcrumb />
        <div className="order-main-area pt-90 pb-100">
          <div className="container">
            <Fragment>
              <div className="row">
                <div className="col-lg-6 col-md-4">
                  <div className="order-wrap">
                    <div className="order-product-info">
                      <div className="order-top">
                        <ul>
                          <li>
                            <div className="order-id-date">
                              <p>Order ID: 656f2c927aa517073fd97539</p>
                              <p className="order-datetime">
                                Order Date: 05.12.2023
                              </p>
                            </div>
                          </li>
                          {/* <li className="order-status">IN PROGRESS</li> */}
                          <li>
                            <div className="order-status-qty">
                              <p className="order-status">IN PROGRESS</p>
                              <p>2 Products</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="order-middle">
                        <ul>
                          <li>
                            <span className="order-middle-left">Subtotal</span>
                            <span className="order-price">50.000 đ</span>
                          </li>
                        </ul>
                      </div>
                      <div className="order-bottom">
                        <ul>
                          <li>
                            <span className="order-bottom-left">Shipping</span>
                            <span>Free</span>
                          </li>
                          <li>
                            <span className="order-bottom-left">
                              Payment Method
                            </span>
                            <span>Paypal</span>
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

                    <div className="payment-method"></div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-4">
                  <div className="order-wrap">
                    <div className="order-product-info">
                      <div className="order-top">
                        <h4>Shipping Address</h4>
                      </div>
                      <div className="order-details-middle">
                        <ul>
                          <li>
                            <span>Full Name</span>
                          </li>
                          <li>
                            <p>
                              East Tejturi Bazar, Word No. 04, Road No. 13/x,
                              House no. 1320/C, Flat No. 5D, Dhaka - 1200,
                              Bangladesh
                            </p>
                          </li>
                          <li>
                            <span>Phone:</span> 1-202-555-0118
                          </li>
                          <li>
                            <span>Email:</span> name@gmail.com
                          </li>
                        </ul>
                      </div>
                      <div className="order-bottom">
                        <ul>
                          <h4>Order notes</h4>
                          <li>
                            <p>
                              Donec ac vehicula turpis. Aenean sagittis est eu
                              arcu ornare, eget venenatis purus lobortis.
                              Aliquam erat volutpat. Aliquam magna odio.
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-lg-12">
                  <div className="table-content table-responsive cart-table-content">
                    <table>
                      <thead>
                        <tr>
                          <th>Image</th>
                          <th>Product Name</th>
                          <th>Unit Price</th>
                          <th>Qty</th>
                          <th>Subtotal</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="product-thumbnail">
                            <img
                              className="img-fluid"
                              src="https://lh3.googleusercontent.com/drive-viewer/AK7aPaC_maXEt68lGIACi3R2ZPbYHUCVhqV9JMmvRlYCi-FxvB_gYo15tveaLrVfMGq5vI0JPsOa7L4rRbPOnEff0vzclrdR=s2560"
                              alt=""
                            />
                          </td>
                          <td className="product-name text-center">
                            Pink Gerbera
                          </td>
                          <td className="product-price-cart">
                            <span className="amount">123.000đ</span>
                          </td>
                          <td className="product-quantity text-center">x1</td>
                          <td className="product-subtotal">123.000đ</td>
                        </tr>
                        <tr>
                          <td className="product-thumbnail">
                            <img
                              className="img-fluid"
                              src="https://lh3.googleusercontent.com/drive-viewer/AK7aPaC_maXEt68lGIACi3R2ZPbYHUCVhqV9JMmvRlYCi-FxvB_gYo15tveaLrVfMGq5vI0JPsOa7L4rRbPOnEff0vzclrdR=s2560"
                              alt=""
                            />
                          </td>
                          <td className="product-name text-center">
                            Baby Flower
                          </td>
                          <td className="product-price-cart">
                            <span className="amount">123.000đ</span>
                          </td>
                          <td className="product-quantity text-center">x2</td>
                          <td className="product-subtotal">246.000đ</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </Fragment>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default Order;
