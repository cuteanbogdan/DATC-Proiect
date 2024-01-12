import React from "react";

const Modal = ({ showModal, setShowModal, children }) => {
  if (!showModal) {
    return null;
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    setShowModal(false);
    // Handle form submission here
  };

  return (
    <div
      className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
      id="my-modal"
    >
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="mt-3 text-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Modal Title
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="mt-2 px-7 py-3">
              <label
                htmlFor="dropdown"
                className="block text-sm font-medium text-gray-700"
              >
                Choose an option:
              </label>
              <select
                id="dropdown"
                name="dropdown"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              >
                <option value="groapa">groapa</option>
                <option value="animale periculoase">animale periculoase</option>
                <option value="accident">accident</option>
              </select>
            </div>
            <div className="items-center px-4 py-3">
              <button
                type="submit"
                className="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300"
              >
                Submit
              </button>
            </div>
          </form>
          <div className="items-center px-4 py-3">
            <button
              onClick={() => setShowModal(false)}
              className="px-4 py-2 bg-red-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
