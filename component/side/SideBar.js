import Image from "next/image";

const Sidebar = () => {
    return (
        <div className="w-[13%] h-screen">
        <aside className="w-full shadow-lg">
          <div className="flex justify-between p-3">
            <Image
              src="/img/Logo.png" // ใส่โลโก้
              alt="My Logo"
              width={100} 
              height={300}
            />
            <div>&lt;&lt;</div>
          </div>
          <div className="px-2 w-full">
            <label className="flex bg-white border-2 rounded-lg items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 -960 960 960"
                width="20px"
                fill="#5f6368"
                className="ms-4"
              >
                <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
              </svg>
              <input
                type="text"
                placeholder="Search Menu..."
                className="p-2 w-10/12"
              />
            </label>
          </div>
          <nav className="">
            <ul>
              {/* Dashboard */}
              <li className="mt-4">
                <a
                  href="#"
                  className="flex py-2 px-6 text-gray-700 hover:bg-gray-200 gap-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20px"
                    viewBox="0 -960 960 960"
                    width="20px"
                    fill="#A4A4A4"
                  >
                    <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
                  </svg>
                  Dashboard
                </a>
              </li>

              {/* POS Section */}
              <li className="mt-4">
                <h2 className="px-4 text-xs font-bold uppercase text-gray-600">
                  POS Section
                </h2>
                <ul className="mt-1">
                  <li>
                    <a
                      href="#"
                      className="flex py-2 px-6 text-gray-700 hover:bg-gray-200 gap-3"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="20px"
                        viewBox="0 -960 960 960"
                        width="20px"
                        fill="#A4A4A4"
                      >
                        <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
                      </svg>
                      New Sale
                    </a>
                  </li>
                </ul>
              </li>

              {/* Order Management */}
              <li className="mt-4">
                <h2 className="px-4 text-xs font-bold uppercase text-gray-600">
                  Order Management
                </h2>
                <ul className="mt-1">
                  <li>
                    <a
                      href="#"
                      className="flex py-2 px-6 text-gray-700 hover:bg-gray-200 gap-3"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="20px"
                        viewBox="0 -960 960 960"
                        width="20px"
                        fill="#A4A4A4"
                      >
                        <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
                      </svg>
                      Orders
                    </a>
                    <ul className="ml-4">
                      <li>
                        <a
                          href="#"
                          className="block py-1 px-4 text-gray-600 hover:bg-gray-200"
                        >
                          All
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block py-1 px-4 text-gray-600 hover:bg-gray-200"
                        >
                          Scheduled
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block py-1 px-4 text-gray-600 hover:bg-gray-200"
                        >
                          Pending
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block py-1 px-4 text-gray-600 hover:bg-gray-200"
                        >
                          Accepted
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block py-1 px-4 text-gray-600 hover:bg-gray-200"
                        >
                          Processing
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block py-1 px-4 text-gray-600 hover:bg-gray-200"
                        >
                          Order On The Way
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block py-1 px-4 text-gray-600 hover:bg-gray-200"
                        >
                          Delivered
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block py-1 px-4 text-gray-600 hover:bg-gray-200"
                        >
                          Canceled
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block py-1 px-4 text-gray-600 hover:bg-gray-200"
                        >
                          Payment Failed
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block py-1 px-4 text-gray-600 hover:bg-gray-200"
                        >
                          Refunded
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block py-1 px-4 text-gray-600 hover:bg-gray-200"
                        >
                          Offline Payment
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-6 text-gray-700 hover:bg-gray-200"
                    >
                      Orders Refunds
                    </a>
                    <ul className="ml-4">
                      <li>
                        <a
                          href="#"
                          className="block py-1 px-4 text-gray-600 hover:bg-gray-200"
                        >
                          Refund Request
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              {/* Promotion Management */}
              <li className="mt-4">
                <h2 className="px-4 text-xs font-bold uppercase text-gray-600">
                  Promotion Management
                </h2>
                <ul className="mt-1">
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-6 text-gray-700 hover:bg-gray-200"
                    >
                      Campaigns
                    </a>
                    <ul className="ml-4">
                      <li>
                        <a
                          href="#"
                          className="block py-1 px-4 text-gray-600 hover:bg-gray-200"
                        >
                          Basic Campaigns
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block py-1 px-4 text-gray-600 hover:bg-gray-200"
                        >
                          Item Campaigns
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block py-1 px-4 text-gray-600 hover:bg-gray-200"
                        >
                          Banners
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-6 text-gray-700 hover:bg-gray-200"
                    >
                      Coupons
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-6 text-gray-700 hover:bg-gray-200"
                    >
                      Cashback
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-6 text-gray-700 hover:bg-gray-200"
                    >
                      Push Notification
                    </a>
                  </li>
                </ul>
              </li>

              {/* Product Management */}
              <li className="mt-4">
                <h2 className="px-4 text-xs font-bold uppercase text-gray-600">
                  Product Management
                </h2>
                <ul className="mt-1">
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-6 text-gray-700 hover:bg-gray-200"
                    >
                      Categories
                    </a>
                    <ul className="ml-4">
                      <li>
                        <a
                          href="#"
                          className="block py-1 px-4 text-gray-600 hover:bg-gray-200"
                        >
                          Category
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block py-1 px-4 text-gray-600 hover:bg-gray-200"
                        >
                          Sub Category
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block py-1 px-4 text-gray-600 hover:bg-gray-200"
                        >
                          Bulk Import
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block py-1 px-4 text-gray-600 hover:bg-gray-200"
                        >
                          Bulk Export
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-6 text-gray-700 hover:bg-gray-200"
                    >
                      Attributes
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-6 text-gray-700 hover:bg-gray-200"
                    >
                      Units
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-6 text-gray-700 hover:bg-gray-200"
                    >
                      Common Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-6 text-gray-700 hover:bg-gray-200"
                    >
                      Product Setup
                    </a>
                    <ul className="ml-4">
                      <li>
                        <a
                          href="#"
                          className="block py-1 px-4 text-gray-600 hover:bg-gray-200"
                        >
                          Add Now
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block py-1 px-4 text-gray-600 hover:bg-gray-200"
                        >
                          List
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block py-1 px-4 text-gray-600 hover:bg-gray-200"
                        >
                          Product Gallery
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </aside>
      </div>
    );
  };
  
  export default Sidebar;