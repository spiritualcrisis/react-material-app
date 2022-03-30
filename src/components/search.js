import React, { useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Button, Chip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { AppContext } from "./DataProvider";
import { saveUserApps } from "../api/index";
import { Icon } from "../icons/appIcons";
export default function Search() {
  const { allApps, addApps } = useContext(AppContext);
  const [value, setValue] = useState(allApps[0]);
  const [inputValue, setInputValue] = useState("");
  const [saving, setSaving] = useState(false);
  const handleUseSelection = (event, value) => {
    if (value !== null) {
      addApps(value.id);
    }
  };

  /// on save Im hiting a local API just to showcase api logic in here Im passing data as it is..can be modified before Stringify

  let addedApps = allApps.filter((item) => item.added === true);
  const onNext = async () => {
    setSaving(true);
    await saveUserApps(addedApps);
    setSaving(false);
  };

  return (
    <div>
      <Chip
        label={`${addedApps.length} of ${allApps.length}`}
        sx={{
          color: "white",
          borderRadius: "4px",
          background: "linear-gradient(to right bottom, #5a6eff, #bd67ff)",
        }}
      />
      <Box sx={{ width: "300px", marginBottom: "20px" }}>
        <Typography mt={2} variant="h5" component="h5">
          Lets add your internal tools
        </Typography>
        <Typography mt={2} mb={2} variant="h6" component="h6">
          Search to quickly add products your team today. You&apos;ll be able to
          add as many as you need later but for now lets add four.
        </Typography>
      </Box>
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
        sx={{ width: "300px", background: "#ccd6f6", padding: "0px" }}
        renderInput={(params) => <TextField {...params} label="" />}
        renderOption={(props, option) => (
          <Box sx={{ padding: "4px" }} component="li" {...props}>
            <Box
              sx={{ width: "15px", marginRight: "10px", alignItems: "center" }}
            >
              <Icon className="icons" name={option.icon} />
            </Box>

            {option.label}
          </Box>
        )}
      />
      <Box>
        <Button
          size="medium"
          onClick={onNext}
          sx={{ marginTop: "10px", minWidth: "300px", padding: "12px" }}
          variant="contained"
        >
          Next
        </Button>
        {saving ? <span>Saving Data ....</span> : <span></span>}
      </Box>
    </div>
  );
}
