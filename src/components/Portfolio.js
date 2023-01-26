import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Typography,
  cardContentClasses,
  avatarClasses,
  cardMediaClasses,
} from "@mui/material";
import { FavoriteBorderRounded, Share } from "@mui/icons-material";

const styles = {
  maxWidth: 304,
  margin: "auto",
  boxShadow: "rgb(0 0 0 / 12%) 0px 0px 20px 0px",
  transition: "all 0.3s ease 0s",
  [`& .${cardMediaClasses.root}`]: {
    width: "100%",
    clipPath: "polygon(0px 0px, 100% 0%, 100% 84%, 0% 100%)",
    paddingBottom: "56.25%",
    backgroundColor: "rgba(0, 0, 0, 0.08)",
  },
  [`& .${cardContentClasses.root}`]: {
    padding: 3,
  },
  [`& .${avatarClasses.root}`]: {
    width: 50,
    height: 50,
    border: "2px solid #fff",
    margin: "-48px 32px 0 auto",
    [`& .${avatarClasses.img}`]: {
      margin: 0,
    },
  },
};

export const Portfolio = React.memo(function PostCard() {
  return (
    <Card sx={styles}>
      <CardMedia
        image={
          "https://images.unsplash.com/photo-1517147177326-b37599372b73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2229&q=80"
        }
      />
      <Avatar src={"https://i.pravatar.cc/300"} />
      <CardContent>
        <Typography variant="h4" fontSize="20px" fontWeight="bold" marginBottom="0.4em">
          First Snow Storm
        </Typography>
        <Typography variant="body1" fontSize="16px" color="rgba(0,0,0,0.72)">
          Snow storm coming in Sommaroy island, Arctic Norway. This is something that you definitely
          wanna see in your life.
        </Typography>
      </CardContent>
      <Box px={2} pb={2} mt={-1}>
        <IconButton>
          <Share />
        </IconButton>
        <IconButton>
          <FavoriteBorderRounded />
        </IconButton>
      </Box>
    </Card>
  );
});

export default Portfolio;
