import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  ImageList,
  ImageListItem,
  Box,
} from "@mui/material";

const items = [
  {
    img: "../../../public/assets/acheive1.png",
    title: "Colors of Being",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ullamcorper mauris urna quis et imperdiet neque. In sit magna blandit porttitor. Ut vitae ornare laoreet porta sed ac malesuada faucibus. Augue orci fringilla sapien fringilla amet. Nisl enim nulla risus malesuada. Gravida amet id ut gravida quam etiam montes lacus egestas. Pellentesque diam gravida leo felis scelerisque. Orci facilisis porttitor sollicitudin mattis ipsum porttitor. Sagittis et amet dignissim volutpat pharetra suspendisse interdum.Lorem ipsum dolor sit amet consectetur. Ullamcorper mauris urna quis et imperdiet neque. In sit magna blandit porttitor. Ut vitae ornare laoreet porta sed ac malesuada faucibus. Augue orci fringilla sapien fringilla amet. Nisl enim nulla risus malesuada. Gravida amet id ut gravida quam etiam montes lacus egestas. Pellentesque diam gravida leo felis scelerisque. Orci facilisis porttitor sollicitudin mattis ipsum porttitor. Sagittis et amet dignissim volutpat pharetra suspendisse interdum.Lorem ipsum dolor sit amet consectetur. Ullamcorper mauris urna quis et imperdiet neque. In sit magna blandit porttitor. Ut vitae ornare laoreet porta sed ac malesuada faucibus. Augue orci fringilla sapien fringilla amet. Nisl enim nulla risus malesuada. Gravida amet id ut gravida quam etiam montes lacus egestas. Pellentesque diam gravida leo felis scelerisque.",
  },
  {
    img: "../../../public/assets/acheive2.png",
    title: "Colors of Being",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ullamcorper mauris urna quis et imperdiet neque. In sit magna blandit porttitor. Ut vitae ornare laoreet porta sed ac malesuada faucibus. Augue orci fringilla sapien fringilla amet. Nisl enim nulla risus malesuada. Gravida amet id ut gravida quam etiam montes lacus egestas. Pellentesque diam gravida leo felis scelerisque. Orci facilisis porttitor sollicitudin mattis ipsum porttitor. Sagittis et amet dignissim volutpat pharetra suspendisse interdum.Lorem ipsum dolor sit amet consectetur. Ullamcorper mauris urna quis et imperdiet neque. In sit magna blandit porttitor. Ut vitae ornare laoreet porta sed ac malesuada faucibus. Augue orci fringilla sapien fringilla amet. Nisl enim nulla risus malesuada. Gravida amet id ut gravida quam etiam montes lacus egestas. Pellentesque diam gravida leo felis scelerisque. Orci facilisis porttitor sollicitudin mattis ipsum porttitor. Sagittis et amet dignissim volutpat pharetra suspendisse interdum.Lorem ipsum dolor sit amet consectetur. Ullamcorper mauris urna quis et imperdiet neque. In sit magna blandit porttitor. Ut vitae ornare laoreet porta sed ac malesuada faucibus. Augue orci fringilla sapien fringilla amet. Nisl enim nulla risus malesuada. Gravida amet id ut gravida quam etiam montes lacus egestas. Pellentesque diam gravida leo felis scelerisque.",
  },
  {
    img: "../../../public/assets/acheive3.png",
    title: "Colors of Being",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ullamcorper mauris urna quis et imperdiet neque. In sit magna blandit porttitor. Ut vitae ornare laoreet porta sed ac malesuada faucibus. Augue orci fringilla sapien fringilla amet. Nisl enim nulla risus malesuada. Gravida amet id ut gravida quam etiam montes lacus egestas. Pellentesque diam gravida leo felis scelerisque. Orci facilisis porttitor sollicitudin mattis ipsum porttitor. Sagittis et amet dignissim volutpat pharetra suspendisse interdum.Lorem ipsum dolor sit amet consectetur. Ullamcorper mauris urna quis et imperdiet neque. In sit magna blandit porttitor. Ut vitae ornare laoreet porta sed ac malesuada faucibus. Augue orci fringilla sapien fringilla amet. Nisl enim nulla risus malesuada. Gravida amet id ut gravida quam etiam montes lacus egestas. Pellentesque diam gravida leo felis scelerisque. Orci facilisis porttitor sollicitudin mattis ipsum porttitor. Sagittis et amet dignissim volutpat pharetra suspendisse interdum.Lorem ipsum dolor sit amet consectetur. Ullamcorper mauris urna quis et imperdiet neque. In sit magna blandit porttitor. Ut vitae ornare laoreet porta sed ac malesuada faucibus. Augue orci fringilla sapien fringilla amet. Nisl enim nulla risus malesuada. Gravida amet id ut gravida quam etiam montes lacus egestas. Pellentesque diam gravida leo felis scelerisque.",
  },
];

const PioneerWorks = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        height: { xs: "auto", md: "auto" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        m: 2,
        overflow: "hidden",
        p: { xs: "0", md: "100px" },
      }}
    >
      <Grid
        container
        spacing={2}
        justifyContent="center"
        sx={{ width: "auto", maxWidth: "100%" }}
      >
        <Grid item xs={12}>
          <Typography
            variant="h2"
            component="h2"
            sx={{ textAlign: "center", my: 2, color: "#B5964D" }}
          >
            Achievements
          </Typography>
        </Grid>
        {items.map((item, index) => (
          <Grid item xs={12} key={index}>
            <Card
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" }, // Responsive flexDirection
                alignItems: "flex-start", // Aligns items at the start of the flex container
                mb: 2,
                bgcolor: "transparent",
                boxShadow: "none",
              }}
            >
              <CardMedia
                component="img"
                sx={{ width: { xs: "100%", sm: 450 }, height: "auto" }} // Responsive width
                image={item.img}
                alt="Achievement image"
              />
              <CardContent sx={{ flexGrow: 1, pt: 0.5 }}>
                {" "}
                {/* Reduced top padding */}
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ color: "#B5964D", fontFamily: "Oswald" }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "white",
                    fontFamily: "Oswald",
                    textAlign: "justify",
                  }}
                >
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PioneerWorks;
