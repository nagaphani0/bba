import React from "react";
import Grid from "@mui/material/Grid";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useStyles } from "./header.styles";
import Container from "@mui/material/Container";
import { Box } from "@mui/material";
//

const classes = useStyles();
const Header = () => {
  return (
    <>
      <Box sx={{ marginX: "50px" }}>
        <Grid container>
          <Grid item lg={10}>
            <img
              src={
                "https://admissions.mitwpu.edu.in/frontend/assets/images/logo.svg"
              }
              style={{ height: "101px", width: "121px" }}
              alt=""
            />
          </Grid>
          <Grid item lg={2}>
            <Grid
              container
              spacing={5}
              justifyContent="center"
              // alignItems="center"
            >
              <Grid item>
                <WhatsAppIcon sx={classes.socMedia} />
              </Grid>
              <Grid item>
                <CallIcon sx={classes.socMedia} />
              </Grid>
              <Grid item>
                <EmailIcon sx={classes.socMedia} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Header;
