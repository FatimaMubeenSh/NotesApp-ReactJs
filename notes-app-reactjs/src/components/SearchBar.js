import { MdSearch } from "react-icons/md";

export default function SearchBar({ handleSearchText }) {
  return (
    <div className="search-bar">
      <MdSearch />
      <input type="text" placeholder="Type here to search ..." onChange={(event) => handleSearchText(event.target.value)}></input>
    </div>
  );
}
