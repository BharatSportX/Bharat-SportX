import React, { useState } from 'react';

function PostPage() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <button
        onClick={toggleModal}
        className="flex w-full items-center mt-4 justify-center rounded-md bg-sky-700 px-5 py-2.5 font-medium hover:bg-sky-800 focus:outline-none focus:ring-1 focus:ring-sky-300 dark:bg-sky-600 dark:hover:bg-sky-500 dark:focus:ring-sky-800 hover:underline text-blue-950 text-xl"
      >
        Create Your Post
      </button>

      {showModal ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-gray-900 bg-opacity-50">
          <div className="relative w-full max-w-lg px-2 mx-auto bg-white rounded-lg shadow-lg">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h1 className="text-lg font-medium text-black">Modal title</h1>
              <button
                type="button"
                className="text-gray-500 hover:text-gray-700"
                onClick={toggleModal}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="p-4 px-6 text-black">...</div>
            <div className="flex items-center justify-end p-4 border-t border-gray-200">
              <button
                type="button"
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
                onClick={toggleModal}
              >
                Close
              </button>
              <button
                type="button"
                className="px-4 py-2 ml-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default PostPage;
