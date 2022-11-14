import { Box, Typography } from "@mui/material";
import Image from "mui-image";
import { theme } from "../styles/theme";

export const Card = ({ imgSrc, name, title, start, end }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        gap: '2rem',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        overflow: 'hidden',
        padding: '1rem',
        borderRadius: '1rem',
        boxShadow: theme.shadows[4],
        maxWidth: '500px',
        width: '100%'
      }}
    >
      {imgSrc && <Image src={imgSrc} iconWrapperStyle={{ display: "hidden" }} />}
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