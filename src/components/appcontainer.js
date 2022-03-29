import React, { useContext, useState, useEffect } from "react";

import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { AppContext } from "./DataProvider";

const AppContainer = () => {
  const [apps, setApps] = useState([]);
  const { allApps } = useContext(AppContext);
  let minPlaceHolders = 4;

  useEffect(() => {
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
              <div>{app.label} </div>
            </Grid>
          );
        })}
        {placeHolderArray.map((placeholder) => {
          return (
            <Grid item xs={12} md={6} key={placeholder.id}>
              <div>{placeholder.label}</div>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default AppContainer;
