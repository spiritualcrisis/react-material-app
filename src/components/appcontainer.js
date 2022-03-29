import React, { useContext, useState, useEffect } from "react";

import Grid from "@mui/material/Grid";

import { AppContext } from "./DataProvider";
import CustomCard from "./card";

const AppContainer = () => {
  let placeHolderArray = [
    { label: "add an app", icon: "plus" },
    { label: "add an app", icon: "plus" },
    { label: "add an app", icon: "plus" },
    { label: "add an app", icon: "plus" },
  ];
  const [apps, setApps] = useState([]);
  const { allApps } = useContext(AppContext);
  const [placeHolders, setPlaceHolders] = useState(placeHolderArray);
  let minPlaceHolders = 4;

  useEffect(() => {
    setApps(allApps.filter((item) => item.added === true));
    if (apps.length < minPlaceHolders) {
      minPlaceHolders = minPlaceHolders - apps.length;
      console.log(
        apps,
        minPlaceHolders,
        placeHolderArray.slice(0, minPlaceHolders)
      );
      setPlaceHolders(placeHolderArray.slice(minPlaceHolders));
    } else {
      setPlaceHolders([]);
    }
    console.log(apps.length, placeHolderArray, minPlaceHolders);
  }, [allApps]);

  return (
    <div>
      <Grid container spacing={2}>
        {apps.map((app) => {
          return (
            <Grid item xs={12} md={6} key={app.id}>
              <CustomCard cardData={app} />
            </Grid>
          );
        })}
        {placeHolders.length > 0 &&
          placeHolders.map((placeholder, index) => {
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
