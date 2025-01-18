import { PropsWithChildren } from "react";
import { CssBaseline, Box, Container } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import Link from "next/link";
import FlexBox from "@/components/FlexBox";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box
          sx={{
            bgcolor: "white",
            height: "100vh",
            maxHeight: "100vh",
            display: "flex",
            flexDirection: "column",
          }}>
          <Box sx={{ flex: "0 1 auto" }}>
            <AppBar position="static">
              <Toolbar>
                <FlexBox justify="space-between" align="center" fullWidth>
                  <IconButton
                    component={Link}
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="home"
                    sx={{ mr: 2 }}
                    href="/">
                    <Image
                      src="/float_logo.svg"
                      alt="Float"
                      width={150}
                      height={50}
                    />
                  </IconButton>
                  <FlexBox>
                    <Button
                      href="https://jjrajani.github.io/#/home"
                      target="blank"
                      variant="contained"
                      color="secondary"
                      startIcon={<ContactPageIcon />}>
                      Jenna Rajani
                    </Button>
                    <Button
                      href="https://github.com/jjrajani/float_challenge"
                      target="blank"
                      variant="contained"
                      color="secondary"
                      startIcon={<GitHubIcon />}>
                      Project Repo
                    </Button>
                  </FlexBox>
                </FlexBox>
              </Toolbar>
            </AppBar>
          </Box>
          <Box
            sx={{
              p: 3,
              flex: "0 1 100%",
              overflow: "scroll",
            }}>
            {children}
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Layout;
