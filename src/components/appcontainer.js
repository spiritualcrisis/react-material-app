import React, { useContext, useState, useEffect } from "react";

import Grid from "@mui/material/Grid";

import { AppContext } from "./DataProvider";

const AppContainer = () => {
  const [apps, setApps] = useState([]);
  const { allApps } = useContext(AppContext);
  let minPlaceHolders = 4;
  console.log("apps page", allApps);
  useEffect(() => {
    console.log("render");
    setApps(allApps.filter((item) => item.added === true));
  }, [allApps]);

  if (apps.length < minPlaceHolders) {
    minPlaceHolders = minPlaceHolders - apps.length;
  } else {
    minPlaceHolders = 0;
  }
  let placeHolderArray = [
    { label: "add an app", icon: "plus" },
    { label: "add an app", icon: "plus" },
    { label: "add an app", icon: "plus" },
    { label: "add an app", icon: "plus" },
  ];
  placeHolderArray = placeHolderArray.slice(minPlaceHolders);

  return (
    <div>
      <Grid container spacing={2}>
        {apps.map((app) => {
          return (
            <Grid item xs={12} md={6} key={app.id}>
              {app.label}
            </Grid>
          );
        })}
        {placeHolderArray.map((placeholder, index) => {
          return (
            <Grid item xs={12} md={6} key={index}>
              {placeholder.label}
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default AppContainer;
