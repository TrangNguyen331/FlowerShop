import React, { useState, useEffect } from "react";
import PageTitle from "../components/Typography/PageTitle";
import { Link, NavLink } from "react-router-dom";
import { EditIcon, HomeIcon, TrashIcon } from "../icons";
import {
  Card,
  CardBody,
  Button,
  TableBody,
  TableContainer,
  Table,
  TableHeader,
  TableCell,
  TableRow,
  TableFooter,
  Avatar,
  Badge,
  Pagination,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@windmill/react-ui";
import response from "../utils/demo/productData";
import Icon from "../components/Icon";
import { genRating } from "../utils/genarateRating";
import EditForm from "../components/EditForm";
import { AddIcon } from "../icons";
import "../index.css";
import AddForm from "../components/AddForm";
import { useHistory } from "react-router-dom";
import axiosInstance from "../axiosInstance";
import { fa, tr } from "faker/lib/locales";
const ProductsAll = () => {
  const [view, setView] = useState("list");

  // Table and grid data handlling
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  // pagination setup
  const [resultsPerPage, setResultsPerPage] = useState(2);
  const [totalPage, setTotalPage] = useState(0);
  const [totalResults, setTotalResult] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);
  //const totalResults = response.length;

  // pagination change control

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mode, setMode] = useState(null); // 'add', 'edit', 'delete'
  const [selectedProduct, setSelectedProduct] = useState(null);

  // on page change, load new sliced data
  // here you would make another server request for new data
  const fetchData = async (page) => {
    try {
      console.log("page", page);
      const response = await axiosInstance.get(
        "/api/v1/products/paging?page=" + (page - 1) + "&size=" + resultsPerPage
      );
      console.log("Response data", response.data);
      setData(response.data.content);
      setPage(page);
      setTotalPage(response.data.totalPages);
      setTotalResult(response.data.totalElements);
      setDataLoaded(true);
    } catch (error) {
      console.log("Fetch data error", error);
    }
  };
  useEffect(() => {
    fetchData(1);
    //setData(response.slice((page - 1) * resultsPerPage, page * resultsPerPage));
  }, []);

  async function onPageChange(p) {
    console.log("Trigger on page change");
    await fetchData(p);
  }

  function formatNumberWithDecimal(number) {
    // Convert the number to a string
    const numString = String(number);

    // Split the string into groups of three digits
    const groups = numString.split(/(?=(?:\d{3})+(?!\d))/);

    // Join the groups with a decimal point
    const formattedNumber = groups.join(".");

    return formattedNumber;
  }
  async function openModal(mode, productId) {
    let product = await data.filter((product) => product.id === productId)[0];
    setMode(mode);
    setSelectedProduct(productId);
    setIsModalOpen(true);
  }

  function closeModal() {
    setMode(null);
    setSelectedProduct(null);
    setIsModalOpen(false);
  }
  return (
    <div>
      <PageTitle>All Products</PageTitle>

      {/* Breadcum */}
      <div className="flex text-gray-800 dark:text-gray-300">
        <div className="flex items-center text-purple-600">
          <Icon className="w-5 h-5" aria-hidden="true" icon={HomeIcon} />
          <NavLink exact to="/app/dashboard" className="mx-2">
            Dashboard
          </NavLink>
        </div>
        {">"}
        <p className="mx-2">All Products</p>
      </div>

      {/* Sort */}
      <Card className="mt-5 mb-5 shadow-md">
        <CardBody>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                All Products
              </p>
            </div>

            <div className="flex">
              <Button
                size="large"
                iconLeft={AddIcon}
                className="mx-3"
                onClick={() => openModal("add", null)}
              >
                Add Product
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>

      {/* Product modal */}
      <div className="modal">
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <ModalHeader className="flex items-center text-2xl">
            {mode === "edit" && "Edit Product"}
            {mode === "delete" && "Delete Product"}
            {mode === "add" && "Add New Product"}
          </ModalHeader>
          <ModalBody>
            {mode === "edit" ? (
              <EditForm />
            ) : mode === "delete" ? (
              <p>
                Make sure you want to delete product{" "}
                {selectedProduct && `"${selectedProduct.name}"`}
              </p>
            ) : (
              <AddForm />
            )}
          </ModalBody>
          <ModalFooter>
            <div className="hidden sm:block">
              <Button layout="outline" onClick={closeModal}>
                Cancel
              </Button>
            </div>
            <div className="hidden sm:block">
              {mode === "edit" ? (
                <Button block size="large">
                  Save
                </Button>
              ) : mode === "delete" ? (
                <Button block size="large">
                  Delete
                </Button>
              ) : (
                <Button block size="large">
                  Add Product
                </Button>
              )}
            </div>
          </ModalFooter>
        </Modal>
      </div>

      {/* Product Views */}
      <>
        <TableContainer className="mb-8">
          <Table>
            <TableHeader>
              <tr>
                <TableCell>Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Collections</TableCell>
                <TableCell>Tags</TableCell>
                <TableCell>Action</TableCell>
              </tr>
            </TableHeader>
            <TableBody>
              {data.map((product) => (
                <TableRow
                  key={product.id}
                  className="hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  <TableCell>
                    <div className="flex items-center text-sm">
                      <Link to={`/app/product/${product.id}`}>
                        <Avatar
                          className="hidden mr-4 md:block"
                          src={
                            product &&
                            product.images &&
                            product.images.length > 0
                              ? product.images[0]
                              : ""
                          }
                          alt="Product image"
                        />
                      </Link>
                      <div>
                        <Link to={`/app/product/${product.id}`}>
                          <p className="font-semibold">{product.name}</p>
                        </Link>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="whitespace-normal break-words">
                    {product.description}
                  </TableCell>
                  <TableCell className="text-sm">
                    {formatNumberWithDecimal(product.price)}đ
                  </TableCell>
                  <TableCell className="text-sm space-x-2">
                    {product &&
                    product.collections &&
                    product.collections.length > 0
                      ? product.collections.map((collection, index) => (
                          <Badge type="success" key={index}>
                            {collection}
                          </Badge>
                        ))
                      : ""}
                  </TableCell>
                  <TableCell className="text-sm space-x-2">
                    {product && product.tags && product.tags.length > 0
                      ? product.tags.map((tag, index) => (
                          <Badge type="success" key={index}>
                            {tag}
                          </Badge>
                        ))
                      : ""}
                  </TableCell>
                  <TableCell>
                    <div className="flex">
                      <Button
                        icon={EditIcon}
                        className="mr-3"
                        layout="outline"
                        aria-label="Edit"
                        onClick={() => openModal("edit", product.id)}
                      />

                      <Button
                        icon={TrashIcon}
                        layout="outline"
                        aria-label="Delete"
                        onClick={() => openModal("delete", product.id)}
                      />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <TableFooter>
            {dataLoaded && (
              <Pagination
                totalResults={totalResults}
                resultsPerPage={resultsPerPage}
                label="Table navigation"
                onChange={(page) => onPageChange(page)}
              />
            )}
          </TableFooter>
        </TableContainer>
      </>
    </div>
  );
};

export default ProductsAll;
