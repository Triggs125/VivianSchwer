import { Box, Container, Typography } from "@mui/material"
import { Card } from "./Card";

export const Organizations = () => {
  return (
    <Container>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <Typography variant="h1" textAlign='center'>Organizations</Typography>
        <Box
          display="flex"
          gap="2rem"
          flexDirection="row"
          justifyContent='center'
          flexWrap='wrap'
        >
          <Card
            name="Phi Lambda Sigma, Beta Eta Chapter "
            start="April 2022"
            end="Present"
          />
          <Card
            name="Public Health Orgainization"
            start="August 2019"
            end="Present"
          />
          <Card
            name="Student Society of Health-System Pharmacists"
            start="August 2019"
            end="Present"
          />
          <Card
            name="American Pharmacists Association - Academy of Student Pharmacists"
            start="August 2019"
            end="Present"
          />
          <Card
            name="Kappa Psi Pharmaceutical Fraternity, Gamma Theta Chapter"
            start="August 2019"
            end="Present"
          />
        </Box>
      </Box>
    </Container>
  )
}