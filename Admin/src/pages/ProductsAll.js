import React, { useState, useEffect } from "react";
import PageTitle from "../components/Typography/PageTitle";
import { Link, NavLink } from "react-router-dom";
import {
  EditIcon,
  EyeIcon,
  GridViewIcon,
  HomeIcon,
  ListViewIcon,
  TrashIcon,
} from "../icons";
import {
  Card,
  CardBody,
  Label,
  Select,
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
const ProductsAll = () => {
  const [view, setView] = useState("grid");

  // Table and grid data handlling
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  // pagination setup
  const [resultsPerPage, setResultsPerPage] = useState(10);
  const totalResults = response.length;

  // pagination change control
  function onPageChange(p) {
    setPage(p);
  }

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    setData(response.slice((page - 1) * resultsPerPage, page * resultsPerPage));
  }, [page, resultsPerPage]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [mode, setMode] = useState(null); // 'add', 'edit', 'delete'
  const [selectedProduct, setSelectedProduct] = useState(null);

  // async function openModal(productId) {
  //   let product = await data.filter((product) => product.id === productId)[0];
  //   // console.log(product);
  //   setSelectedDeleteProduct(product);
  //   setIsModalOpen(true);
  // }
  async function openModal(mode, productId) {
    let product = await data.filter((product) => product.id === productId)[0];
    setMode(mode);
    setSelectedProduct(product);
    setIsModalOpen(true);
  }

  function closeModal() {
    setMode(null);
    setSelectedProduct(null);
    setIsModalOpen(false);
  }

  // Handle list view
  const handleChangeView = () => {
    if (view === "list") {
      setView("grid");
    }
    if (view === "grid") {
      setView("list");
    }
  };

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

              <Label className="mx-3">
                <Select className="py-3">
                  <option>Sort by</option>
                  <option>Asc</option>
                  <option>Desc</option>
                </Select>
              </Label>

              <Label className="mx-3">
                <Select className="py-3">
                  <option>Filter by Category</option>
                  <option>Electronics</option>
                  <option>Cloths</option>
                  <option>Mobile Accerssories</option>
                </Select>
              </Label>

              <Label className="mr-8">
                {/* <!-- focus-within sets the color for the icon when input is focused --> */}
                <div className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400">
                  <input
                    className="py-3 pr-5 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                    placeholder="Number of Results"
                    value={resultsPerPage}
                    onChange={(e) => setResultsPerPage(e.target.value)}
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center mr-3 pointer-events-none">
                    {/* <SearchIcon className="w-5 h-5" aria-hidden="true" /> */}
                    Results on {`${view}`}
                  </div>
                </div>
              </Label>
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
              <Button
                icon={view === "list" ? ListViewIcon : GridViewIcon}
                className="p-2"
                aria-label="Edit"
                onClick={handleChangeView}
              />
            </div>
          </div>
        </CardBody>
      </Card>

      {/* Delete product modal */}
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
      {view === "list" ? (
        <>
          <TableContainer className="mb-8">
            <Table>
              <TableHeader>
                <tr>
                  <TableCell>Name</TableCell>
                  <TableCell>Stock</TableCell>
                  <TableCell>Rating</TableCell>
                  <TableCell>QTY</TableCell>
                  <TableCell>Price</TableCell>
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
                            src={product.photo}
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
                    <TableCell>
                      <Badge type={product.qty > 0 ? "success" : "danger"}>
                        {product.qty > 0 ? "In Stock" : "Out of Stock"}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm">
                      {genRating(product.rating, product.reviews.length, 5)}
                    </TableCell>
                    <TableCell className="text-sm">{product.qty}</TableCell>
                    <TableCell className="text-sm">{product.price}</TableCell>
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
              <Pagination
                totalResults={totalResults}
                resultsPerPage={resultsPerPage}
                label="Table navigation"
                onChange={onPageChange}
              />
            </TableFooter>
          </TableContainer>
        </>
      ) : (
        <>
          {/* Car list */}
          <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-8">
            {data.map((product) => (
              <div className="" key={product.id}>
                <Card>
                  <img
                    className="object-cover w-full"
                    src={product.photo}
                    alt="product"
                  />
                  <CardBody>
                    <div className="mb-3 flex items-center justify-between">
                      <p className="font-semibold truncate  text-gray-600 dark:text-gray-300">
                        {product.name}
                      </p>
                      <Badge
                        type={product.qty > 0 ? "success" : "danger"}
                        className="whitespace-nowrap"
                      >
                        <p className="break-normal">
                          {product.qty > 0 ? `In Stock` : "Out of Stock"}
                        </p>
                      </Badge>
                    </div>

                    <p className="mb-2 text-purple-500 font-bold text-lg">
                      {product.price}
                    </p>

                    <p className="mb-8 text-gray-600 dark:text-gray-400">
                      {product.shortDescription}
                    </p>

                    <div className="flex items-center justify-between">
                      <div>
                        <Link to={`/app/product/${product.id}`}>
                          <Button
                            icon={EyeIcon}
                            className="mr-3"
                            aria-label="Preview"
                            size="small"
                          />
                        </Link>
                      </div>
                      <div>
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
                    </div>
                  </CardBody>
                </Card>
              </div>
            ))}
          </div>

          <Pagination
            totalResults={totalResults}
            resultsPerPage={resultsPerPage}
            label="Table navigation"
            onChange={onPageChange}
          />
        </>
      )}
    </div>
  );
};

export default ProductsAll;
