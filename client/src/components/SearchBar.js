import React, { useState } from "react";
import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    const newFilter = data.filter((value) => {
      return value.Ticket_Type.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord == "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };
  return (
    <div className="search">
      <div className="searchInputs"></div>
      <input type="text" placeholder={placeholder} onChange={handleFilter} />
      <span>
        <FaSearch />
      </span>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a className="dataItem" href={value.link} target="_blank">
                <p>{value.Ticket_Type}</p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
