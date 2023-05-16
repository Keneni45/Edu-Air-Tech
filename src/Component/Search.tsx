import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";

interface SearchProps {
  onSearch: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        placeholder="Search"
        type="text"
        value={query}
        variant="outlined"
        onChange={handleInputChange}
        InputProps={{
          startAdornment: <SearchSharpIcon style={{ color: "white" }} />,
        }}
        style={{
          borderRadius: "10px",
          marginTop: "10px",
          background: "rgb(93, 90, 136)",
          marginRight: "30px",
          color: "rgb(255,255,255)",
          width: "150px",
        }}
      />
    </form>
  );
};

export default Search;
