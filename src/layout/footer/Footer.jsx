import React from "react";
import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ marginX: "50px", background: "black" }}>
      <Grid
        container
        border={1}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: "#e0e0e0",
          fontSize: "2rem",
          lineHeight: "1.5",
          fontWeight: 400,
        }}
      >
        <Grid item lg={9}>
          <Typography fontSize={"16px"}>© 2024 All rights reserved.</Typography>
        </Grid>
        <Grid item lg={3}>
          <Grid item>
            <Box flexDirection={"row"}>
              <Typography fontSize={"16px"}>Privacy Policy</Typography>
              <Typography fontSize={"16px"}>Terms of Service</Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
