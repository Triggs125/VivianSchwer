import { Box, Container, Typography } from "@mui/material"
import { Card } from "./Card";

export const Leadership = () => {
  return (
    <Container>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <Typography variant="h1" textAlign='center'>Leadership</Typography>
        <Box
          display="flex"
          gap="2rem"
          flexDirection="row"
          justifyContent='center'
          flexWrap='wrap'
        >
          <Card
            name="Phi Lambda Sigma, Beta Eta Chapter"
            title="Secretary"
            start="May 2022"
            end="May 2023"
          />
          <Card
            name="Public Health Orgainization"
            title="Vice President"
            start="May 2021"
            end="May 2022"
          />
          <Card
            name="Student Society of Health-System Pharmacists"
            title="Project Chair"
            start="May 2021"
            end="May 2022"
          />
          <Card
            name="Kappa Psi Gamma Theta Chapter"
            title="Vice Regent Pledge"
            start="May 2021"
            end="May 2022"
          />
        </Box>
      </Box>
    </Container>
  )
}