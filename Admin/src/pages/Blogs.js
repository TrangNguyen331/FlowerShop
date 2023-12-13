import React from "react";
import PageTitle from "../components/Typography/PageTitle";
import { Link, NavLink } from "react-router-dom";
import { EditIcon, HomeIcon, TrashIcon, AddIcon } from "../icons";
import Icon from "../components/Icon";
import "../index.css";
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
  Pagination,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@windmill/react-ui";
const Blogs = () => {
  return (
    <div>
      <PageTitle>Blogs</PageTitle>

      {/* Breadcum */}
      <div className="flex text-gray-800 dark:text-gray-300">
        <div className="flex items-center text-purple-600">
          <Icon className="w-5 h-5" aria-hidden="true" icon={HomeIcon} />
          <NavLink exact to="/app/dashboard" className="mx-2">
            Dashboard
          </NavLink>
        </div>
        {">"}
        <p className="mx-2">Blogs</p>
      </div>

      {/* Add */}
      <div className="flex items-center justify-end mt-5 mb-5">
        <div className="flex">
          <Button
            size="large"
            iconLeft={AddIcon}
            className="mx-3"
            // onClick={() => openModal("add", null)}
          >
            Add Blog
          </Button>
        </div>
      </div>

      {/* Blog Views */}
      <TableContainer className="mb-8">
        <Table>
          <TableHeader className="text-center">
            <tr>
              <TableCell>Image</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Content</TableCell>
              <TableCell>Author</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Action</TableCell>
            </tr>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
              <TableCell>
                <div className="flex items-center text-sm">
                  <img
                    className="hidden w-44 h-36 md:block"
                    src="https://lh3.googleusercontent.com/drive-viewer/AK7aPaBJZ7_4uGCyb1HLroiPYQUhyNagQJNMHG3lEvKrGKqil3cautL0F6UA6owxX-hg3h4Ab0PJ8zGKaEaGnnTr2MLpVcgeEQ=s2560"
                    alt="Blog image"
                  />
                </div>
              </TableCell>
              <TableCell className="whitespace-normal break-words font-semibold">
                Impedit corporis fugit unde beatae
              </TableCell>
              <TableCell className="whitespace-normal break-words font-semibold">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Impedit corporis fugit unde beatae, sint modi perferendis rerum
                molestias reiciendis veniam odit harum, assumenda ducimus
                architecto culpa repellendus, iure quisquam pariatur.
              </TableCell>
              <TableCell className="text-sm">author</TableCell>
              <TableCell className="text-sm">
                <div className="flex">
                  <span
                    className="px-2 inline-flex text-xs leading-5
                      font-semibold rounded-full bg-green-100 text-green-700 dark:bg-green-700 dark:text-green-100 mb-2 mt-2"
                  >
                    category
                  </span>
                </div>
              </TableCell>
              <TableCell>
                <span className="text-base">13/12/2023</span>
              </TableCell>
              <TableCell>
                <div className="flex">
                  <Button
                    icon={EditIcon}
                    className="mr-3"
                    layout="outline"
                    aria-label="Edit"
                    // onClick={() => openModal("edit", product.id)}
                  />
                  <Button
                    icon={TrashIcon}
                    layout="outline"
                    aria-label="Delete"
                    // onClick={() => openModal("delete", product.id)}
                  />
                </div>
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
              <TableCell>
                <div className="flex items-center text-sm">
                  <img
                    className="hidden w-44 h-36 md:block"
                    src="https://lh3.googleusercontent.com/drive-viewer/AK7aPaBaSpdSeg07MreesitMDZFPWCVlYmeHCifP9VxYzcB1-Fv2kKeKCFMkRnuq2magTMBFBYIsZVq9BJK761h7v00l0BCZ=s2560"
                    alt="Blog image"
                  />
                </div>
              </TableCell>
              <TableCell className="whitespace-normal break-words font-semibold">
                Impedit corporis fugit unde beatae
              </TableCell>
              <TableCell className="whitespace-normal break-words font-semibold">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Impedit corporis fugit unde beatae, sint modi perferendis rerum
                molestias reiciendis veniam odit harum, assumenda ducimus
                architecto culpa repellendus, iure quisquam pariatur.
              </TableCell>
              <TableCell className="text-sm">author</TableCell>
              <TableCell className="text-sm">
                <div className="flex">
                  <span
                    className="px-2 inline-flex text-xs leading-5
                      font-semibold rounded-full bg-green-100 text-green-700 dark:bg-green-700 dark:text-green-100 mb-2 mt-2"
                  >
                    category
                  </span>
                </div>
              </TableCell>
              <TableCell>
                <span className="text-base">13/12/2023</span>
              </TableCell>
              <TableCell>
                <div className="flex">
                  <Button
                    icon={EditIcon}
                    className="mr-3"
                    layout="outline"
                    aria-label="Edit"
                    // onClick={() => openModal("edit", product.id)}
                  />
                  <Button
                    icon={TrashIcon}
                    layout="outline"
                    aria-label="Delete"
                    // onClick={() => openModal("delete", product.id)}
                  />
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        {/* <TableFooter>
          {dataLoaded && (
            <Pagination
              totalResults={totalResults}
              resultsPerPage={resultsPerPage}
              label="Table navigation"
              onChange={(page) => onPageChange(page)}
            />
          )}
        </TableFooter> */}
      </TableContainer>
    </div>
  );
};

export default Blogs;
