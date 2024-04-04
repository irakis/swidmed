import { FC } from "react";
import Box from "@mui/material/Box";
import { Clinic } from "../clinic/clinic";
import { data } from "./pricing-data.tsx";

export const Pricing: FC = () => {
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
        text1={data.text1}
        url={data.url}
        items={data.items}
        items0={data.items0}
        text0={data.text0}
      />
    </Box>
  );
};
