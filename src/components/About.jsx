import { Box, Button, Container, Typography } from "@mui/material"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { theme } from "../styles/theme"

export const About = () => {
  return (
    <Container>
      <Box
        sx={{
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          justifyItems: "center",
          gap: '1rem'
        }}
      >
        <Typography
          variant="h3"
          textAlign='center'
        >
          Hello! My name is Vivian Schwer, and I'm a St. Louis born and raised girl 
          who moved to Kansas City to explore my passion for pharmacy. 
          I am currently interested in both acute and ambulatory care settings and am 
          interested in pursuing a residency. I have over two years of hospital experience. 
          I enjoy interprofessional collaboration to seek out the best individualized care for patients!
        </Typography>
        <Button
          variant="text"
          href="https://www.linkedin.com/in/vivianschwer/"
          target="_blank"
          sx={{ padding: 0 }}
          title="LinkedIn"
        >
          <LinkedInIcon sx={{ fontSize: '4rem', color: theme.palette.icons.linkedin }} />
        </Button>
      </Box>
    </Container>
  )
}