import { FC } from "react";
import { Link } from "react-router-dom";
import { ListItemAvatar } from "@mui/material";
import { List, ListItem, Box } from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";

export const NavbarSocialMedia: FC = () => {
  return (
    <Box
      sx={{
        bgcolor: "white",
        width: "100%",
        display: "flex",
        justifyContent: "end",
        "@media (max-width: 576px)": { display: "block" },
      }}
    >
      <List
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: 0,
        }}
      >
        <ListItem>
          <ListItemAvatar>
            <Link to="#">
              <FacebookRoundedIcon sx={{ fontSize: 29 }} color="primary" />
            </Link>
          </ListItemAvatar>
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Link to="#">
              <img height={29} src="/logo/POL_BIP_icon.svg.png" />
            </Link>
          </ListItemAvatar>
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <img height={29} src="/logo/nfz_logo_A_kolor-min.jpg" />
          </ListItemAvatar>
        </ListItem>
      </List>
    </Box>
  );
};
