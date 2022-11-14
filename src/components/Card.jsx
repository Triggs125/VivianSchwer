import { Box, Typography } from "@mui/material";
import Image from "mui-image";
import { theme } from "../styles/theme";
import "../styles/card.css";

export const Card = ({ imgSrc, name, title, start, end }) => {
  return (
    <Box
      className="card"
      sx={{
        boxShadow: theme.shadows[4]
      }}
    >
      {imgSrc && (
        <Image src={imgSrc} fit="cover" />
      )}
      <Typography variant="h2" textAlign="center">
        {name}
      </Typography>
      {title && <Typography variant="h3" textAlign="center">{title}</Typography>}
      <Typography
        variant="h3"
        textAlign='center'
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="center"
      >
        <Box>{start} -&nbsp;</Box>
        <Box>{end}</Box>
      </Typography>
    </Box>
  );
}