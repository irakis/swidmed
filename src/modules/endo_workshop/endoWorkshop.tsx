import { FC } from "react";
import { Box } from "@mui/material";
import { Clinic } from "../clinic/clinic";
import { data } from "./endo_workshop_data";

export const EndoWorkshop: FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        margin: 0,
        padding: 0,
      }}
    >
      <Clinic
        title={data.title}
        alt={data.alt}
        text={data.text}
        url={data.url}
        items={data.items}
        text1={data.text1}
        text0={data.text0}
        items0={data.items0}
      />
      <Box
        sx={{
          overflow: "hidden",
          marginBottom: 11,
          "@media(max-width: 576px)": { marginBottom: 0 },
        }}
      >
        <img height="auto" width="100%" src="/images/team.avif" alt="team" />
      </Box>
    </Box>
  );
};
