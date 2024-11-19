import Link from "next/link";
import type { PaginationProps } from "../types/character";

export default function Pagination({
  paginationData,
  currentPage,
}: {
  paginationData: PaginationProps;
  currentPage: number;
}) {
  const totalPages = paginationData.pages;
  const startingPages = Math.max(currentPage - 3, 1); // Ensure starting page is at least 1
  const endingPages = Math.min(currentPage + 3, totalPages); // Ensure ending page is at most the total number of pages

  // Generate the previous three page links
  const prevPages = () => {
    const pages = [];
    for (let i = startingPages; i < currentPage; i++) {
      pages.push(
        <li key={i}>
          <Link
            href={`/characters/${i}`}
            className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            {i}
          </Link>
        </li>
      );
    }
    return pages;
  };

  // Generate the next three page links
  const nextPages = () => {
    const pages = [];
    for (let i = currentPage + 1; i <= endingPages; i++) {
      pages.push(
        <li key={i}>
          <Link
            href={`/characters/${i}`}
            className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            {i}
          </Link>
        </li>
      );
    }
    return pages;
  };

  // Render ellipsis if needed
  const renderEllipsis = () => {
    if (totalPages > 7) {
      return <span className="px-4 h-10 leading-tight text-gray-500">...</span>;
    }
    return null;
  };

  return (
    <nav aria-label="Page navigation example" className="mb-3">
      <ul className="flex items-center -space-x-px h-10 text-base">
        {/* Previous Button */}
        {paginationData.prev && (
          <li>
            <Link
              href={paginationData.prev}
              className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Previous</span>
              <svg
                className="w-3 h-3 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
            </Link>
          </li>
        )}

        {/* Previous Pages */}
        {prevPages()}

        {/* Ellipsis if there are many pages */}
        {currentPage - 3 > 1 && renderEllipsis()}

        {/* Current Page */}
        <li>
          <Link
            href={`/characters/${currentPage}`}
            className="flex items-center justify-center px-4 h-10 leading-tight bg-gray-300 text-gray-700 border border-gray-300 dark:bg-gray-700 dark:border-gray-700 dark:text-white"
          >
            {currentPage}
          </Link>
        </li>

        {/* Ellipsis if there are many pages */}
        {currentPage + 3 < totalPages && renderEllipsis()}

        {/* Next Pages */}
        {nextPages()}

        {/* Next Button */}
        {paginationData.next && (
          <li>
            <Link
              href={paginationData.next}
              className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Next</span>
              <svg
                className="w-3 h-3 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
