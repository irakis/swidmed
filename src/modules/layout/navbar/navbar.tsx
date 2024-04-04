import { FC } from "react";
import { Link } from "react-router-dom";
import { AppBar, ListItemAvatar } from "@mui/material";
import { useState } from "react";
import {
  Container,
  List,
  ListItem,
  ListItemButton,
  Collapse,
  ListItemText,
  Box,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import { NavbarSocialMedia } from "./components/navbarSocial.Media";
import { ColapsedMenuPaper } from "./components/colapsedMenuPaper";

export const Navbar: FC = () => {
  const [open, setOpen] = useState(false);

  const handleClick: any = () => {
    setOpen(!open);
  };

  return (
    <AppBar
      sx={{
        position: "fixed",
        "@media (max-width: 576px)": { position: "static", display: "none" },
      }}
      color="inherit"
    >
      <NavbarSocialMedia />
      <Container
        sx={{
          bgcolor: "white",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          padding: 0,
          "@media(max-width: 576px)": { display: "block", fontSize: "90%" },
        }}
      >
        <Box>
          <Link to="/">
            <img width="180px" src="/images/swidmed-logo.svg" alt="logo" />
          </Link>
        </Box>
        <Box>
          <List
            component="nav"
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-center",
              "@media(max-width: 576px)": { display: "block", fontSize: "90%" },
            }}
          >
            <ListItem>
              <Link color="black" to="/">
                <ListItemButton onClick={() => setOpen(false)}>
                  Start
                </ListItemButton>
              </Link>
            </ListItem>
            <ListItem>
              <ListItemButton
                onClick={handleClick}
                sx={{ border: 0.1, borderColor: "#646cff", borderRadius: 3 }}
              >
                <ListItemText>Poradnie</ListItemText>
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List
                component="div"
                disablePadding
                sx={{ alignContent: "flex-start" }}
              >
                <ColapsedMenuPaper action={handleClick} />
              </List>
            </Collapse>

            <ListItem sx={{ textAlign: "center" }}>
              <Link to="/endo_workshop_clinic">
                <ListItemButton onClick={() => setOpen(false)}>
                  {" "}
                  Pracownia endoskopii
                </ListItemButton>
                <ListItemAvatar>
                  <img height={19} src="/logo/nfz2.avif" />
                </ListItemAvatar>
              </Link>
            </ListItem>
            <ListItem sx={{ textAlign: "center" }}>
              <Link to="/documents">
                <ListItemButton onClick={() => setOpen(false)}>
                  Pliki do pobrania
                </ListItemButton>
              </Link>
            </ListItem>
            <ListItem sx={{ textAlign: "center" }}>
              <Link to="/pricing">
                <ListItemButton onClick={() => setOpen(false)}>
                  Opłaty
                </ListItemButton>
                <ListItemAvatar sx={{ justifyContent: "center" }}>
                  <PaidOutlinedIcon color="primary" fontSize="small" />
                </ListItemAvatar>
              </Link>
            </ListItem>
            <ListItem sx={{ textAlign: "center" }}>
              <Link to="/form">
                <ListItemButton onClick={() => setOpen(false)}>
                  Rejestracja
                </ListItemButton>
              </Link>
            </ListItem>
            <ListItem sx={{ textAlign: "center" }}>
              <Link to="/contact">
                <ListItemButton onClick={() => setOpen(false)}>
                  Kontakt
                </ListItemButton>
              </Link>
            </ListItem>
          </List>
        </Box>
      </Container>
    </AppBar>
  );
};
