import { useState } from "react";

const PostPage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div>
      {/* Modal toggle */}
      <button
        onClick={openModal}
        className="buttonPost cursor-pointer flex w-full items-center mt-4 justify-center rounded-md bg-sky-700 px-5 py-2.5 font-medium hover:bg-sky-800 focus:outline-none focus:ring-1 focus:ring-sky-300 dark:bg-sky-600 dark:hover:bg-sky-500 dark:focus:ring-sky-800 hover:underline text-blue-950 text-xl"
        type="button"
      >
        Create Your Post
      </button>

      {/* Main modal */}
      {modalOpen && (
        <div
          id="crud-modal"
          className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"
          onClick={closeModal} // Close modal only if clicking outside the modal content
        >
          <div
            className="relative p-4 w-full max-w-md"
            onClick={stopPropagation} // Prevent closing when clicking inside the modal content
          >
            {/* Modal content */}
            <div className="relative text-white  bg-white rounded-lg shadow dark:bg-gray-700">
              {/* Modal header */}
              <div className="flex items-center justify-between p-4 border-b rounded-t">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200">
                  Create Your Post
                </h3>
                <button
                  onClick={closeModal}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 dark:text-white rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                  type="button"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {/* Modal body */}
              <form className="p-4">
                <div className="grid gap-4 mb-4 grid-cols-2">
                  <div className="col-span-2">
                    <label
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      htmlFor="user_avatar"
                    >
                      Choose Image Or Video
                    </label>
                    <input
                      className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                      aria-describedby="user_avatar_help"
                      id="user_avatar"
                      type="file"
                    />
                  </div>

                  <div className="col-span-2">
                    <label
                      htmlFor="description"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Post Description
                    </label>
                    <textarea
                      id="description"
                      rows="4"
                      className="block p-2.5 w-full text-sm text-gray-900  bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Write a Brief Description about Your post"
                    ></textarea>
                  </div>
                </div>
                <div className="flex justify-center items-center mt-4">
                  <button
                    type="submit"
                    className="mx-3 mt-4 focus:outline-none text-white bg-lime-700 hover:bg-lime-800 focus:ring-1 focus:ring-lime-300  rounded-full text-base px-8 py-2.5 me-2  dark:bg-lime-600 dark:text-lime-950 font-bold dark:hover:bg-lime-600 dark:focus:ring-lime-900"
                  >
                    Confirm Post
                  </button>
                  <button
                    type="button"
                    onClick={closeModal} // Close modal on cancel button click
                    className="mx-3 mt-4 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-1 focus:ring-red-300 font-bold rounded-full text-base px-8 py-2.5 me-2  dark:bg-[#bc2a20] dark:hover:bg-red-600 dark:text-red-950 dark:focus:ring-red-900"
                  >
                    Cancel Post
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostPage;
