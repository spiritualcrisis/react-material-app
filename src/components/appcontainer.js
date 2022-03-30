import React, { useContext, useState, useEffect } from "react";

import Grid from "@mui/material/Grid";

import { AppContext } from "./DataProvider";
import CustomCard from "./card";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const AppContainer = () => {
  //@todo Save in the CONSTANT FILE
  let placeHolderArray = [
    { label: "add an app", icon: "plus" },
    { label: "add an app", icon: "plus" },
    { label: "add an app", icon: "plus" },
    { label: "add an app", icon: "plus" },
  ];
  const [apps, setApps] = useState([]);
  const { allApps } = useContext(AppContext);
  const [placeHolders, setPlaceHolders] = useState(placeHolderArray);

  useEffect(() => {
    let minPlaceHolders = 4;
    setApps(allApps.filter((item) => item.added === true));
    let addedApps = allApps.filter((item) => item.added === true);
    console.log(apps.length);
    if (addedApps.length <= minPlaceHolders) {
      minPlaceHolders = minPlaceHolders - addedApps.length;
      setPlaceHolders(placeHolderArray.slice(0, minPlaceHolders));
    } else {
      setPlaceHolders([]);
    }
  }, [allApps]);

  return (
    <div>
      <Grid container spacing={2}>
        {apps.map((app) => {
          return (
            <Grid item xs={12} md={6} key={app.id}>
              <CustomCard cardData={app} type="apps" />
            </Grid>
          );
        })}
        {placeHolders.length > 0 &&
          placeHolders.map((placeholder, index) => {
            return (
              <Grid item xs={12} md={6} key={index}>
                <CustomCard cardData={placeholder} type="placeholders" />
              </Grid>
            );
          })}
      </Grid>
      <Box mt={4} sx={{ textAlign: "center" }}>
        <Typography>{apps.length} Products added</Typography>
      </Box>
    </div>
  );
};

export default AppContainer;
