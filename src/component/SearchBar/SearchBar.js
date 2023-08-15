import React, { useState } from "react";
import s from "./style.module.css";
import { Search as SearchIcon } from "react-bootstrap-icons";
function SearchBar({ onSubmit }) {
  const [value, setValue] = useState("");
  const submit = (e) => {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      onSubmit(e.target.value);
      setValue("");
    }
  };
  return (
    <>
      <SearchIcon size={27} className={s.icon} />
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        onKeyUp={submit}
        className={s.input}
        type="text"
        placeholder="Search a tv show you may like"
      />
    </>
  );
}

export default SearchBar;
