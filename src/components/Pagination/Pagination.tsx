import { paginauopnProps } from "../../types";

const Pagination = ({ totalPages, currentPage = 1, onChange }: paginauopnProps) => {
  const pages: number[] = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav aria-label="Page navigation example">
      <ul className="flex items-center -space-x-px h-10 text-base justify-center mt-5">
        <li>
          <button
            className="flex items-center justify-center px-3 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            disabled={currentPage <= 1}
            onClick={() => onChange(currentPage - 1)}
          >
            Previous
          </button>
        </li>
        {pages.map((num) => {
          return currentPage + 4 >= num && num >= currentPage - 4 ? (
            <li className="transition-all " key={num}>
              <button
                onClick={() => onChange(num)}
                className={`flex transition-all items-center  justify-center px-4 h-10 leading-tight text-gray-500 ${
                  currentPage == num
                    ? "bg-blue-500 text-white"
                    : "bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                } border border-gray-300 `}
              >
                {num}
              </button>
            </li>
          ) : null;
        })}

        <li>
          <button
            className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            disabled={currentPage >= totalPages}
            onClick={() => onChange(currentPage + 1)}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
