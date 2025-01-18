import { PropsWithChildren } from "react";
import { CssBaseline, Box, Container } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import Link from "next/link";
// interface LayoutProps extends PropsWithChildren {}

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box sx={{ bgcolor: "white", height: "100vh" }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                component={Link}
                size="large"
                edge="start"
                color="inherit"
                aria-label="home"
                sx={{ mr: 2 }}
                href="/">
                <HomeIcon />
              </IconButton>
              <Button color="inherit">Float Challenge</Button>
            </Toolbar>
          </AppBar>
          <Box sx={{ p: 3 }}>{children}</Box>
        </Box>
      </Container>
    </>
  );
};

export default Layout;
