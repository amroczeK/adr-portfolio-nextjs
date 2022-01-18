import { useState, useContext, useEffect } from "react";
import Fuse from "fuse.js";

export default function Search({ placeholder = "", setSearchResults = (e) => {}, styles = "" }) {
  const [value, setValue] = useState("");

  const options = {
    includeScore: true,
    keys: ["name", "category.name", "categories.name", "searchKeywords"],
  };

  const fuse = new Fuse([], options);

  const onSearch = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    setSearchResults(fuse.search(value));
  }, [value]);

  return (
    <div className={`flex justify-center w-full pb-8`}>
      <form className="flex items-center bg-white w-96 rounded-full px-1.5 py-1 border-0 border-secondary overflow-hidden shadow-lg">
        <label className="search-label">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 my-auto m-2 text-primary-dark"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </label>
        <input
          id="productsearch-input"
          type="search"
          className="block text-base text-gray-700 rounded-md border-0 focus:outline-none focus:ring-0 focus:border-secondary flex-grow p-2"
          placeholder={placeholder}
          value={value}
          onChange={onSearch}
          aria-autocomplete="list"
          aria-labelledby="productsearch-label"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          maxLength={64}
        />
      </form>
    </div>
  );
}
