import { CiLocationOn } from "react-icons/ci";

const Search = ({
  query,
  setQuery,
  onClick,
}: {
  query: string;
  setQuery: (val: string) => void;
  onClick: () => void;
}) => {
  return (
    <form
      className="mx-auto shadow-lg my-10"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <CiLocationOn />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Mockups, Logos..."
        />
        <button
          type="button"
          onClick={() => onClick()}
          className="text-white absolute end-2.5 top-[50%] translate-y-[-50%]  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default Search;
