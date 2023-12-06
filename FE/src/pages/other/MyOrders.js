import React, { Fragment, useEffect, useState } from "react";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import MetaTags from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import { useSelector } from "react-redux";
import axiosInstance from "../../axiosInstance";
import product from "../shop-product/Product";

const MyOrders = ({ location }) => {
  const token = useSelector((state) => state.auth.token);
  const [orders, setOrders] = useState([]);
  const [currentFilterOrder, setCurrentOrderFilter] = useState([]);

  const formatReadableDate = (date) => {
    const parsedDate = new Date(date);

    // Format the date using Intl.DateTimeFormat
    const formattedDateTime = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    }).format(parsedDate);
    return formattedDateTime;
  };

  const getStatus = (key) => {
    switch (key) {
      case "IN_REQUEST":
        return "In Progress";
      case "PROCESSING":
        return "Processing";
      case "COMPLETED":
        return "COMPLETED";
      default:
        return "";
    }
  };
  const filterOrderByStatus = (orders, status) => {
    if (orders && status) {
      switch (status) {
        case "All":
          return [...orders].sort((a, b) => a.createdDate - b.createdDate);
        case "InProgress":
          return [...orders]
            .filter((x) => x.status === "IN_REQUEST")
            .sort((a, b) => a.createdDate - b.createdDate);
        case "Processing":
          return [...orders]
            .filter((x) => x.status === "PROCESSING")
            .sort((a, b) => a.createdDate - b.createdDate);
        case "Completed":
          return [...orders]
            .filter((x) => x.status === "COMPLETED")
            .sort((a, b) => a.createdDate - b.createdDate);
        default:
          return [...orders].sort((a, b) => a.createdDate - b.createdDate);
      }
    }
    return [];
  };
  const filterOrder = (key) => {
    setCurrentOrderFilter(filterOrderByStatus(orders, key));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/api/v1/orders");

        setOrders((prevOrders) => response.data);
        setCurrentOrderFilter((prevFilter) =>
          filterOrderByStatus(response.data, "All")
        );
      } catch (error) {
        console.log("Fail to load my orders");
      }
    };

    fetchData();
  }, []);
  console.log(orders);
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
                        <Nav.Link
                          eventKey="all"
                          onSelect={() => filterOrder("All")}
                        >
                          <h4>All</h4>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link
                          eventKey="inRequest"
                          onSelect={() => filterOrder("InProgress")}
                        >
                          <h4>In Request</h4>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link
                          eventKey="processing"
                          onSelect={() => filterOrder("Processing")}
                        >
                          <h4>Processing</h4>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link
                          eventKey="completed"
                          onSelect={() => filterOrder("Completed")}
                        >
                          <h4>Completed</h4>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="all">
                        {currentFilterOrder.length > 0 ? (
                          currentFilterOrder.map((order) => (
                            <div className="row" key={order.id}>
                              <div className="col-lg-12">
                                <div className="order-wrap">
                                  <div className="order-product-info">
                                    <div className="order-top">
                                      <ul>
                                        <li>
                                          <div className="order-id-date">
                                            <p>Order ID: {order.id}</p>
                                            <p className="order-datetime">
                                              Order Date:{" "}
                                              {formatReadableDate(
                                                order.createdDate
                                              )}
                                            </p>
                                          </div>
                                        </li>
                                        <li className="order-status">
                                          {getStatus(order.status)}
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="order-middle">
                                      <ul>
                                        {order.details.map((detail) =>
                                          detail.product ? (
                                            <li key={detail.productId}>
                                              <span className="order-middle-left">
                                                {detail.product.name} X{" "}
                                                {detail.quantity}
                                              </span>
                                              <span className="order-price">
                                                {detail.subtotal.toLocaleString(
                                                  "vi-VN"
                                                )}
                                                đ
                                              </span>
                                            </li>
                                          ) : (
                                            ""
                                          )
                                        )}
                                      </ul>
                                    </div>
                                    <div className="order-total-wrap">
                                      <ul>
                                        <li className="order-total">Total</li>
                                        <li>
                                          {order.total.toLocaleString("vi-VN")}đ
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="order-details-link">
                                    <Link
                                      to={
                                        process.env.PUBLIC_URL +
                                        "/order/" +
                                        order.id
                                      }
                                    >
                                      View Details{" "}
                                      <i class="fa fa-long-arrow-right"></i>
                                    </Link>
                                  </div>

                                  <div className="payment-method"></div>
                                </div>
                              </div>
                            </div>
                          ))
                        ) : (
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="item-empty-area text-center">
                                <div className="item-empty-area__icon mb-30">
                                  <i class="fa fa-file-text-o"></i>
                                </div>
                                <div className="item-empty-area__text">
                                  No orders yet
                                  <br />
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </Tab.Pane>
                      <Tab.Pane eventKey="inRequest">
                        {currentFilterOrder.length > 0 ? (
                          currentFilterOrder.map((order) => (
                            <div className="row" key={order.id}>
                              <div className="col-lg-12">
                                <div className="order-wrap">
                                  <div className="order-product-info">
                                    <div className="order-top">
                                      <ul>
                                        <li>
                                          <div className="order-id-date">
                                            <p>Order ID: {order.id}</p>
                                            <p className="order-datetime">
                                              Order Date:{" "}
                                              {formatReadableDate(
                                                order.createdDate
                                              )}
                                            </p>
                                          </div>
                                        </li>
                                        <li className="order-status">
                                          {order.status}
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="order-middle">
                                      <ul>
                                        {order.details.map((detail) => (
                                          <li key={detail.productId}>
                                            <span className="order-middle-left">
                                              {detail.product.name} X{" "}
                                              {detail.quantity}
                                            </span>
                                            <span className="order-price">
                                              {detail.subtotal.toLocaleString(
                                                "vi-VN"
                                              )}
                                              đ
                                            </span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                    <div className="order-total-wrap">
                                      <ul>
                                        <li className="order-total">Total</li>
                                        <li>
                                          {order.total.toLocaleString("vi-VN")}đ
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="order-details-link">
                                    <Link
                                      to={
                                        process.env.PUBLIC_URL +
                                        "/order/" +
                                        order.id
                                      }
                                    >
                                      View Details{" "}
                                      <i class="fa fa-long-arrow-right"></i>
                                    </Link>
                                  </div>

                                  <div className="payment-method"></div>
                                </div>
                              </div>
                            </div>
                          ))
                        ) : (
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="item-empty-area text-center">
                                <div className="item-empty-area__icon mb-30">
                                  <i class="fa fa-file-text-o"></i>
                                </div>
                                <div className="item-empty-area__text">
                                  No orders yet
                                  <br />
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </Tab.Pane>
                      <Tab.Pane eventKey="processing">
                        {currentFilterOrder.length > 0 ? (
                          currentFilterOrder.map((order) => (
                            <div className="row" key={order.id}>
                              <div className="col-lg-12">
                                <div className="order-wrap">
                                  <div className="order-product-info">
                                    <div className="order-top">
                                      <ul>
                                        <li>
                                          <div className="order-id-date">
                                            <p>Order ID: {order.id}</p>
                                            <p className="order-datetime">
                                              Order Date:{" "}
                                              {formatReadableDate(
                                                order.createdDate
                                              )}
                                            </p>
                                          </div>
                                        </li>
                                        <li className="order-status">
                                          {order.status}
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="order-middle">
                                      <ul>
                                        {order.details.map((detail) => (
                                          <li key={detail.productId}>
                                            <span className="order-middle-left">
                                              {detail.product.name} X{" "}
                                              {detail.quantity}
                                            </span>
                                            <span className="order-price">
                                              {detail.subtotal.toLocaleString(
                                                "vi-VN"
                                              )}
                                              đ
                                            </span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                    <div className="order-total-wrap">
                                      <ul>
                                        <li className="order-total">Total</li>
                                        <li>
                                          {order.total.toLocaleString("vi-VN")}đ
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="order-details-link">
                                    <Link
                                      to={
                                        process.env.PUBLIC_URL +
                                        "/order/" +
                                        order.id
                                      }
                                    >
                                      View Details{" "}
                                      <i class="fa fa-long-arrow-right"></i>
                                    </Link>
                                  </div>

                                  <div className="payment-method"></div>
                                </div>
                              </div>
                            </div>
                          ))
                        ) : (
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="item-empty-area text-center">
                                <div className="item-empty-area__icon mb-30">
                                  <i class="fa fa-file-text-o"></i>
                                </div>
                                <div className="item-empty-area__text">
                                  No orders yet
                                  <br />
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </Tab.Pane>
                      <Tab.Pane eventKey="completed">
                        {currentFilterOrder.length > 0 ? (
                          currentFilterOrder.map((order) => (
                            <div className="row" key={order.id}>
                              <div className="col-lg-12">
                                <div className="order-wrap">
                                  <div className="order-product-info">
                                    <div className="order-top">
                                      <ul>
                                        <li>
                                          <div className="order-id-date">
                                            <p>Order ID: {order.id}</p>
                                            <p className="order-datetime">
                                              Order Date:{" "}
                                              {formatReadableDate(
                                                order.createdDate
                                              )}
                                            </p>
                                          </div>
                                        </li>
                                        <li className="order-status">
                                          {order.status}
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="order-middle">
                                      <ul>
                                        {order.details.map((detail) => (
                                          <li key={detail.productId}>
                                            <span className="order-middle-left">
                                              {detail.product.name} X{" "}
                                              {detail.quantity}
                                            </span>
                                            <span className="order-price">
                                              {detail.subtotal.toLocaleString(
                                                "vi-VN"
                                              )}
                                              đ
                                            </span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                    <div className="order-total-wrap">
                                      <ul>
                                        <li className="order-total">Total</li>
                                        <li>
                                          {order.total.toLocaleString("vi-VN")}đ
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="order-details-link">
                                    <Link
                                      to={
                                        process.env.PUBLIC_URL +
                                        "/order/" +
                                        order.id
                                      }
                                    >
                                      View Details{" "}
                                      <i class="fa fa-long-arrow-right"></i>
                                    </Link>
                                  </div>

                                  <div className="payment-method"></div>
                                </div>
                              </div>
                            </div>
                          ))
                        ) : (
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="item-empty-area text-center">
                                <div className="item-empty-area__icon mb-30">
                                  <i class="fa fa-file-text-o"></i>
                                </div>
                                <div className="item-empty-area__text">
                                  No orders yet
                                  <br />
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              </div>
            </Fragment>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default MyOrders;
