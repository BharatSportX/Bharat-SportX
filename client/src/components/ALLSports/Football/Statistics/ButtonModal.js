import React, { Fragment, useRef } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { CSVLink } from 'react-csv';
// import jsPDF from 'jspdf';
import 'jspdf-autotable'; // Import the autoTable plugin
// import { toPng } from 'html-to-image';

export default function ButtonModal({ tableData, tableRef }) {
  const csvLinkRef = useRef(null);

  const handleDownload = async (format) => {
    if (format === 'csv') {
      // CSV download
      csvLinkRef.current.link.click();
    } else if (format === 'pdf') {
      // PDF download
    //   const doc = new jsPDF();
    //   doc.autoTable({ html: tableRef.current });
    //   doc.save('table_data.pdf');
    alert("We are working on it");
    } else if (format === 'image') {
      // Image download
    //   const dataUrl = await toPng(tableRef.current);
    //   const link = document.createElement('a');
    //   link.download = 'table_data.png';
    //   link.href = dataUrl;
    //   link.click();
    alert("We are working on it");
    }
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Download Data
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => handleDownload('csv')}
                  className={`${
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                >
                  CSV
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => handleDownload('pdf')}
                  className={`${
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                >
                  PDF
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => handleDownload('image')}
                  className={`${
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                >
                  Image
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>

      {/* Hidden CSV link */}
      <CSVLink
        ref={csvLinkRef}
        className="hidden"
        data={tableData}
        filename={'table_data.csv'}
      >
        Download CSV
      </CSVLink>
    </Menu>
  );
}
