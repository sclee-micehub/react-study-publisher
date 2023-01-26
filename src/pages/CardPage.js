import { Stack, Link as MuiLink } from "@mui/material";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import { cards } from "../components/CardDisplay";

const CardPage = () => {
  return (
    <div>
      <Stack direction="row" gap={2} m={2}>
        {cards.map(c => (
          <MuiLink component={Link} to={c.name} key={c.name}>
            {c.label}
          </MuiLink>
        ))}
      </Stack>
      <Outlet />
    </div>
  );
};

export default CardPage;
