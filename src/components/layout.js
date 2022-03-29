import React, { useContext } from "react";

import { AppContext } from "./DataProvider";

import { Button, Chip, Container, Grid, Typography } from "@mui/material";
import AppContainer from "./appcontainer";
import Header from "./header";
import Search from "./search";
import { borderRadius } from "@mui/system";

const Layout = () => {
  const { allApps } = useContext(AppContext);
  const handleSendData = () => {};
  return (
    <Container maxWidth="lg" sx={{ mt: 30 }} spacing={4}>
      <Header />
      <Grid container spacing={4}>
        <Grid item md={6} xs={12} order={{ lg: 1, xs: 2 }}>
          <AppContainer />
        </Grid>
        <Grid item md={6} xs={12} order={{ lg: 2, xs: 1 }}>
          <div className="mb-2 mt-10 ">
            <Chip
              label={`1 of ${allApps.length}`}
              sx={{
                color: "white",
                borderRadius: "4px",
                background:
                  "linear-gradient(to right bottom, #5a6eff, #bd67ff)",
              }}
            />
          </div>
          <Typography mt={2} variant="h5" component="h5">
            Lets add your internal tools
          </Typography>
          <Typography mt={2} variant="h6" component="h6">
            Search to quickly add products your team today. You&apos;ll be able
            to add as many as you need later but for now lets add four.
          </Typography>
          <Search />
          <Button
            size="medium"
            onClick={handleSendData}
            sx={{ marginTop: "10px" }}
            variant="contained"
          >
            Next
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Layout;
