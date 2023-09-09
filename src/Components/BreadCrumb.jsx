import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const BreadCrumb = ({selectedValue, setSelectedValue}) => {
  
  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="w-full container mx-auto p-8 bg-gray-200 fixed top-0 left-0 right-0 z-50">
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          
          <li aria-current="page">
            <div className="flex items-center">
              <svg
                className="w-3 h-3 text-gray-400 mx-1"
                ariaHidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <div>{selectedValue}</div>
              <select
                name="exam-options"
                id="exam-options"
                value={selectedValue}
                onChange={handleSelectChange}
                className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400"
              >
                <option value="Overview">Overview</option>
                <option value="Test Series">Test Series</option>
                <option value="Quizzes">Quizzes</option>
                <option value="Exam Info">Exam Info</option>
                <option value="PYQs">PYQs</option>
              </select>
            </div>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default BreadCrumb;
