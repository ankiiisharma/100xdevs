import { useEffect, useState } from "react";
import React from "react";

function useDebounce(inputValue, timeout) {
  const [debouncevalue, setDebouncedvalue] = useState(inputValue);

  useEffect(() => {
    let timeoutNumber = setTimeout(() => {
      setDebouncedvalue(inputValue);
    }, timeout);

    return () => {
      clearTimeout(timeoutNumber);
    };
  }, [inputValue]);

  return debouncevalue;
}

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const debouncevalue = useDebounce(inputValue, 500);

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="search here"
      />

      <h4> debounced value is {debouncevalue} </h4>
    </>
  );
};

function Debounce() {
  return (
    <>
      <SearchBar />
    </>
  );
}

export default Debounce;
