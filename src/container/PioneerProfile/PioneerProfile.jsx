import React from "react";
import {
  Grid,
  Typography,
  Box,
  Card,
  CardMedia,
  IconButton,
  Paper,
} from "@mui/material";
import { Twitter, Facebook, LinkedIn } from "@mui/icons-material";
import profile from "../../../public/assets/profile.png";
const PioneerProfile = () => {
  return (
    <Box sx={{ flexGrow: 1, margin: 4 }}>
      <Typography
        variant="h3"
        gutterBottom
        component="span"
        sx={{ color: "white", fontFamily: "Oswald" }}
      >
        About{" "}
      </Typography>
      <Typography
        variant="h3"
        gutterBottom
        component="span"
        sx={{ color: "#B5964D", fontFamily: "Oswald" }}
      >
        Joseph Saramago
      </Typography>
      <Typography
        variant="h4"
        sx={{ mb: 2, mt: 2, color: "white", fontFamily: "Oswald" }}
      >
        Where Creativity Meets Innovation
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Typography paragraph sx={{ color: "white", fontFamily: "Oswald" }}>
            Lorem ipsum dolor sit amet consectetur. Sem accumsan diam morbi
            facilisi non scelerisque sollicitudin id. Aliquam nulla accumsan
            etiam pharetra aliquet sit tempus sed. Maecenas nibh volutpat in nec
            eget. Massa non mi aliquam turpis at risus consequat tortor.Lorem
            ipsum dolor sit amet consectetur. Eget tellus nibh fermentum elit
            gravida vestibulum. Rhoncus ridiculus et in diam id vitae
          </Typography>
          <Typography paragraph sx={{ color: "white", fontFamily: "Oswald" }}>
            Lorem ipsum dolor sit amet consectetur. Sem accumsan diam morbi
            facilisi non scelerisque sollicitudin id. Aliquam nulla accumsan
            etiam pharetra aliquet sit tempus sed. Maecenas nibh volutpat in nec
            eget. Massa non mi aliquam turpis at risus consequat tortor.Lorem
            ipsum dolor sit amet consectetur. Eget tellus nibh fermentum elit
            gravida vestibulum. Rhoncus ridiculus et in diam id vitae
          </Typography>
          <Typography paragraph sx={{ color: "white", fontFamily: "Oswald" }}>
            Lorem ipsum dolor sit amet consectetur. Sem accumsan diam morbi
            facilisi non scelerisque sollicitudin id. Aliquam nulla accumsan
            etiam pharetra aliquet sit tempus sed. Maecenas nibh volutpat in nec
            eget. Massa non mi aliquam turpis at risus consequat tortor.Lorem
            ipsum dolor sit amet consectetur. Eget tellus nibh fermentum elit
            gravida vestibulum. Rhoncus ridiculus et in diam id vitae
          </Typography>
          <Paper
            elevation={3}
            sx={{ mt: 3, bgcolor: "transparent", boxShadow: "none" }}
          >
            {" "}
            {/* Background color removed */}
            <Typography
              variant="h4"
              sx={{ color: "white", fontFamily: "Oswald" }}
            >
              <span style={{ color: "#B5964D", fontFamily: "Oswald" }}>
                Joseph
              </span>{" "}
              Mission {/* "Joseph" colored differently */}
            </Typography>
            <Typography paragraph sx={{ color: "white", fontFamily: "Oswald" }}>
              To redefine luxury fashion by offering exclusive, handcrafted
              pieces that embody creativity, quality, and elegance. We strive to
              inspire confidence and individuality in every wear.
            </Typography>
          </Paper>
          <Paper
            elevation={3}
            sx={{ mt: 3, bgcolor: "transparent", boxShadow: "none" }}
          >
            {" "}
            {/* Background color removed */}
            <Typography
              variant="h4"
              sx={{ color: "white", fontFamily: "Oswald" }}
            >
              <span style={{ color: "#B5964D", fontFamily: "Oswald" }}>
                Joseph
              </span>{" "}
              Vision {/* "Joseph" colored differently */}
            </Typography>
            <Typography paragraph sx={{ color: "white", fontFamily: "Oswald" }}>
              To redefine luxury fashion by offering exclusive, handcrafted
              pieces that embody creativity, quality, and elegance. We strive to
              inspire confidence and individuality in every wear.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ maxWidth: 545, width: "100%" }}>
            {" "}
            {/* Adjusted width */}
            <CardMedia
              component="img"
              height="450" // Increased height
              image={profile}
              alt="Joseph Saramago"
            />
          </Card>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <IconButton
              aria-label="twitter"
              href="https://twitter.com"
              sx={{ color: "#B5964D" }}
            >
              <Twitter />
            </IconButton>
            <IconButton
              aria-label="facebook"
              href="https://facebook.com"
              sx={{ color: "#B5964D" }}
            >
              <Facebook />
            </IconButton>
            <IconButton
              aria-label="linkedin"
              href="https://linkedin.com"
              sx={{ color: "#B5964D" }}
            >
              <LinkedIn />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PioneerProfile;
