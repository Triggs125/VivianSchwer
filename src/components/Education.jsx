import { Box, Container, Typography } from "@mui/material"
import "../styles/education.css";

import umkc_pharmacy from "../assets/umkc-pharmacy.jpg";
import siue from "../assets/SIUE.png";
import { Card } from "./Card";

export const Education = () => {
  return (
    <Container id="education" sx={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <Typography variant="h1" textAlign='center'>Education</Typography>
      <Box
        id="education-wrapper"
        display="flex"
        gap="2rem"
        flexDirection="row"
        justifyContent='center'
        flexWrap='wrap'
      >
        <Card
          imgSrc={umkc_pharmacy}
          name="University of Missouri - Kansas City School of Pharmacy"
          title="Doctor of Pharmacy"
          start="Anticipated"
          end="May 2023"
        />
        <Card
          imgSrc={siue}
          name="Southern Illinois University of Edwardsville"
          title="Undergraduate Pre-Pharmacy Coursework"
          start="August 2016"
          end="May 2019"
        />
      </Box>
    </Container>
  )
}