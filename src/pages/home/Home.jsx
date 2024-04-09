import React from "react";
import { useStyles } from "./home.styles";
import { Box, Divider, Grid, IconButton, Typography } from "@mui/material";
import DownloadForOfflineOutlinedIcon from "@mui/icons-material/DownloadForOfflineOutlined";
import { Tabs, Tab } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// const classes = useStyles();
const Home = () => {
  return (
    <>
      <PartOne />
      <PartTwo />
      <PartThree />
    </>
  );
};

const PartOne = () => {
  return (
    <Box
      sx={{
        marginX: "0px",
        padding: "0px",
        backgroundImage:
          "url(https://admissions.mitwpu.edu.in/frontend/assets/images/banner/herosection-banner.webp)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Box
        sx={{
          marginX: "50px",
        }}
      >
        <Grid container direction={"row"}>
          <Grid
            container
            direction={"column"}
            className="Left"
            lg={8}
            sx={{ my: "100px" }}
          >
            <Grid item>
              <Typography
                sx={{
                  fontStyle: "normal",
                  fontSize: "2.5rem",
                  lineHeight: "55px",
                  fontWeight: 400,
                  color: "#fff",
                  width: "70%",
                }}
              >
                Redefining corporate leadership in the dynamic era of new-age
                Bharat.
              </Typography>
            </Grid>
            <Grid item my={2}>
              <Typography
                sx={{
                  fontStyle: "normal",
                  fontSize: "2.2rem",
                  lineHeight: "1.5",
                  fontWeight: "600",
                  color: "#fff",
                  border: "1px solid #fff",
                  borderRadius: "20px",
                  width: "-moz-fit-content",
                  width: "fit-content",
                  padding: "2px 10px",
                  textAlign: "center",
                }}
              >
                <span style={{ color: "orange" }}>#LearnToLead </span>
                Nurturing Knowledge
              </Typography>
            </Grid>
            <Grid item my={4}>
              <img
                src={
                  "https://admissions.mitwpu.edu.in/frontend/assets/images/herobanner-bottom.webp"
                }
                alt=""
                width="70%"
              />
            </Grid>
            <Grid item>
              <Grid container direction={"row"}>
                <Duration title={"10 April 2024"} des={"Last Date To Apply"} />
                <Grid item mx={5}>
                  <Divider
                    orientation="vertical"
                    flexItem
                    style={{
                      backgroundColor: "white",
                      height: "100%",
                      width: "30%",
                    }}
                  />
                </Grid>
                <Duration title={"3 Years"} des={"Full Time"} />
              </Grid>
            </Grid>
          </Grid>
          <Grid container lg={3} className="Right">
            <iframe
              frameborder="0"
              style={{ backgroundColor: "white" }}
              width="100%"
              height="630px"
              sandbox="allow-top-navigation allow-scripts allow-same-origin allow-downloads"
              src="https://widgets.in5.nopaperforms.com/register?&amp;r=https://admissions.mitwpu.edu.in/bba/?utm_source=VidyaVision&amp;utm_medium=Website&amp;utm_campaign=MIT_WPU24&amp;q=utm_sourcenpfeqVidyaVision||utm_mediumnpfeqWebsite||utm_campaignnpfeqMIT_WPU24&amp;w=44a9722717e8a9377a3648f0ea33599d&amp;m=&amp;cu=https://admissions.mitwpu.edu.in/bba/?utm_source=VidyaVision&amp;utm_medium=Website&amp;utm_campaign=MIT_WPU24"
            ></iframe>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
const Duration = ({ title, des }) => {
  return (
    <Grid item>
      <Grid container direction={"column"}>
        <Grid item>
          <Typography
            fontFamily='"Mier A", sans-serif'
            fontStyle="normal"
            fontSize="3rem"
            lineHeight="1"
            color="#fff"
            fontWeight="800"
          >
            {title}
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            fontFamily='"Mier A", sans-serif'
            textAlign="center"
            fontStyle="normal"
            fontSize="1.5rem"
            lineHeight="1.5"
            fontWeight="400"
            color="#fff"
            marginBottom="0"
            textTransform="capitalize"
          >
            {des}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
const PartTwo = () => {
  return (
    <Box
      sx={{
        backgroundImage:
          "url(https://admissions.mitwpu.edu.in/frontend/assets/images/banner/19.webp)",
        color: "#fff",
      }}
    >
      <Box sx={{ marginX: "50px" }}>
        <Grid container lg={8}>
          <Grid item>
            <Grid container>
              <Box
                sx={{
                  fontSize: "1.4rem",
                  lineHeight: "1.5",
                  fontWeight: "400",
                  paddingBottom: "20px",
                }}
              >
                <Grid item>
                  <Typography
                    sx={{
                      fontStyle: "normal",
                      fontSize: "5.4rem",
                      fontWeight: "400",
                      lineHeight: "1.5",
                      marginY: "44px",
                    }}
                  >
                    BBA Programme
                  </Typography>

                  <Typography>
                    Vishwa Vishwani Institute of Management provides a diverse
                    choice of industry-focused BBA degrees that give an in-depth
                    study of management concepts required for successful
                    business organizations. The training programmes are intended
                    to teach you to take into account changing market dynamics,
                    economic trends, and sector-specific needs while using their
                    knowledge to create business success.
                  </Typography>
                  <Typography>
                    As a business management student of VVISM, you are entitled
                    to:
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography>Key Features:</Typography>
                  <Grid item className="keys">
                    <ul>
                      <li>
                        <Typography>
                          Highly qualified faculty with academic and corporate
                          experience
                        </Typography>
                      </li>
                      <li>
                        <Typography>
                          Develop strong managerial, strategic, entrepreneurial,
                          and problem-solving skills for tomorrow's corporate
                          leaders - Learn about changing market dynamics and
                          economic trends.
                        </Typography>
                      </li>
                      {/* <li>
                        <Typography>
                          Opportunities to learn about the changing market
                          dynamics and economic trends
                        </Typography>
                      </li> */}
                    </ul>
                  </Grid>
                  <Typography>
                    Join the Department of Business at VVISM to lay the
                    groundwork for a successful business management career.
                  </Typography>
                </Grid>
                <Grid item>
                  <Box
                    sx={{
                      display: "flex",
                      background: "#fff",
                      fontStyle: "normal",
                      fontSize: "2rem",
                      lineHeight: "1.5",
                      fontWeight: "700",
                      borderRadius: "4rem",
                      padding: "1.2rem 1.6rem",
                      color: "#000",
                      gap: "1rem",
                      cursor: "pointer",
                      width: "20%",
                    }}
                  >
                    <Typography>Download Brochure</Typography>
                    <DownloadForOfflineOutlinedIcon />
                  </Box>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

function PartThree() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        orientation="vertical"
        sx={{
          borderRight: 1,
          borderColor: "divider",
          marginX: "40px",
          paddingX: "50px",
        }}
      >
        <Tab
          label={
            <Box
              sx={{
                display: "flex",
                // alignItems: "center",
                // justifyContent: "space-between",
              }}
            >
              <Grid container>
                <Grid item lg={7}>
                  <Typography>Tab 1</Typography>
                </Grid>
                <Grid item lg={3}>
                  {value === 0 && (
                    <IconButton size="medium">
                      <ArrowForwardIcon />
                    </IconButton>
                  )}
                </Grid>
              </Grid>
            </Box>
          }
          onClick={() => setValue(0)}
          sx={{
            backgroundColor: value === 0 ? "pink" : "inherit",
          }}
        />
        <Tab label="Tab 2" onClick={() => setValue(1)} />
        <Tab label="Tab 3" onClick={() => setValue(2)} />
      </Tabs>
      <Box sx={{ flexGrow: 1 }}>
        <Typography sx={{ p: 2 }} component="div">
          <TabPanel value={value} index={0}>
            Tab 1 content
          </TabPanel>
          <TabPanel value={value} index={1}>
            Tab 2 content
          </TabPanel>
          <TabPanel value={value} index={2}>
            Tab 3 content
          </TabPanel>
        </Typography>
      </Box>
    </Box>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

// const PartThree = () => {
//   return <Grid></Grid>;
// };
// const PartOne = () => {
//   return <Grid sx={classes.container}></Grid>;
// };

export default Home;
