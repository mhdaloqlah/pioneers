import React from "react";
import { Box, Grid, Button, CardMedia } from "@mui/material";
import Hundred from "../../../public/assets/hundred.png";

const Pioneers = () => {
  return (
    <Box
      className="top__section app__wrapper"
      id="pioneers"
      sx={{ width: "100%", height: "100vh", p: 2 }}
    >
      <Grid
        container
        spacing={2}
        sx={{ width: "100%", height: "100%", position: "relative" }}
      >
        <h1 className="headtext__cormorant">Pioneers</h1>

        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
          <CardMedia
            component="img"
            image={Hundred}
            alt="Descriptive Alt Text"
            sx={{
              width: { xs: "90%", md: "60%" },
              height: "auto",
              objectFit: "contain",
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Box sx={{ position: "absolute", bottom: 20, right: 20 }}>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#b5964d",
                "&:hover": { bgcolor: "darkgoldenrod" },
              }}
            >
              See More
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Pioneers;
