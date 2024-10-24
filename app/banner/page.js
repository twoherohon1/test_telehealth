// app/banner/page.js
"use client";

import { useBannerStore } from "../../zustand/store/bannerStore";
import { useState } from "react";
import Image from "next/image";

export default function AddBanner() {
  const {
    bannerDataList,
    setBannerData,
    addNewBanner,
    resetBanner,
    removeBanner,
  } = useBannerStore();
  const [imagePreview, setImagePreview] = useState(null);

  const [imagePreviews, setImagePreviews] = useState({}); // Store previews for each banner

  const handleImageUpload = (id, event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreviews((prevPreviews) => ({
          ...prevPreviews,
          [id]: reader.result, // Set the preview image for the specific banner id
        }));

        // Set the image file in the banner's state
        setBannerData(id, 'image', file);
      };
      reader.readAsDataURL(file);
    }
  };


  const handleSubmit = () => {
    // Handle submit logic here
    console.log(bannerDataList);
  };

  return (
    <div className=" mx-auto p-8 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6">Add New Banner</h1>
      <span className="font-bold mb-6">Banner Info</span>
      <div>{bannerDataList[0].id}</div>
      {bannerDataList.map((bannerData) => (
        <div key={bannerData.id} className="my-4 p-4 border rounded-md">
          <div className="flex  w-full">
            <div className="w-1/2">
              <div>
                <label className="block mb-1 font-medium">Title</label>
                <input
                  type="text"
                  className="w-full border px-4 py-2 rounded-md"
                  value={bannerData.title}
                  onChange={(e) =>
                    setBannerData(bannerData.id, "title", e.target.value)
                  }
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Zone</label>
                <select
                  className="w-full border px-4 py-2 rounded-md"
                  value={bannerData.zone}
                  onChange={(e) =>
                    setBannerData(bannerData.id, "zone", e.target.value)
                  }
                >
                  <option value="Zone1">Zone1</option>
                  <option value="Zone2">Zone2</option>
                </select>
              </div>

              <div>
                <label className="block mb-1 font-medium">Banner Type</label>
                <select
                  className="w-full border px-4 py-2 rounded-md"
                  value={bannerData.bannerType}
                  onChange={(e) =>
                    setBannerData(bannerData.id, "bannerType", e.target.value)
                  }
                >
                  <option value="Promotion">Promotion</option>
                  <option value="Announcement">Announcement</option>
                </select>
              </div>
            </div>
            <div className="w-1/2 flex justify-center">
              <div className="w-1/2">
                <label className="block mb-1 font-medium">Banner Image</label>
                <div className="border-2 border-dashed rounded-lg p-4 flex justify-center items-center h-3/4">
                  <input
                    type="file"
                    className="hidden"
                    id={`imageUpload-${bannerData.id}`} // Unique ID for each input field
                    accept="image/*"
                    onChange={(e) => handleImageUpload(bannerData.id, e)} // Handle image upload for specific banner
                  />
                  <label
                    htmlFor={`imageUpload-${bannerData.id}`}
                    className="cursor-pointer"
                  >
                    {imagePreviews[bannerData.id] ? (
                      <Image
                        src={imagePreviews[bannerData.id]}
                        alt="Banner Preview"
                        width={200}
                        height={100}
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex flex-col items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="51px"
                          viewBox="0 -960 960 960"
                          width="46px"
                          fill="#e8eaed"
                        >
                          <path d="M260-160q-91 0-155.5-63T40-377q0-78 47-139t123-78q25-92 100-149t170-57q117 0 198.5 81.5T760-520q69 8 114.5 59.5T920-340q0 75-52.5 127.5T740-160H520q-33 0-56.5-23.5T440-240v-206l-64 62-56-56 160-160 160 160-56 56-64-62v206h220q42 0 71-29t29-71q0-42-29-71t-71-29h-60v-80q0-83-58.5-141.5T480-720q-83 0-141.5 58.5T280-520h-20q-58 0-99 41t-41 99q0 58 41 99t99 41h100v80H260Zm220-280Z" />
                        </svg>
                      </div>
                    )}
                  </label>
                </div>
              </div>
            </div>
            {/* <button onClick={() => resetBanner(bannerData.id)} className="mr-2 bg-gray-300 p-2 rounded-md">
            Reset
          </button>
          <button onClick={() => removeBanner(bannerData.id)} className="bg-red-500 text-white p-2 rounded-md">
            Remove
          </button> */}
          </div>

          <div className="flex">
            <div className="mr-5">
              <label className="block mb-1 font-medium">Date</label>
              <input
                type="date"
                className="border px-4 py-2 rounded-md"
                value={bannerData.startDate}
                onChange={(e) =>
                  setBannerData(bannerData.id, "startDate", e.target.value)
                }
              />
            </div>
            <div className="mr-5">
              <div className="block mb-1 font-medium">Date</div>
              <input
                type="date"
                className="border px-4 py-2 rounded-md"
                value={bannerData.endDate}
                onChange={(e) =>
                  setBannerData(bannerData.id, "endDate", e.target.value)
                }
              />
            </div>
            <div>
              <div className="block mb-1 font-medium h-6"></div>
              <input
                type="text"
                className="border px-4 py-2 rounded-md"
                value={bannerData.link}
                placeholder="เพิ่มลิงค์ (ไม่จำเป็น)"
                onChange={(e) =>
                  setBannerData(bannerData.id, "link", e.target.value)
                }
              />
            </div>
          </div>
        </div>
      ))}

      <div className="mt-6 space-x-4 flex justify-end w-full my-4">
        <button
          onClick={resetBanner}
          className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md w-32"
        >
          Reset
        </button>
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-blue-600 text-white rounded-md  w-32"
        >
          Submit
        </button>
      </div>
      <div
        className="w-full flex justify-center  "
        onClick={() => addNewBanner()}
      >
        <div className="w-72 border-dashed rounded-sm border-2 flex justify-center items-center h-56 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e8eaed"
          >
            <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
