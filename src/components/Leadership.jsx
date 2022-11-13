import { Box, Container, Typography } from "@mui/material"
import { theme } from "../styles/theme";

const Card = ({ name, title, start, end }) => {
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
      <Typography variant="h2" textAlign="center">
        {name}
      </Typography>
      <Typography variant="h3">{title}</Typography>
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

export const Leadership = () => {
  return (
    <Container>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <Typography className="section-header" variant="h1" textAlign='center'>Leadership</Typography>
        <Box
          id="education-wrapper"
          display="flex"
          gap="2rem"
          flexDirection="row"
          justifyContent='center'
          flexWrap='wrap'
        >
          <Card
            name="Phi Lambda Sigma"
            title="Secretary"
            start="August 2022"
            end="May 2023"
          />
          <Card
            name="Public Health Orgainization"
            title="Vice President"
            start="August 2021"
            end="May 2022"
          />
          <Card
            name="Student Society of Health-System Pharmacists"
            title="Project Chair"
            start="August 2021"
            end="May 2022"
          />
          <Card
            name="Kappa Psi Gamma Theta Chapter"
            title="Vice Regent Pledge"
            start="August 2021"
            end="May 2022"
          />
        </Box>
      </Box>
    </Container>
  )
}