import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ParticlesBg from "particles-bg";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Info from "./Info";
import { Link } from "@mui/material";
// import pageLogo from "../assets/images/LinhLe_logo-removebg.png";

const drawerWidth = 240;
const navItems = ["Projects", "About me", "Skills"];

const theme = createTheme({
  components: {
    // Name of the component
    MuiTypography: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontFamily: '"Raleway", sans-serif',
        },
      },
    },
  },
});

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        variant="h6"
        sx={{
          my: 2,
          fontFamily: '"Raleway", sans-serif',
        }}
      >
        Linh Le
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item}
            disablePadding
            sx={{
              fontFamily: '"Raleway", sans-serif',
            }}
          >
            <ListItemButton
              sx={{
                textAlign: "center",
                fontFamily: '"Raleway", sans-serif',
              }}
            >
              <ThemeProvider theme={theme}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  underline="none"
                  color="inherit"
                >
                  <ListItemText primary={item} />
                </Link>
              </ThemeProvider>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }} className="header">
      <ParticlesBg type="polygon" bg={true} />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: { sm: "none" },
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                sm: "block",
              },
              fontFamily: '"Raleway", sans-serif',
            }}
          >
            Linh Le
            {/* <img
            src={pageLogo}
            sx={{
              width: "10%",
              height: "10%",
            }}
          /> */}
          </Typography>
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "block",
              },
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{
                  color: "#fff",
                  textTransform: "none",
                  fontFamily: '"Raleway", sans-serif',
                }}
              >
                <a href={`#${item.toLowerCase()}`}>{item}</a>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: {
              xs: "block",
              sm: "none",
            },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 0 }}>
        <Toolbar />
      </Box>
      <Info />
    </Box>
  );
}

export default Header;
