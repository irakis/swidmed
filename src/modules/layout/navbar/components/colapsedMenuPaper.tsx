import { FC } from "react";
import { Link } from "react-router-dom";
import { ListItemAvatar } from "@mui/material";
import { ListItem, Paper } from "@mui/material";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";

interface Props {
  action: any;
}

export const ColapsedMenuPaper: FC<Props> = ({ action }) => {
  return (
    <Paper elevation={4} sx={{ position: "relative", zIndex: 2 }}>
      <ListItem sx={{ textAlign: "center" }}>
        <Link onClick={action} to="/endoscope_clinic">
          Poradnia endoskopii
        </Link>
        <ListItemAvatar>
          <img height={19} src="/logo/nfz2.avif" />
        </ListItemAvatar>
      </ListItem>
      <ListItem sx={{ textAlign: "center" }}>
        <Link onClick={action} to="/gastro_clinic">
          Poradnia gastroenterologiczna
        </Link>
        <ListItemAvatar sx={{ justifyContent: "center" }}>
          <PaidOutlinedIcon color="primary" fontSize="small" />
        </ListItemAvatar>
      </ListItem>
      <ListItem sx={{ textAlign: "center" }}>
        <Link onClick={action} to="/addiction_clinic">
          Poradnia leczenia uzależnień
        </Link>
        <ListItemAvatar sx={{ justifyContent: "center" }}>
          <PaidOutlinedIcon color="primary" fontSize="small" />
        </ListItemAvatar>
      </ListItem>
      <ListItem sx={{ textAlign: "center" }}>
        <Link onClick={action} to="/sexual_clinic">
          Poradnia seksuologiczna
        </Link>
        <ListItemAvatar sx={{ justifyContent: "center" }}>
          <PaidOutlinedIcon color="primary" fontSize="small" />
        </ListItemAvatar>
      </ListItem>
      <ListItem sx={{ textAlign: "center" }}>
        <Link onClick={action} to="/children_clinic">
          Poradnia psychologiczna dla dzieci
        </Link>
        <ListItemAvatar sx={{ justifyContent: "center" }}>
          <PaidOutlinedIcon color="primary" fontSize="small" />
        </ListItemAvatar>
      </ListItem>
      <ListItem sx={{ textAlign: "center" }}>
        <Link onClick={action} to="/mental_clinic">
          Poradnia zdrowia psychicznego
        </Link>
        <ListItemAvatar sx={{ justifyContent: "center" }}>
          <PaidOutlinedIcon color="primary" fontSize="small" />
        </ListItemAvatar>
      </ListItem>
    </Paper>
  );
};
