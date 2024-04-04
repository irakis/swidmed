import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Box, MenuItem, Drawer } from "@mui/material";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  Collapse,
  ListItemText,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import { ColapsedMenuPaper } from "../layout/navbar/components/colapsedMenuPaper.tsx";
import MenuIcon from "@mui/icons-material/Menu";

export const SideBar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setShow(newOpen);
  };

  const handleClick: any = () => {
    setOpen(!open);
  };

  return (
    <Card
      sx={{
        position: "static",
        width: "100%",
        p: 0,
        right: 0,
        zIndex: 10,
        borderRadius: 0,
        boxShadow: 1,
        "@media (min-width: 600px)": { display: "none" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <MenuItem onClick={toggleDrawer(true)}>
          <MenuIcon
            sx={{
              border: 0.1,
              borderColor: "#646cff",
              borderRadius: 1,
              fontSize: 49,
            }}
          />
        </MenuItem>

        <Link to="/">
          <img width="140px" src="/images/swidmed-logo.svg" alt="logo" />
        </Link>
      </Box>
      <Drawer anchor="right" open={show} onClose={toggleDrawer(false)}>
        <List
          component="nav"
          sx={{
            display: "block",
            alignItems: "flex-center",
            "@media(max-width: 576px)": { display: "block", fontSize: "90%" },
          }}
        >
          <ListItem>
            <Link color="black" to="/">
              <ListItemButton
                onClick={() => {
                  setOpen(false);
                }}
              >
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
      </Drawer>
    </Card>
  );
};
