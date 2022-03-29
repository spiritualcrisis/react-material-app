import React, { useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import { AppContext } from "./DataProvider";

export default function Search() {
  const { allApps, addApps } = useContext(AppContext);
  console.log(allApps);
  const [value, setValue] = useState(allApps[0]);
  const [inputValue, setInputValue] = useState("");
  const handleUseSelection = (event, value) => {
    if (value !== null) {
      addApps(value.id);
    }
  };

  return (
    <div>
      <Autocomplete
        getOptionDisabled={(option) => option.added}
        value={value}
        onChange={handleUseSelection}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="size-small-filled-multi"
        options={allApps}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="" />}
      />
    </div>
  );
}
