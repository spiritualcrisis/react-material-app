import React from "react";

import { Container, Grid } from "@mui/material";
import AppContainer from "./appcontainer";
import Header from "./header";
import Search from "./search";

const Layout = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 30 }} spacing={4}>
      <Header />
      <Grid container spacing={4}>
        <Grid item md={6} xs={12} order={{ lg: 1, xs: 2 }}>
          <AppContainer />
        </Grid>
        <Grid item md={6} xs={12} order={{ lg: 2, xs: 1 }}>
          <Search />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Layout;
