"use client";

import { useState } from "react";
import { useItemStore } from "../../zustand/item/item";
import Image from "next/image";

export default function ItemUpdateForm() {
  const { itemData, setItemData, resetItemData } = useItemStore();
  const [activeTab, setActiveTab] = useState("default");
  const [imagePreview, setImagePreview] = useState(null);
  const [thumbnailPreview, setThumbnailPreview] = useState(null);

  const handleImageUpload = (e, field) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (field === "image") {
          setImagePreview(reader.result);
        } else {
          setThumbnailPreview(reader.result);
        }
        setItemData(field, file);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex space-x-4">
        <button
          className={`px-4 py-2 ${
            activeTab === "default" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("default")}
        >
          Default
        </button>
        <button
          className={`px-4 py-2 ${
            activeTab === "english" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("english")}
        >
          English
        </button>
        <button
          className={`px-4 py-2 ${
            activeTab === "thai" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("thai")}
        >
          Thai
        </button>
      </div>

      <div className="flex w-full rounded overflow-hidden shadow-lg bg-white px-6 py-4">
        <div className="w-1/2 mr-5">
          <div className="mt-4">
            <label className="block">Name ({activeTab})</label>
            <input
              type="text"
              value={itemData.name}
              onChange={(e) => setItemData("name", e.target.value)}
              className="w-full p-2 border rounded-md"
              placeholder={`New Item (${activeTab})`}
            />
          </div>

          <div className="mt-4">
            <label className="block">Short Description ({activeTab})</label>
            <textarea
              value={itemData.description}
              onChange={(e) => setItemData("description", e.target.value)}
              className="w-full p-2 border rounded-md"
              placeholder={`Short Description (${activeTab})`}
            />
          </div>
        </div>
        <div className="w-1/2">
          <div className="flex space-x-4 mt-6">
            <div className="w-1/2">
              <label className="block">Item Image (Ratio 1:1)</label>
              <div className="border-dashed border-2 rounded-lg p-4 flex justify-center items-center h-40">
                <input
                  type="file"
                  className="hidden"
                  id="imageUpload"
                  accept="image/*"
                  onChange={(e) => handleImageUpload(e, "image")}
                />
                <label htmlFor="imageUpload" className="cursor-pointer">
                  {imagePreview ? (
                    <Image
                      src={imagePreview}
                      alt="Image Preview"
                      width={100}
                      height={100}
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex flex-col items-center">
                      <span>Upload Image</span>
                    </div>
                  )}
                </label>
              </div>
            </div>

            <div className="w-1/2">
              <label className="block">Item Thumbnail (Ratio 1:1)</label>
              <div className="border-dashed border-2 rounded-lg p-4 flex justify-center items-center h-40">
                <input
                  type="file"
                  className="hidden"
                  id="thumbnailUpload"
                  accept="image/*"
                  onChange={(e) => handleImageUpload(e, "thumbnail")}
                />
                <label htmlFor="thumbnailUpload" className="cursor-pointer">
                  {thumbnailPreview ? (
                    <Image
                      src={thumbnailPreview}
                      alt="Thumbnail Preview"
                      width={100}
                      height={100}
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex flex-col items-center">
                      <span>Upload Thumbnail</span>
                    </div>
                  )}
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full rounded overflow-hidden shadow-lg bg-white px-6 py-4 my-5">
        <div className="font-bold">Item details</div>
        <div className="flex w-full">
          <div className="w-1/4  mr-5">
            <label className="block mb-1 font-medium">Store *</label>
            <select
              className="w-full border px-4 py-2 rounded-md"
              placeholder="Select Store"
              value={itemData.store}
              onChange={(e) => setItemData("store", e.target.value)}
            >
              <option value="Store1">Store1</option>
              <option value="Store2">Store2</option>
            </select>
          </div>

          <div className="w-1/4 mr-5">
            <label className="block mb-1 font-medium">Category *</label>
            <select
              className="w-full border px-4 py-2 rounded-md"
              placeholder="Select Store"
              value={itemData.category}
              onChange={(e) => setItemData("category", e.target.value)}
            >
              <option value="Category1">Category1</option>
              <option value="Category2">Category2</option>
            </select>
          </div>
          <div className="w-1/4 mr-5">
            <label className="block mb-1 font-medium">SubCategory</label>
            <select
              className="w-full border px-4 py-2 rounded-md"
              placeholder="Select SubCategory"
              value={itemData.subCategory}
              onChange={(e) => setItemData("subCategory", e.target.value)}
            >
              <option value="SubCategory1">SubCategory1</option>
              <option value="SubCategory2">SubCategory2</option>
            </select>
          </div>
          <div className="w-1/4 mr-5">
            <label className="block mb-1 font-medium">Suitable For</label>
            <select
              className="w-full border px-4 py-2 rounded-md"
              placeholder="Select Condition"
              value={itemData.suitableFor}
              onChange={(e) => setItemData("suitableFor", e.target.value)}
            >
              <option value="Suitable For1">Suitable For1</option>
              <option value="Suitable For2">Suitable For2</option>
            </select>
          </div>
        </div>

        <div className="flex w-full">
          <div className="w-1/4 mr-5">
            <label className="block mb-1 font-medium  h-12">Unit</label>
            <select
              className="w-full border px-4 py-2 rounded-md"
              placeholder="Select Condition"
              value={itemData.unit}
              onChange={(e) => setItemData("unit", e.target.value)}
            >
              <option value="Unit1">Unit1</option>
              <option value="Unit2">Unit2</option>
            </select>
          </div>

          <div className="w-1/4 mr-5">
            <label className="block">Maximum Purchase Quantity Limit</label>
            <input
              type="text"
              value={itemData.maxQ}
              onChange={(e) => setItemData("maxQ", e.target.value)}
              className="w-full p-2 border rounded-md"
              placeholder="Ex:0"
            />
          </div>

          <div className="w-1/4 mr-5 flex items-end">
            <input
              type="checkbox"
              id="isBasicMedicine"
              checked={itemData.basicMed}
              onChange={(e) => setItemData("basicMed", e.target.checked)}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            />
            <label
              htmlFor="isBasicMedicine"
              className="ml-2 text-sm font-medium text-gray-900"
            >
              Is Basic Medicine
            </label>
          </div>

          <div className="w-1/4 mr-5 flex items-end">
            <input
              type="checkbox"
              id="isBasicMedicine"
              checked={itemData.prescriptionReq}
              onChange={(e) => setItemData("prescriptionReq", e.target.checked)}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            />
            <label
              htmlFor="Is prescription required"
              className="ml-2 text-sm font-medium text-gray-900"
            >
              Is prescription required
            </label>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full rounded overflow-hidden shadow-lg bg-white px-6 py-4 my-5">
        <div className="font-bold">Price Information</div>
        <div className="flex w-full">
          <div className="w-1/4 mr-5">
            <label className="block">Price *</label>
            <input
              type="text"
              value={itemData.price}
              onChange={(e) => setItemData("price", e.target.value)}
              className="w-full p-2 border rounded-md"
              placeholder="Ex:0"
            />
          </div>

          <div className="w-1/4 mr-5">
            <label className="block">Total stock</label>
            <input
              type="text"
              value={itemData.totalStock}
              onChange={(e) => setItemData("totalStock", e.target.value)}
              className="w-full p-2 border rounded-md"
              placeholder="Ex:0"
            />
          </div>

          <div className="w-1/4 mr-5">
            <label className="block">Discount type *</label>
            <input
              type="text"
              value={itemData.discountType}
              onChange={(e) => setItemData("discountType", e.target.value)}
              className="w-full p-2 border rounded-md"
              placeholder="Ex:0"
            />
          </div>

          <div className="w-1/4 mr-5">
            <label className="block">Discount (%) *</label>
            <input
              type="text"
              value={itemData.discount}
              onChange={(e) => setItemData("discount", e.target.value)}
              className="w-full p-2 border rounded-md"
              placeholder="Ex:0"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full rounded overflow-hidden shadow-lg bg-white px-6 py-4 my-5">
        <div className="font-bold">Attribute</div>

        <div className="mr-5">
          <label className="block">Attribute </label>
          <input
            type="text"
            value={itemData.attribute}
            onChange={(e) => setItemData("attribute", e.target.value)}
            className="w-full p-2 border rounded-md"
            placeholder="Ex:0"
          />
        </div>
      </div>

      

      {/* Reset and Submit buttons */}
      <div className="mt-6 flex justify-end space-x-4">
        <button
          className="px-4 py-2 bg-gray-400 text-white rounded-md"
          onClick={resetItemData}
        >
          Reset
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
          onClick={() => console.log(itemData)}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
