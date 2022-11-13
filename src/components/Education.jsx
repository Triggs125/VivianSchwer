import { Box, Container, Typography } from "@mui/material"
import Image from "mui-image"
import "../styles/education.css";
import { theme } from "../styles/theme";

import umkc_pharmacy from "../assets/umkc-pharmacy.jpg";
import siue from "../assets/SIUE.svg-400x400-1493625252";

export const Education = () => {
  return (
    <Container id="education" sx={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <Typography className="section-header" variant="h1" textAlign='center'>Education</Typography>
      <Box
        id="education-wrapper"
        display="flex"
        gap="2rem"
        flexDirection="row"
        justifyContent='center'
        flexWrap='wrap'
      >
        <Box className="education-item" boxShadow={theme.shadows[4]}>
          <Image src={umkc_pharmacy} iconWrapperStyle={{ display: "hidden" }} />
          <Box className="education-text" display='flex' flexDirection='column'>
            <Typography variant="h2">
              University of Missouri - Kansas City School of Pharmacy
            </Typography>
            <Typography variant="h3">Doctor of Pharmacy</Typography>
            <Typography variant="h3" className="education-text-date">
              <Box>Anticipated&nbsp;</Box>
              <Box>May 2023</Box>
            </Typography>
          </Box>
        </Box>
        <Box className="education-item" boxShadow={theme.shadows[4]}>
          <Image src={siue} iconWrapperStyle={{ display: "hidden" }} />
          <Box className="education-text" display='flex' flexDirection='column'>
            <Typography variant="h2">
              Southern Illinois University of Edwardsville
            </Typography>
            <Typography variant="h3">Undergraduate Pre-Pharmacy Coursework</Typography>
            <Typography variant="h3" className="education-text-date">
              <Box>August 2016 -&nbsp;</Box>
              <Box>May 2019</Box>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}