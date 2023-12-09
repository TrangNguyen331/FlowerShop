import React, { useState } from "react";
import { Input, Textarea } from "@windmill/react-ui";
import { TagsInput } from "react-tag-input-component";
import {formatNumberWithDecimal} from "../helper/numberhelper";
// import "../index.css";
const EditForm = ({data,onSave,onChancel,onProductChange}) => {
  const handleCollectionsChange =(collections) =>{
    onProductChange("collections",collections)
  }
  const handleTagsChange =(tags) =>{
    onProductChange("tags",tags)
  }
  const handleImagesChange =(images) =>{
    onProductChange("images",images)
  }
  return (
    <form action="#">
      <div>
        <div className="dark:text-white">
          <strong>Product Image</strong>
          <TagsInput
            type="text"
            rows="5"
            className="mb-4 mt-2 text-gray-800 dark:text-gray-300"
            onChange={handleImagesChange}
            value={ data && data.images|| []}
          />
        </div>
        <div className="grid gap-4 mb-4 grid-cols-2">
          <div className="block mb-4 text-sm font-medium text-gray-900 dark:text-white">
            <strong>Product Name</strong>
            <Input
              type="text"
              className="mt-2 bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              onChange={(e) => onProductChange('name', e.target?.value || '')}
              value={ data && data.name || ""}
            />
          </div>
          <div className="block mb-4 text-sm font-medium text-gray-900 dark:text-white">
            <strong>Product Price</strong>
            <Input
              type="text"
              className="mt-2 bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-opacity-0 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              onChange={(e) => onProductChange('price', e.target?.value || '')}
              value={data && data.price || ""}
            />
          </div>
        </div>

        <div className="block mb-4 text-sm font-medium text-gray-900 dark:text-white">
          <strong>Product Collection</strong>
          <TagsInput
            type="text"
            className="mt-2 bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder=""
            onChange={handleCollectionsChange}
            value={data && data.collections || []}
          />
        </div>

        <div className="block mb-4 text-sm font-medium text-gray-900 dark:text-white">
          <strong>Product Tag</strong>
          <TagsInput
            classNames="mt-2"
            onChange={handleTagsChange}
            placeholder="Add tags (press Enter to add)"
            value={data && data.tags || []}
          />
        </div>

        <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          <strong>Product Description</strong>
          <Textarea
            id="description"
            rows="5"
            className="block p-2.5 mt-2 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 bg-transparent bg-opacity-0 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Write a description..."
            onChange={(e) => onProductChange('description', e.target?.value || '')}
            value={data && data.description || ""}
          />
        </div>
      </div>
    </form>
  );
};

export default EditForm;
